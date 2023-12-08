import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as newsApi from '../../../../API/newsApi';
import { AuthContext } from '../../../../contexts/AuthContext';

import DeleteNews from '../deleteNews/DeleteNews';
import { ADMIN_ID } from '../../../../core/environments/constants';

import Loader from '../../../shared/Loader';

import Button from 'react-bootstrap/Button';
import styles from './DetailsNews.module.css';

export default function DetailsNews() {


    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const { newsId } = useParams();

    const [newsDetails, setNewsDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        document.title = 'Подробна новина'
        newsApi.getOne(newsId)
            .then(result => {
                setNewsDetails(result)
            })
            .catch(err => {
                if (err.code == 404) {
                    navigate('/notFound')
                }
            })
            .finally(() => setIsLoading(false))
    }, [newsId, navigate]);

    const deleteHandler = () => {
        setShowDelete(true)
    }

    const onDeleteTeam = (e) => {
        e.preventDefault();

        setShowDelete(false);

        newsApi.remove(newsId)
            .then(() => navigate('/allNews'))
            .catch(err => console.log(err.message))

    }

    return (
        <div className={styles['news-box']}>
            {isLoading && < Loader />}

            {showDelete && (
                <DeleteNews
                    onClose={() => setShowDelete(false)}
                    onDeleteTeam={onDeleteTeam}
                />
            )}

            <div className={styles['header-news']}>
                <div className={styles['header-news-p']}>
                    <p>{newsDetails.newsHeader}</p>
                </div>
            </div>
            <div className={styles['news-container']}>
                <div className={styles['news-articles']}>
                    <article className={styles['main-article']}>
                        <img src={newsDetails.img} alt="" />
                        <p>{newsDetails.text}</p>
                    </article>
                </div>
                {ADMIN_ID === auth?._id && (
                    <div className={styles['btn']}>
                        <Button style={{ marginRight: '1em' }} as={Link} to={`/editNews/${newsId}`} variant="primary">Редактирай</Button>
                        <Button onClick={deleteHandler} variant="primary">Изтрий</Button>
                    </div>
                )}
            </div>
        </div>
    );
}