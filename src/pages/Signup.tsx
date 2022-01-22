import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { ConnectionLayout } from '../components/connect/ConnectionLayout'
import * as Yup from 'yup'
import { FormikInputField } from '../components/connect/FormikInputField'
import { FormikCheckboxField } from '../components/connect/FormikCheckBoxField'
import { FormikSecretInputField } from '../components/connect/FormikInputSecretField'
import { FormikSubmit } from '../components/connect/FormikSubmitButton'
import { RoutePath } from '../shared/routers'
import { Link } from 'react-router-dom'

const signUpSchema = Yup.object().shape({
    userAddress: Yup.string().required(),
    userName: Yup.string().required(),
    email: Yup.string().required().email(),
    referralCode: Yup.string(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
        .required()
        .test({
            name: 'min',
            exclusive: false,
            params: {},
            message: 'Confirm password must be same as password',
            test: (value, context) => {
                if (value && context.parent.password) {
                    return value === context.parent.password
                }
                return true
            },
        }),
    isAgree: Yup.bool().test({
        name: 'require_true',
        exclusive: false,
        params: {},
        message: 'You must accept the Terms of Use and Privacy Policy',
        test: (value) => {
            return !!value
        },
    }),
})

export const SignUp = () => {
    const [address, setAddress] = useState('')
    return (
        <ConnectionLayout>
            <SignUpNewAccount address={address} />
        </ConnectionLayout>
    )
}

const SignUpNewAccount = ({ address }: { address: string }) => {
    return (
        <>
            {!address && (
                <div className="absolute top-px right-px mr-6 mt-8">
                    Have an account? <Link to={RoutePath.Login}>Sign in</Link>
                </div>
            )}
            <div className="flex justify-center flex-col h-screen flex-start w-96">
                <div className="form-connection-header">
                    Sign up to Ntc finance
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
                        initialValues={{
                            userName: '',
                            password: '',
                            confirmPassword: '',
                            referralCode: '',
                            email: '',
                            isAgree: false,
                        }}
                        validationSchema={signUpSchema}
                        onSubmit={(value) => console.log({ value })}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <FormikInputField
                                    label="User Name"
                                    name="userName"
                                    error={errors.userName}
                                    touched={touched.userName}
                                />
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
                                <FormikSecretInputField
                                    label="Confirm password"
                                    name="confirmPassword"
                                    error={errors.confirmPassword}
                                    touched={touched.confirmPassword}
                                    isAbleShow={true}
                                />
                                <FormikInputField
                                    label="Referral code"
                                    name="referralCode"
                                    error={errors.referralCode}
                                    touched={touched.referralCode}
                                    isOptional={true}
                                />
                                <FormikCheckboxField
                                    label={
                                        <span>
                                            I agree to the <a>Terms of Use</a>{' '}
                                            and <a>Privacy Policy</a>
                                        </span>
                                    }
                                    name="isAgree"
                                    error={errors.isAgree}
                                    touched={touched.isAgree}
                                ></FormikCheckboxField>
                                <div className="flex flex-row my-10 text-white justify-end">
                                    <FormikSubmit
                                        className="justify-items-end"
                                        name="Create account"
                                    ></FormikSubmit>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
