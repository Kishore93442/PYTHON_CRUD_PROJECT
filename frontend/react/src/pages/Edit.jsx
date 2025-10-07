import React, { useEffect, useState } from 'react'
import { getEmployee, updateEmployee } from '../services/Api';
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: " ",
    age: " ",
    email: " ",
    phone: " ",
    roll: " ",
    gender: " "
  })

  useEffect(() => {
    getEmp()
  }, [])

  const getEmp = async () => {
    const response = await getEmployee(id);
    setUser(response.data)
  }

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateEmployee(id, user)
    navigate("/")
  }

  return (
    <>
      <h2 className="mb-3">Edit Employee</h2>
      <form onSubmit={handleSubmit}>
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
            type="tel"
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

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  )
}

export default Edit