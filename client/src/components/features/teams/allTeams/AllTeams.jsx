import { useEffect, useState } from "react";

import * as teamApi from '../../../../API/teamApi';
import Loader from '../../../shared/Loader';
import TeamCardItem from "../TeamCardItem/TeamCardItem";
import formatDate from '../../../../utils/formatDate';

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

    return (
        <div className={styles['container']}>
            <div className={styles['row']}>

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
                                    createdOn={formatDate(team._createdOn)}
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
        </div>
    );
} 