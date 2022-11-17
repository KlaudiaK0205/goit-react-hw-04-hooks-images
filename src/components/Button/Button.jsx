import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ handleClick }) => {
    return (
        <button type="button" className={styles.btn} onClick={() => handleClick()}>
            Load more
        </button>
        );
    };

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
};