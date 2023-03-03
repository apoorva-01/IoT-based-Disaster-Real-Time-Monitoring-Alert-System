import React, { useContext, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataStore } from '../utils/DataStore';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default function Main({ }) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const router = useRouter();
    const { redirect } = router.query; // login?redirect=/shipping
    const { state, dispatch } = useContext(DataStore);
    const { userInfo } = state;
    useEffect(() => {
        if (userInfo) {
            router.push('/');
        }
    }, [userInfo, router]);

    const submitHandler = async ({ name, password }) => {
        closeSnackbar();
        try {
            const { data } = await axios.post('/api/users/login', {
                name,
                password,
            });
            dispatch({ type: 'USER_LOGIN', payload: data });
            Cookies.set('userInfo', data);
            router.push(redirect || '/');
        } catch (err) {
            enqueueSnackbar(
                err.response.data ? err.response.data.message : err.message,
                { variant: 'error' }
            );
        }
    };
    return (
        <>
            <div className="login-bg">

                <div className="login-page ">
                    <div className="form">
                        <form onSubmit={handleSubmit(submitHandler)} >
                            <Image width={150} height={100}  sx={{marginBottom:0,marginTop:"-10rem"}}  src="/logo.png" alt="IGSCS Logo" />
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <TextField
                                        sx={{ my: 2 ,backgroundColor:"rgb(232,240,254)"}}
                                        className="form-input"
                                        variant="outlined"
                                        fullWidth
                                        id="name"
                                        label="Username"
                                        inputProps={{ type: 'text' }}
                                        error={Boolean(errors.name)}
                                        helperText={
                                            errors.name ? 'Username is required'
                                                : ''
                                        }
                                        {...field}
                                    ></TextField>
                                )}
                            ></Controller>

                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true,
                                    minLength: 4,
                                }}
                                render={({ field }) => (
                                    <TextField
                                        sx={{ backgroundColor:"rgb(232,240,254)" }}
                                        variant="outlined"
                                        className="form-input"
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        inputProps={{ type: 'password' }}
                                        error={Boolean(errors.password)}
                                        helperText={
                                            errors.password
                                                ? errors.password.type === 'minLength'
                                                    ? 'Password length is more than 3'
                                                    : 'Password is required'
                                                : ''
                                        }
                                        {...field}
                                    ></TextField>
                                )}
                            ></Controller>

                            <i className="fas fa-eye" />

                            <Button className='hvr-grow' type="submit"
                                style={{ width: '100%', backgroundColor: '#208850', color: 'white', marginBottom: '1rem' }} >
                                Log In
                            </Button>
                            <Link href="/signup" >
                                <Button className='hvr-grow' type="submit"
                                    style={{ width: '100%', backgroundColor: '#208850', color: 'white' }} >
                                    Sign Up
                                </Button>
                            </Link>
                        </form>
                    </div>
                </div>

            </div>
        </ >
    );
}

