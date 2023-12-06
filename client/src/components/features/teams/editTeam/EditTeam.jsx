import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as teamApi from '../../../../API/teamApi';
import useForm from '../../../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './EditTeam.module.css';

const editInitialState = {
    teamName: '',
    dateOfCreation: '',
    img: '',
    description: '',
    achievements: '',
};

export default function EditTeam() {

    const navigate = useNavigate();
    const { teamId } = useParams();

    const [teamInfo, setTeamInfo] = useState(editInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});


    useEffect(() => {
        teamApi.getOne(teamId)
            .then(result => setTeamInfo(result))
            .catch(err => {
                setHasServerError(true);
                setServerError(err.message);
            });
    }, [teamId]);

    console.log(teamInfo);

    const editSubmitHandler = (values) => {

        teamApi.edit(teamId, values)
            .then(() => navigate(`/detailsTeam/${teamId}`))
            .catch(err => {
                setHasServerError(true);
                setServerError(err.message)
            })
    }

    const teamNameValidator = () => {
        if (values.teamName.length < 1) {
            setErrors(state => ({
                ...state,
                teamName: 'Полето е задължително'
            }))
        } else {
            if (errors.teamName) {
                setErrors(state => ({ ...state, teamName: '' }))
            }
        }
    }

    const dateOfCreationValidator = () => {
        if (values.dateOfCreation.length < 1) {
            setErrors(state => ({
                ...state,
                dateOfCreation: 'Полето е задължително'
            }))
        } else {
            if (errors.dateOfCreation) {
                setErrors(state => ({ ...state, dateOfCreation: '' }))
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

    const descriptionValidator = () => {
        if (values.description.length < 5) {
            setErrors(state => ({
                ...state,
                description: 'Описанието трябва да бъде минимум 5 символа'
            }))
        } else {
            if (errors.description) {
                setErrors(state => ({ ...state, description: '' }))
            }
        }
    }

    const achievementsValidator = () => {
        if (values.achievements.length < 5) {
            setErrors(state => ({
                ...state,
                achievements: 'Описанието трябва да бъде минимум 5 символа'
            }))
        } else {
            if (errors.achievements) {
                setErrors(state => ({ ...state, achievements: '' }))
            }
        }
    }

    const { values, onChange, onSubmit } = useForm(editSubmitHandler, teamInfo);

    // console.log(values);
    return (
        <div className={styles['edit-form-container']}>
            <Form method='POST' onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Име на отбора:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Въведете име на отбора"
                        name='teamName'
                        value={values.teamName}
                        onChange={onChange}
                        onBlur={teamNameValidator}
                    />
                    {errors.teamName && (
                        <p className={styles.errorMessage}>{errors.teamName}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Дата на създаване</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Въведете дата на създаване"
                        name='dateOfCreation'
                        value={values.dateOfCreation}
                        onChange={onChange}
                        onBlur={dateOfCreationValidator}
                    />
                    {errors.dateOfCreation && (
                        <p className={styles.errorMessage}>{errors.dateOfCreation}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Добави снимка:</Form.Label>
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
                    <Form.Label>Описание на отбора</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name='description'
                        value={values.description}
                        onChange={onChange}
                        onBlur={descriptionValidator}
                    />
                    {errors.description && (
                        <p className={styles.errorMessage}>{errors.description}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Постижения</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name='achievements'
                        value={values.achievements}
                        onChange={onChange}
                        onBlur={achievementsValidator}
                    />
                    {errors.achievements && (
                        <p className={styles.errorMessage}>{errors.achievements}</p>
                    )}
                </Form.Group>
                <Button as="input" type="submit" value="Редактирай"
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