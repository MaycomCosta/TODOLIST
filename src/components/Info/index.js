import React from 'react'
import { useHistory } from 'react-router-dom'


import * as C from './styles.js'
 const  Info = () =>{
  const history = useHistory()


  function handleBackPageClick() {
    setTimeout(() => {
      history.push('/')
    }, 1000)  
  }

  return (
    <C.SectionCenter>
        <h1>Hi, all good?</h1>
        <p>A project aimed at helping people get organized in their day-to-day tasks</p>
        <p>You can know another project, a <a href='https://controleseudindin.netlify.app/' target='_blank' rel='noreferrer'>Finance control</a>!</p>
        <p>You can also follow me on 
          <a href='https://www.linkedin.com/in/maycomcosta/' target='_blank' rel='noreferrer'>Linkedin</a>, 
          <a href='https://github.com/MaycomCosta' target='_blank' rel='noreferrer'>Github</a> and 
          <a href='https://twitter.com/DamnDolar' target='_blank' rel='noreferrer'>Twitter</a></p>
        <div><button onClick={handleBackPageClick}>Back</button></div>
    </C.SectionCenter>
  )
}

export default Info