import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Modal = ({ clickImage, handleClose }) => {
  return (
    <div onClick={() => handleClose()} className={styles.overlay}>
      <div className={styles.modal}>
        <img src={clickImage.largeImageURL} alt={clickImage.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  clickImage: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};
