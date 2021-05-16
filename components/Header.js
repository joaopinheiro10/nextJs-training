import headerStyles from '../styles/Header.module.css';

const Header = () =>
{
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>NextJs</span> Training
            </h1>
        </div>
    )
}

export default Header;