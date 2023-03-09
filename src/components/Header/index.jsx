import styles from "./header.module.css";
import '../../App.css';

function Header({ title, slogan }) {

    return (
        <header className={styles.header}>
            <div className="container">
                <img className={styles.headerAvatar} src="./images/avatar.png" alt="avatar" />
                <h1 className={styles.headerTitle}>
                    {title}
                </h1>
                <hr className={styles.dividerLight} />
                <p className={styles.headerSlogan}>
                    {slogan}
                </p>
            </div>
        </header>
    );
}
export default Header;
