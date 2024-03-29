import React from 'react'
import styles from './Button.module.css'
import SingleButton from './SingleButton'



const Button = ({ items, onButtonClicked }) => {
    return (
        <>
            <div className={styles.buttonContainer}>
                {
                    items.map((buttonName) => (<SingleButton key={buttonName} item={buttonName} handleClicked={() => onButtonClicked(buttonName)} />))
                }
            </div>
        </>
    )
}

export default Button