import React from 'react'
import { Link } from 'react-router-dom'

export const Table = ({users, handleDelete}) => {
    return (
        <div className='container table-users p-3 bg-light'>
            <h3>Usuarios</h3>
            <table className="table bg-light">
                <thead>
                    <tr>
                        <th className='text-center' scope="col">Name</th>
                        <th className='text-center' scope="col">User</th>
                        <th className='text-center' scope="col">Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.name}>
                                <td className='text-center'>{user.name}</td>
                                <td className='text-center'>{user.user}</td>
                                <td className='text-center'>{user.pass}</td>
                                <td className='text-center'><Link to={'/edit/'+user.id}><i className="btn bi bi-pencil-fill text-primary "></i></Link><i onClick={() => handleDelete(user.id)} className="btn bi bi-trash3-fill text-danger"></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to={'/create'} className='btn btn-primary align-content-center'>Create <i className="bi bi-person-add text-light"></i></Link>
        </div>
    )
}
