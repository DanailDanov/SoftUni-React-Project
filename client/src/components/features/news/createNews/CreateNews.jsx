import { useState } from 'react';

import * as newsApi from '../../../../API/newsApi';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../../hooks/useForm';
import { createNewsInitialState } from '../../../../core/environments/constants';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './CreateNews.module.css';

export default function CreateNews() {

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState(createNewsInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    const resetFormHandler = () => {
        setFormValues(createNewsInitialState);
        setErrors({});
    };

    const createNewsSubmitHandler = (values) => {

        newsApi.createNews(values)
            .then(() => navigate('/allNews'))
            .catch(err => {
                setHasServerError(true);
                setServerError(err.message)
            })

        resetFormHandler();
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
                text: 'Описанието трябва да бъде минимум 5 символа'
            }))
        } else {
            if (errors.text) {
                setErrors(state => ({ ...state, text: '' }))
            }
        }
    }

    const { values, onChange, onSubmit } = useForm(createNewsSubmitHandler, formValues);

    console.log(values);

    return (
        <div className={styles['create-form-container']}>
            <Form onSubmit={onSubmit}>
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
                <Button as="input" type="submit" value="Създай"
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