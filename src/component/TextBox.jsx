import React from 'react'
import styles from '../styles/Input.module.css'

const TextBox = ({ laber, ...props }) => {
  return (
    <>
      {/* Container for the textarea */}
      <div className={styles.ContainerInput}>
        {/* Render the label if it exists */}
        {laber ? <label>{laber}</label> : ""}
        {/* Render the textarea */}
        <textarea rows={3} {...props} />
      </div>
    </>
  )
}

export default TextBox;
