import React, { useState } from 'react'
import styles from '../Dashboard/Dashboard.module.css'
import btnMenu from '../../assets/menuIcon.png'
import logo from '../../assets/logo.png'

function PatientDashboard() {
  return (
    <>
      <div className={styles.optionsAside}>
        <a href='#'>
          Citas y  tareas
        </a>
        <a href='#'>
          Notas
        </a>
        <a href='#'>
          Evidencias
        </a>
        <a href='#'>
          Perfil
        </a>
      </div>
      <button className={styles.btnEmergency}>911</button>
    </>
  )
}

function PsychologistDashboard() {
  return (
    <>
      <div className={styles.optionsAside}>
        <a href='#'>
          Citas
        </a>
        <a href='#'>
          Pacientes
        </a>
        <a href='#'>
          Analisis de video
        </a>
      </div>
    </>
  )
}
function Dasboard({rolMenu}) {


  
  const [state, setState] = useState(false);
  const [aside, setAside] = useState(styles.asideMenu);

  const asideOpenAction = () => {
    if (!state) {
      setState(true)
      setAside(styles.asideMenuOpen)
    } else {
      setState(false)
      setAside(styles.asideMenu)
    }
  }

  return (
    <div className={styles.contMain}>
      <div className={aside}>
        <div className={styles.headerAside}>
          <img src={logo} alt='logo' className={styles.logo} />
          <p>Eduardo Diaz Diaz de leon</p>
        </div>
        {rolMenu ===1?
          <PatientDashboard /> 
          :
          <PsychologistDashboard />
        }
        <a href='#'>
          Cerrar sesion
        </a>
      </div>

      <div className={styles.resMenu} >
        <div onClick={asideOpenAction}>
          <img src={btnMenu} className={styles.menuIcon} alt='Menuicon' />
        </div>

      </div>
    </div>
  )
}

export default Dasboard