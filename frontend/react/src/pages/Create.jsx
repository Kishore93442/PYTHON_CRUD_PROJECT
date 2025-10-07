import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../services/Api'

function Create() {

  const [user, setUser] = useState({
    name: " ",
    age: " ",
    email: " ",
    phone: " ",
    roll: " ",
    gender: " "
  })

  const navigate = useNavigate()

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createEmployee(user)
    navigate('/')
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Add Employee</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

        <div className="mb-3">
          <label className="form-label">Enter your name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={user.age}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Phone Number</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={user.phone}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Role</label>
          <input
            type="text"
            className="form-control"
            name="roll"
            value={user.roll}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={user.gender}
            onChange={handlechange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>
      </form>
    </div>
  )
}

export default Create