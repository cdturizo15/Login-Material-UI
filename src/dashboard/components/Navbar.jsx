import React from 'react'

export const Navbar = ({authState, handleLogout}) => {
    return (
        <>
            <nav className="navbar justify-content-between navbar-expand-lg navbar-dark navbar-color p-3">
                <h1 className="navbar-brand"  >Dashboard</h1>
                <span className='text-light'>Bienvenido, {authState.name ? authState.name : ''} <button onClick={() => handleLogout()} className="btn btn-dark ms-3"><i className="bi bi-box-arrow-right icon-size"></i></button></span>
            </nav>
        </>
    )
}
