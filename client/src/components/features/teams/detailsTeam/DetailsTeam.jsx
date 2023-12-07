import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as teamApi from '../../../../API/teamApi';

import { AuthContext } from '../../../../contexts/AuthContext';
import DeleteTeam from '../deleteTeam/DeleteTeam';
import Loader from '../../../shared/Loader';

import Button from 'react-bootstrap/Button';
import styles from './DetailsTeam.module.css'

export default function DetailsTeam() {

    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const { teamId } = useParams();

    const [teamDetails, setTeamDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);

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

    return (
        <div className={styles['team']}>
            <div className={styles['sub-container-team']}>

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
                    <div className={styles['teamInfo-right-info']}>
                        <p>Име на отбора: <span>{teamDetails.teamName}</span></p>
                        <p>Описание на отбора: <span>{teamDetails.description}</span></p>
                        <p>Постижения: <span>{teamDetails.achievements}</span> </p>
                        <p>Дата на създаване: <span> {teamDetails.dateOfCreation} г.</span></p>

                    </div>
                    <div className={styles['teamInfo-right-btn']}>
                        {auth?._id === teamDetails._ownerId && (
                            <>
                                <Button style={{ marginRight: '1em' }} as={Link} to={`/editTeam/${teamId}`} variant="primary">Редактирай</Button>
                                <Button onClick={deleteHandler} variant="primary">Изтрий</Button>
                            </>
                        )}
                    </div>
                </div>
            </div>


        </div>

    );
}