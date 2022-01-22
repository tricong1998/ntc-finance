import cx from 'classnames'

export const FormikSubmit = ({
    name,
    className,
}: {
    name: string
    className?: string
}) => {
    return (
        <>
            <button
                className={cx(
                    'bg-button rounded-3xl p-3 px-10 text-white submit-button',
                    className
                )}
                type="submit"
            >
                {name}
            </button>
        </>
    )
}
