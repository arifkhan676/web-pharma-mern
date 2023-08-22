import React, { useState } from 'react'
import "./nav.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom"
import { PopupMenu } from "react-simple-widgets";



const Navbaar = (props) => {

    return (
        <div>
            <header>
                <nav>
                    <div className='left' >
                        <div className='navlogo' >
                            <NavLink to="http://localhost:3000/">   <img className="logo" src={logo} alt="" /> </NavLink>
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
                            <Badge badgeContent={props.cartmenu} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p> Cart </p>
                        </div>

                        <PopupMenu>

                            <Avatar className='avtar' />

                            <div className="card">
                                <div className="card-body px-4 py-4">
                                    <button className="button" > Profile </button>
                                    <button className="button">
                                        Logout
                                    </button>

                                </div>
                            </div>

                        </PopupMenu>



                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbaar 
