import { Field, useField } from 'formik'
import { IconCheck } from './IconChecked'

export const FormikCheckboxField = ({
    name,
    error,
    touched,
    label,
}: {
    name: string
    label: React.ReactNode
    error?: string
    touched?: boolean
}) => {
    const [field] = useField(name)

    return (
        <div className="flex flex-col mb-2 text-base custom-checkbox">
            <div className="flex items-center">
                <Field
                    type="checkbox"
                    id="checkbox"
                    className="mr-1"
                    name={name}
                />
                <label htmlFor="checkbox" className="flex items-center">
                    <div
                        className={`checkbox ${
                            field.value ? 'checkbox--active' : ''
                        }`}
                        // This element is purely decorative so
                        // we hide it for screen readers
                        aria-hidden="true"
                    >
                        {field.value && <IconCheck />}
                    </div>
                    {label}
                </label>
            </div>

            {error && touched ? (
                <div className="link_error_button_color">{error}</div>
            ) : null}
        </div>
    )
}
