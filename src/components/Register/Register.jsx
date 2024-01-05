import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { verifyToken } from '../../Helpers/verifyToken'

const Register = () => {
  
  /* const initialValues =  */
  const navigate = useNavigate()
  verifyToken(navigate)
  const [formValues, setFormValues] = useState({username: '', password: ''})
  const [repeatUsername, setRepeatUsername] = useState(false)
  const handleChangeInput = (value, name) =>{
  
    setFormValues(() =>{
      return {...formValues, [name]: value}
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log('hola')
   /*  const response = await axios.post('http://localhost:8080/register', {username: formValues.username, password: formValues.password}) */
    const response = await fetch('http://localhost:8080/register', {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: formValues.username, password: formValues.password}),
    }).then(res =>{
      console.log(res)
      return res.json()
    } )
    console.log('hola', response.status  )
    if(response.status == 201){
      navigate('/')
    }
    else if(response.status == 400){
      setRepeatUsername(true)
    }

  }
  
  return (
    <div>
        <h1>Formulario de registro</h1>
        <form onSubmit={(e) =>handleSubmit(e)}>
          <input placeholder='usuario' value={formValues.username}  onChange={(e) => handleChangeInput(e.target.value, 'username')} />
          {/* { formValues.username.length < 3 && <span>No puedes usar menos de 3 caracteres </span> } */}
          <input placeholder='contraseña' value={formValues.password} onChange={(e) => handleChangeInput(e.target.value, 'password')}/>
          <input type='submit'/>
        </form>
        {repeatUsername && <span>El nombre de usuario ya se encuentra en uso.</span>}
        <span>Ya tienes cuenta? <Link to={'/'}>Click aqui</Link></span>
    </div>
  )
}

export default Register