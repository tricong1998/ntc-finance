import { Field, useField } from 'formik'
import { useEffect, useState } from 'react'
import { IconAntiEyes } from './IconAntiEyes'
import { IconEyes } from './IconEyes'

export const FormikSecretInputField = ({
    name,
    error,
    touched,
    label,
    isOptional,
    isAbleShow,
}: {
    name: string
    label: string
    error?: string
    touched?: boolean
    isOptional?: boolean
    isAbleShow?: boolean
}) => {
    const commonLabelClass = 'absolute m-1 ml-4'
    const [labelClass, setLabelClass] = useState(commonLabelClass + ' mt-4')
    const [field] = useField(name)
    const [isHide, setIsHide] = useState(true)

    useEffect(() => {
        if (field.value) {
            setLabelClass(commonLabelClass)
        }
    }, [field])

    const onFocus = () => {
        setLabelClass(commonLabelClass)
    }

    const onBlur = () => {
        if (!field.value) {
            setLabelClass(commonLabelClass + ' mt-4')
        }
    }

    const onclickHide = () => setIsHide(!isHide)

    return (
        <div className="relative mb-3 text-base">
            <div className={labelClass}>
                {label} {isOptional ? '(Optional)' : ''}
            </div>
            <Field
                type={isHide ? 'password' : 'text'}
                onFocus={onFocus}
                onBlur={onBlur}
                className="p-2 pl-4 h-14 rounded pt-6 w-full border"
                name={name}
            ></Field>
            {isAbleShow && (
                <div
                    className="absolute flex items-center right-0 top-0 h-full mr-3"
                    onClick={onclickHide}
                >
                    {isHide ? <IconAntiEyes /> : <IconEyes />}
                </div>
            )}
            {error && touched ? (
                <div className="link_error_button_color">{error}</div>
            ) : null}
        </div>
    )
}
