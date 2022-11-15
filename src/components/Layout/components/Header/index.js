import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Test</h2>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;
