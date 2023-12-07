import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as newsApi from '../../../../API/newsApi';

import LatestNewsCardItem from '../latestNewsCardItem/LatestNewsCardItem';
import Loader from '../../../shared/Loader';
import formatDate from "../../../../utils/formatDate";

import styles from './LatestNews.module.css';

export default function LatestNews() {

    const [LatestNews, setLatestNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    useEffect(() => {
        setIsLoading(true)
        newsApi.getLastNews()
            .then(result => {
                setLatestNews(result)
            })
            .catch(err => {
                setHasServerError(true);
                setServerError(err.message)
            })
            .finally(() => setIsLoading(false));
    }, []);

    // console.log(LatestNews);
    return (
        <div className={styles['main-container']}>
            <div className={styles['container']}>
                <div className={styles['latest-news-heading']}>
                    <h2>Последни новини</h2>
                </div>

                {isLoading && < Loader />}


                {hasServerError && (
                    <p className={styles['serverError']}>Изникна проблем! Опитайте отново :)</p>
                )}

                <div className={styles['card-items']}>
                    {LatestNews.length > 0
                        ? (
                            <>
                                {LatestNews.map(news => (
                                    < LatestNewsCardItem
                                        key={news._id}
                                        newsId={news._id}
                                        img={news.img}
                                        newsHeader={news.newsHeader}
                                        createdOn={formatDate(news._createdOn)}
                                    />
                                ))}

                            </>
                          )
                        :
                        <div>
                            <p>Няма новини за показване!</p>
                        </div>
                    }
                </div>

            </div>
            <div className={styles['all-News']}>
                <Link to={'/allNews'}>
                    Виж всички новини
                </Link>
            </div>
        </div>
    );
}