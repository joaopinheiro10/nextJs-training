import Nav from './Nav';
import Header from './Header';
import styles from '../styles/Layout.module.css';

const Layout = (props) =>
{
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {props.children}
                </main>
            </div>
        </>
    )
};

export default Layout;