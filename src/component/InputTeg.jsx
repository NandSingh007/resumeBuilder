import React from 'react';
import styles from '../styles/Input.module.css';

const InputTeg = ({ label, value, ...props }) => {
  return (
    <>
      <div className={styles.ContainerInput}>
        {/* Render label if it is provided */}
        {label && <label>{label}</label>}
        <input type="text" value={value || ''} {...props} /> {/* Render input element */}
      </div>
    </>
  );
};

export default InputTeg;
