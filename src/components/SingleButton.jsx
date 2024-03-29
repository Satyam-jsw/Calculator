import React from 'react'
import styles from './SingleButton.module.css'

const SingleButton = ({ item, handleClicked }) => {
    return (
        <>
            <button className={styles.button} onClick={handleClicked}>{item} </button>
        </>
    )
}

export default SingleButton