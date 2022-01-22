import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { ConnectionLayout } from '../components/connect/ConnectionLayout'
import * as Yup from 'yup'
import { FormikInputField } from '../components/connect/FormikInputField'
import { FormikCheckboxField } from '../components/connect/FormikCheckBoxField'
import { FormikSecretInputField } from '../components/connect/FormikInputSecretField'
import { FormikSubmit } from '../components/connect/FormikSubmitButton'
import { Link } from 'react-router-dom'
import { RoutePath } from '../shared/routers'

const loginSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
})

export const Login = () => {
    const [address, setAddress] = useState('')
    return (
        <ConnectionLayout>
            <LoginAccount address={address} />
        </ConnectionLayout>
    )
}

const LoginAccount = ({ address }: { address: string }) => {
    return (
        <>
            {!address && (
                <div className="absolute top-px right-px mr-6 mt-8">
                    Want to create a new account with your email?{' '}
                    <Link to={RoutePath.SignUp}>Sign up</Link>
                </div>
            )}
            <div className="flex justify-center flex-col h-screen flex-start w-96">
                <div className="form-connection-header">
                    Sign in to Ntc finance
                </div>
                {!address && (
                    <div className="mt-2 mb-8">
                        <a className="blue-link">
                            {' '}
                            Select your wallet to connect
                        </a>
                    </div>
                )}
                <div className="">
                    <Formik
                        initialValues={{ password: '', email: '' }}
                        validationSchema={loginSchema}
                        onSubmit={(value) => console.log({ value })}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <FormikInputField
                                    label="Email"
                                    name="email"
                                    error={errors.email}
                                    touched={touched.email}
                                />
                                <FormikSecretInputField
                                    label="Password"
                                    name="password"
                                    error={errors.password}
                                    touched={touched.password}
                                    isAbleShow={true}
                                />

                                <div className="flex flex-row justify-between my-10">
                                    <Link
                                        className="blue-link"
                                        to={RoutePath.SignUp}
                                    >
                                        Forgot your password?
                                    </Link>
                                    <FormikSubmit name="Continue"></FormikSubmit>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
