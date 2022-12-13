import React from 'react'
import Dasboard from '../Dashboard/Dasboard'
import styles from './Patient.module.css'


function Patient({ rol }) {
  return (
    <div className={styles.contDashboard}>

      <Dasboard rolMenu={2} />

      <div className={styles.contPatient}>
        <h1>Proxima cita</h1>
        <div className={styles.nextAppointment}>
          {rol === 1 ?
            <div className={styles.notAppoinmet}>
              <p>Aun no tienes cita</p>
            </div>
            :
            <div className={styles.appointment}>
              <div className={styles.infoAppointment}>

                <p>Psicologo:  Lic. Claudia Patricia Gonzaléz Moreno</p>

                <div className={styles.dateAppointment}>
                  <p>Fecha:  12/07/22</p>
                  <p>Hora:  12:00 pm</p>
                </div>
              </div>
              <div className={styles.btnAppointment}>
                <button className={styles.videoCall}>Videollamada</button>
                <button className={styles.cancel}>Cancelar</button>
              </div>
            </div>
          }
        </div>
        <h1>Tareas</h1>
        <div className={styles.tasks}>
          {rol === 1 ?
            <div className={styles.notTask}>
              <p>Aun no tienes cita</p>
            </div>
            :
            <div className={styles.task}>
              <p> • Tarea 1</p>
              <p> • Tarea 2</p>
              <p> • Tarea 3</p>
              <p> • Tarea 4</p>
              <p> • Tarea 5</p>
              <p> • Tarea 6</p>
              <p> • Tarea 7</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Patient