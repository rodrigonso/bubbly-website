import styles from '../styles/Buttons.module.scss';

export default function Button({ title, type, style, size, onClick, className }) {

    const renderButton = () => {
        if (type === 'link') return <a style={{ ...style }} className={`${className} ${styles.buttonlink}`}>{title}</a>
        if (size === 'small') return <div className={`${className} ${styles.buttonsmall}`} onClick={onClick}><div className={styles[type]} style={{ ...style }}>{title}</div></div>
        else return <div className={styles.button} onClick={onClick}><div className={styles[type]} style={{ ...style }}>{title}</div></div>
    }

    return (
        <>
            {renderButton()}
        </>
    )
}
