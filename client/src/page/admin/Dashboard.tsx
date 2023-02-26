import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { FaUserAlt } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const [isOpen,setIsOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        navigate('/admin/login')
    }
    // console.log(isOpen)
    return (
        <Section isOpen={isOpen}>
            <nav>
                <span className="menu">
                    <AiOutlineMenu className="icon" onClick={()=>{setIsOpen(!isOpen)}} />
                </span>
                <ul className="nav-list">
                    <Link to='/' className="nav-item"><li>Home</li></Link>
                    <div className="nav-item dropdown">
                        <span className="nav-item brop-btn"><FaUserAlt /> AzKaaR <BsChevronDown /></span>
                        <div className="dropdown-content">
                            <li><MdOutlineAccountCircle /> Account</li>
                            <li onClick={handleLogout}><AiOutlineLogout /> Logout</li>
                        </div>
                    </div>
                </ul>
            </nav>
            <main>
                <aside>

                    <div className="aside-item">
                        <ul>
                            <Link to="manage"> <li> Manage Posts </li></Link>
                            <Link to="upload"> <li> Add Post </li></Link>
                            <Link to="customize"> <li> Customization</li></Link>
                          
                            <li>Setting</li>
                        </ul>
                    </div>
                </aside>
                <div className="dashboard_data">
                    <Outlet />
                    

                </div>
            </main>
        </Section>
    )
}

const Section = styled.section<{isOpen:boolean}>`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    nav{
        background-color: #222222;
        height: 7rem;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 5rem;

        .icon{
            cursor: pointer;
            color: white;
            font-size: 3rem;
            visibility: hidden;
        }

        .nav-list{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;

            .nav-item{
                font-size: 2rem;

            }
        }
    }
    li{
        color: white;
    }

    .dropdown{
        /* border: 1px solid silver; */
        padding: .5rem 1rem;
        position: relative;
        &:hover{
            .dropdown-content{
                visibility: visible;
            }
        }
        
        
        .dropdown-content{
            /* border-radius: 2rem; */
            visibility: hidden;
            position: absolute;
            box-shadow: 1px 1px 2px silver;
            background-color: white;
            display: flex;
            flex-direction: column;
            /* gap: 2rem; */
            
            li{
                cursor: pointer;
                color: black;
                
                padding: 1rem 1rem;
                &:hover{
                    background-color: #f7f4f4;
                    
                }
                /* border-bottom: 1px solid gray; */
            }

            
        }

        
    }




    main{
        display: grid;
        grid-template-columns: 250px auto;
        height: 92vh;

        
    }
    aside{
        /* border: 1px solid red; */
        background-color: #12394e;
        height: 100%;

        .aside-item{
            color: white;
            /* overflow-y: scroll; */
            height:100%
 
            ul{
                display: flex;
                flex-direction: column;

            }

            li{
                color: white;
                font-size: 2rem;
                cursor: pointer;
                padding: 2rem;
                border-bottom: 1px solid gray;
            }
        }
    }

    .dashboard_data{
        overflow-y: scroll;
        height:100%;
        max-width: 100%;
        /* border: 1px solid red; */
        padding: 5rem;
    }


//meida query
@media (max-width:820px) {
    main{
        grid-template-columns: 1fr;
    }
    aside{
        position: fixed;
        display: ${(props: { isOpen: boolean}) => {
        return !props.isOpen? 'none' : 'block'
    }};

        /* display: none; */
        z-index: 11;
        width: 50%;
    }
    .icon{
            color: white !important;
            font-size: 3rem;
            visibility: visible !important;
        }
    
}

@media (max-width:500px) {

    .dashboard_data{

        padding: 2rem;
    }
    
}
`

export default Dashboard