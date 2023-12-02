import { useEffect, useState } from "react";
import styles from './AllTeams.module.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import * as teamApi from '../../../../API/teamApi';
// import Loader from '../../../shared/Loader';
import TeamCardItem from "../TeamCardItem/TeamCardItem";

export default function AllTeams() {
    const [teams, setTeams] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setIsLoading(true);
        teamApi.getAll()
            .then(result => setTeams(result))
            .catch(err => console.log(err))
            // .finally(() => setIsLoading(false));
    }, []);

    console.log(teams);
    return (
      

        <div className={styles['card-items']}>

            {/* {isLoading && < Loader />} */}

            {teams.length > 0
                ? (
                    <>
                        {teams.map(team => (
                            <TeamCardItem
                                key={team._id}
                                productId={team._id}
                                name={team.model}
                                description={team.description}
                                img={team.img}
                            />
                        ))}
                    </>
                   )
                :
                <div>
                    <p>Няма отбори за показване</p>
                </div>
            }
        </div>
    );
} 