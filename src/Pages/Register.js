import React, { useState } from 'react'
import Form from '../Components/Form'
import CreateUser from '../Utilities/RegisterUser'

export default function Register() {
  const [data, setData] = useState({
    Name: "",
    email: "",
    password: ""
  })

  const handleDataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault(e);
    await CreateUser(data);
    // console.log(data);
  }

  return (
    <React.Fragment>
      <Form action={handleRegister} input={handleDataChange} />
    </React.Fragment>
  )
}
