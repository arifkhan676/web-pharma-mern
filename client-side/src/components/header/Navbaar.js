import React, { useContext } from 'react'
import "./nav.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom"
import { PopupMenu } from "react-simple-widgets";
import { LoginContext } from '../contextAPI/ContextProvider';


const Navbaar = () => {

    const { account, setAcoount } = useContext(LoginContext)
    // console.log(account);

    return (
        <div>
            <header>
                <nav>
                    <div className='left' >
                        <div className='navlogo' >
                            <NavLink to="/">   <img className="logo" src={logo} alt="" /> </NavLink>
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
                            {
                                account ? <NavLink to='/buynow' >
                                    <Badge badgeContent={account.carts.length} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink> :
                                    <NavLink to='/login' >
                                        <Badge badgeContent={account.carts.length} color="primary">
                                            <ShoppingCartIcon id="icon" />
                                        </Badge>
                                    </NavLink>
                            }
                            <p> Cart </p>
                        </div>

                        <PopupMenu>
                            {
                                account ? <Avatar className='avtar2'> {account.fname[0].toUpperCase()} </Avatar> :
                                    <Avatar className='avtar'>  </Avatar>
                            }

                            <div className="card">
                                <div className="card-body px-4 py-4">
                                    <button className="button" > Profile </button>
                                    {
                                        account ?
                                            <NavLink to='/'>
                                                <button className="button" >
                                                    Logout
                                                </button>
                                            </NavLink>
                                            :
                                            <NavLink to='/login'>
                                                <button className="button" >
                                                    Login
                                                </button>
                                            </NavLink>
                                    }


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
