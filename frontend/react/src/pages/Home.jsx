import React, { useEffect, useState } from 'react'
import { getEmployees, deleteEmployee } from '../services/Api'
import { Link } from 'react-router-dom'

function Home() {
  const [emp, setEmp] = useState([])

  useEffect(() => {
    loadEmployees()
  }, [])

  const loadEmployees = async () => {
    const response = await getEmployees()
    setEmp(response.data)
  }

  const handleDelete = async (id) => {
    await deleteEmployee(id)
    loadEmployees()
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Employee List</h2>
      <table className="table table-bordered table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ROLL</th>
            <th>GENDER</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.roll}</td>
              <td>{user.gender}</td>
              <td>
                <Link to={`/detail/${user.id}/`} className="btn btn-sm btn-info me-2">
                  View
                </Link>
                <Link to={`/edit/${user.id}/`} className="btn btn-sm btn-warning me-2">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
