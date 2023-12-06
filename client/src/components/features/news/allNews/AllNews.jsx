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
        setIsLoading(true);
        newsApi.allNews()
            .then(result => setNews(result))
            .catch(err => {
                setHasServerError(true);
                setServerError(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

  
    // console.log(news);
    return (
        <div className={styles['card-items']}>

            {isLoading && < Loader />}

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
    );
} 