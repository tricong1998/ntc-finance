import { Field, useField } from 'formik'
import { useEffect, useState } from 'react'

export const FormikInputField = ({
    name,
    error,
    touched,
    label,
    isOptional,
}: {
    name: string
    label: string
    error?: string
    touched?: boolean
    isOptional?: boolean
}) => {
    const commonLabelClass = 'absolute m-1 ml-4'
    const [labelClass, setLabelClass] = useState(commonLabelClass + ' mt-4')
    const [field] = useField(name)

    const onFocus = () => {
        setLabelClass(commonLabelClass)
    }
    useEffect(() => {
        if (field.value) {
            setLabelClass(commonLabelClass)
        }
    }, [field.value])

    const onBlur = () => {
        if (!field.value) {
            setLabelClass(commonLabelClass + ' mt-4')
        }
    }

    return (
        <div className="relative mb-3 text-base">
            <div className={labelClass}>
                {label} {isOptional ? '(Optional)' : ''}
            </div>
            <Field
                onFocus={onFocus}
                onBlur={onBlur}
                className="p-2 pl-4 h-14 rounded pt-6 w-full border"
                name={name}
            ></Field>
            {error && touched ? (
                <div className="link_error_button_color">{error}</div>
            ) : null}
        </div>
    )
}
