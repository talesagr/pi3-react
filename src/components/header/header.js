import React, { useState } from 'react';
import './header.css';
import headerIcon from '../../assets/images/quill.png';
import Sidebar from '../sidebar/sidebar';
import { Link, useNavigate, withRouter } from 'react-router-dom';

const Header = ( ) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const navigate = useNavigate();
    return (
        
            <header className='header'>
                <Link className="headerIcon">
                    <button onClick={() => navigate(-1)}>
                        <img src={headerIcon} alt="Ícone do Header" />
                    </button>
                </Link>

                <Link to="/login" className="bannerEscrita">Biblioteca Hogwarts</Link>

                <div className="sideBar">
                    <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar}/>
                </div>
            </header>
        
    );
};

export default Header;