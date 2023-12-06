import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as teamApi from '../../../../API/teamApi';

import { AuthContext } from '../../../../contexts/AuthContext';
import Loader from '../../../shared/Loader';

import styles from './DetailsTeam.module.css'
import DeleteTeam from '../deleteTeam/DeleteTeam';

import Button from 'react-bootstrap/Button';


export default function DetailsTeam() {

    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const { teamId } = useParams();

    const [teamDetails, setTeamDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);

    // console.log(teamId);
    // console.log(auth);

    useEffect(() => {

        teamApi.getOne(teamId)
            .then(result => {
                setTeamDetails(result)
            })
            .catch(err => console.log(err.message))
            .finally(() => setIsLoading(false))
    }, [teamId]);

    const deleteHandler = () => {
        setShowDelete(true)
    }

    const onDeleteTeam = (e) => {
        e.preventDefault();

        setShowDelete(false);

        teamApi.remove(teamId)
            .then(() => navigate('/allTeams'))
            .catch(err => console.log(err.message))

    }
    // console.log(teamDetails);

    console.log(showDelete);
    return (
        <div className={styles['team']}>

            {isLoading && < Loader />}

            {showDelete && (
                <DeleteTeam
                    onClose={() => setShowDelete(false)}
                    onDeleteTeam={onDeleteTeam}
                />
            )}

            <div className={styles['teamInfo-left']}>
                <div className={styles['teamInfo-left-logo']}>
                    <img src={teamDetails.img} alt="" />
                </div>

            </div>
            <div className={styles['teamInfo-right']}>
                <div className={styles['teamInfo-right-title']}>
                    <p>{teamDetails.teamName}</p>
                </div>
                <div className={styles['teamInfo-right-info']}>
                    <p>{teamDetails.description}</p>
                    <p>{teamDetails.achievements}</p>
                    <p>{teamDetails.dateOfCreation}</p>
                </div>
            </div>
            {auth?._id === teamDetails._ownerId && (
                <>
                    <Link to={`/edit/${teamId}`}>EDIT</Link>
                    <a onClick={deleteHandler}>DELETE</a>
                </>
            )}

        </div>
    );
}