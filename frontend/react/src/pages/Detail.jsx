import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../services/Api'

function Detail() {

  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    getEmp()
  }, [])
  
  const getEmp = async () => {
    const res = await getEmployee(id)
    setUser(res.data)
  }
  
  if (!user) return <h6>Loading...</h6>
  
  return (
    <>
      <h2>Employee Detail</h2>
      <p><b>ID: </b>{user.id}</p>
      <p><b>Name: </b>{user.name}</p>
      <p><b>Role :</b>{user.roll}</p>
      <p><b>Email</b>{user.email}</p>
      <p><b>Phone Number</b>{user.phone}</p>
      <p><b>Age: </b>{user.age}</p>
      <p><b>Gender: </b>{user.gender}</p>
    </>
  )
}

export default Detail