import React from 'react'
import "./nav.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../images/logo.png";
import {NavLink} from "react-router-dom"

const Navbaar = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className='left' >
                        <div className='navlogo' >
                       <img className="logo" src={logo} alt="" /> 
                        </div>

                        <div className='nav_searchbaar' >
                            <input type="text" name="" id="" placeholder='Search here' />
                            <div className='search_icon' >
                                <SearchIcon id="search" />
                            </div>
                        </div>
                    </div>
                    <div className='right' >
                        <div className='nav_btn' >
                        <NavLink to="/login" > <p>Sign In</p> </NavLink>    
                        </div>
                        <div className='cart_btn' >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p> Cart </p>
                        </div>
                        <Avatar className='avtar' /> 
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbaar
