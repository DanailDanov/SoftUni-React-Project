import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as newsApi from '../../../../API/newsApi';
import useForm from '../../../../hooks/useForm';
import { editNewsInitialState } from '../../../../core/environments/constants';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './EditNews.module.css';

export default function EditNews() {

    const navigate = useNavigate();
    const { newsId } = useParams();

    const [newsInfo, setNewsInfo] = useState(editNewsInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});


    useEffect(() => {
        newsApi.getOne(newsId)
            .then(result => setNewsInfo(result))
            .catch(err => {
                setHasServerError(true);
                setServerError(err.message);
            });
    }, [newsId]);

    // console.log(newsInfo);

    const editNewsSubmitHandler = (values) => {

        newsApi.editNews(newsId, values)
            .then(() => navigate(`/detailsNews/${newsId}`))
            .catch(err => {
                setHasServerError(true);
                setServerError(err.message)
            })
    }

    const newsHeaderValidator = () => {
        if (values.newsHeader.length < 1) {
            setErrors(state => ({
                ...state,
                newsHeader: 'Полето е задължително'
            }))
        } else {
            if (errors.newsHeader) {
                setErrors(state => ({ ...state, newsHeader: '' }));
            }
        }
    }

    const imgValidator = () => {
        if (values.img.length < 1) {
            setErrors(state => ({
                ...state,
                img: 'Полето е задължително'
            }))
        } else {
            if (errors.img) {
                setErrors(state => ({ ...state, img: '' }))
            }
        }
    }

    const textValidator = () => {
        if (values.text.length < 5) {
            setErrors(state => ({
                ...state,
                text: 'Текстът трябва да бъде минимум 5 символа'
            }))
        } else {
            if (errors.text) {
                setErrors(state => ({ ...state, text: '' }))
            }
        }
    }

    const { values, onChange, onSubmit } = useForm(editNewsSubmitHandler, newsInfo);

    // console.log(values);
    return (
        <div className={styles['edit-form-container']}>
        <Form style={{ width: '30%' }} method='POST' onSubmit={onSubmit}>
        <div className={styles['editNews-heading']} >
                    <p>Редактирайте новината</p>
                </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Заглавие:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Въведете заглавие"
                    name='newsHeader'
                    value={values.newsHeader}
                    onChange={onChange}
                    onBlur={newsHeaderValidator}
                />
                 {errors.newsHeader && (
                    <p className={styles.errorMessage}>{errors.newsHeader}</p>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Добавете снимка:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Добавете снимка"
                    name='img'
                    value={values.img}
                    onChange={onChange}
                    onBlur={imgValidator}
                />
                   {errors.img && (
                    <p className={styles.errorMessage}>{errors.img}</p>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Текст:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name='text'
                    value={values.text}
                    onChange={onChange}
                    onBlur={textValidator}
                />
                   {errors.text && (
                    <p className={styles.errorMessage}>{errors.text}</p>
                )}
            </Form.Group>
            <Button style={{
                    width: '100%',
                    fontSize: '1.3em',
                    padding: '0.3em'
                }} as="input" type="submit" value="Редактирай"
            disabled={(Object.values(errors).some(x => x)
                || (Object.values(values).some(x => x == '')))}
            />
                 {hasServerError && (
                <p className={styles.serverError}>{serverError}</p>
            )}
        </Form>
    </div>
    );
}