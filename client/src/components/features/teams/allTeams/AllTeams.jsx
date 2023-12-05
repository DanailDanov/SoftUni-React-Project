import { useEffect, useState } from "react";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import * as teamApi from '../../../../API/teamApi';
import Loader from '../../../shared/Loader';
import TeamCardItem from "../TeamCardItem/TeamCardItem";

import styles from './AllTeams.module.css';

export default function AllTeams() {


    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    useEffect(() => {
        setIsLoading(true);
        teamApi.getAll()
            .then(result => setTeams(result))
            .catch(err => {
                setHasServerError(true);
                setServerError(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    console.log(teams);
    return (
        <div className={styles['card-items']}>

            {isLoading && < Loader />}

            {teams.length > 0
                ? (
                    <>
                        {teams.map(team => (
                            <TeamCardItem
                                key={team._id}
                                teamId={team._id}
                                name={team.teamName}
                                description={team.description}
                                img={team.img}
                            />
                        ))}
                    </>
                   )
                :
                <div>
                    <p>Няма отбори за показване!</p>
                </div>
            }
        </div>
    );
} 