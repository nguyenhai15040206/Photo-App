import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-9">
                        <a className="header-link header-title" href="https://youtube.com/easyfrontend" target="_blank" rel="noopener noreferrer">
                            Easy Frontend
                        </a>
                    </div>
                    <div className="col-3">
                        <NavLink 
                        activeClassName="header-link-active"
                        exact
                        to= "/photos"
                        className="header-link"
                        >
                            Sign in
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Header

