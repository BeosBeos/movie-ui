import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Navbar</h2>
        </aside>
    );
}

export default Navbar;
