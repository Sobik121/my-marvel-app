import "./skeleton.scss"

const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="skeleton__title">
                Please select a character to see information
            </div>
            <div className="skeleton__form">
                <div className="skeleton__header">
                    <div className="skeleton__header-photo pulse"></div>
                    <div className="skeleton__header-name pulse"></div>
                </div>
                <div className="skeleton__form-descr pulse"></div>
                <div className="skeleton__form-descr pulse"></div>
                <div className="skeleton__form-descr pulse"></div>
            </div>
        </div>
    )
}

export default Skeleton;