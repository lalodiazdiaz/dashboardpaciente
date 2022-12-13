import React, { useState } from 'react'
import styles from '../Modal/Modal.module.css'

function Modal() {
  const [modal, setModal] = useState(styles.modalClose);

   const modalOpenAction =()=>{

    setModal(styles.modalOpen)
   }
   const modalCloseAction =()=>{
   
    setModal(styles.modalClose)
   }
  
  return (
    <div className={styles.contMain}>
     
     Prueba Modal
    <button onClick={modalOpenAction}>Open Modal</button>

<div className={modal}>
<div className={styles.backModal} >
   </div>
<div className={styles.contModal}>
            <text>Prueba modal</text>
            <button onClick={modalCloseAction}>Close modal</button>
        </div>
  
</div>
   
    </div>
  )
}

export default Modal

