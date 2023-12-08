import { useEffect, useState } from "react";

import * as newsApi from '../../../../API/newsApi';
import Loader from '../../../shared/Loader';
import NewsCardItem from "../newsCardItem/NewsCardItem";
import formatDate from "../../../../utils/formatDate";

import styles from './AllNews.module.css';

export default function AllNews() {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    useEffect(() => {
        document.title = 'Новини'
        setIsLoading(true);
        newsApi.allNews()
            .then(result => setNews(result))
            .catch(err => {
                setHasServerError(true);
                setServerError(err);
            })
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <div className={styles['container']}>

            <h1 className={styles['h1']}>Новини</h1>

            <div className={styles['row']}>

                {isLoading && < Loader />}

                {hasServerError && (
                        <p>Изникна проблем! Моля, опитайте отново! </p>
                    )}

                {news.length > 0
                    ? (
                        <>
                            {news.map(news => (
                                <NewsCardItem
                                    key={news._id}
                                    newsId={news._id}
                                    newsHeader={news.newsHeader}
                                    img={news.img}
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
    );
} 