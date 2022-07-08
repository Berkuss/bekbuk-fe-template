import React from 'react';
import "./sidebar.scss"
import {Dashboard} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <div className={"sidebar"}>
            <div className={"top"}>
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className={"logo"}>Bekbuk</span>
                </Link>
            </div>
            <hr/>
            <div className={"center"}>
                <ul>
                    <p className={"title"}>Main</p>
                    <Link to="/">
                        <li>
                            <Dashboard className={"icon"}/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/users">
                        <li>
                            <PersonIcon className={"icon"}/>
                            <span>User</span>
                        </li>
                    </Link>
                    <p className={"title"}>List</p>
                    <li>
                        <LocalShippingIcon className={"icon"}/>
                        <span>Order</span>
                    </li>
                    <li>
                        <ShoppingBasketIcon className={"icon"}/>
                        <span>Product</span>
                    </li>

                    <p className={"title"}>Account</p>
                    <li>
                        <ManageAccountsIcon className={"icon"}/>
                        <span>Account</span>
                    </li>
                    <li>
                        <LogoutIcon className={"icon"}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className={"bottom"}>
                <div className={"colorOption"}>

                </div>
                <div className={"colorOption"}>

                </div>
                <div className={"colorOption"}>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;