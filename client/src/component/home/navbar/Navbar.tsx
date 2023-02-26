
import { NavLink } from 'react-router-dom'
import { TbBrightnessDown, TbMenu2 } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import { useGlobalContext } from '../../../context'
const Navbar = () => {
    const { isDark, setIsDark, isNavOpen, setIsNavOpen } = useGlobalContext();
    // console.log(isNavOpen);

    const darkmodeHandler = () => {
        setIsDark(!isDark);
    }
    return (
        <Header className="header" isDark={isDark} isNavOpen={isNavOpen}>
            
            <NavLink to="/" onClick={()=>{  window.scrollTo(0, 0);}}>
            <img src="/images/logo2.png" alt="MOHD AZKAR" className="logo" />
            </NavLink>
            <nav className="navbar">
                <ul className="navbar-lists">
                    <li>
                        <NavLink className="navbar-link service-link" to="/" onClick={()=>{setIsNavOpen(false);   window.scrollTo(0, 0);}} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link about-link" to="/blog" onClick={()=>setIsNavOpen(false)} >Blog</NavLink>
                    </li>
                    <li>
                        <a className="navbar-link portfolio-link" href="#protects" onClick={()=>setIsNavOpen(false)}>Project</a>
                    </li>
                    <li>
                        <a className="navbar-link" href="#contact" onClick={()=>setIsNavOpen(false)}>Contact</a>
                    </li>
                    <li>
                        <TbBrightnessDown className='icon' onClick={darkmodeHandler} />
                    </li>


                </ul>
            </nav>
            <div className="mobile-nav-btn">
                {
                    !isNavOpen && <TbBrightnessDown className='icon' onClick={darkmodeHandler} />
                }
                <TbMenu2 className="menu mobile-nav-icon" onClick={() => { setIsNavOpen(true) }}></TbMenu2>
                <AiOutlineClose className="close mobile-nav-icon" onClick={() => { setIsNavOpen(false) }} />

            </div>

        </Header>
    )
}


const Header = styled.header<{ isDark: boolean, isNavOpen: boolean }>`
    

/*==============================================
              HEADER SECTION 
================================================ */
    padding: 0 8rem;
    height: 8rem;
    border-bottom: 1px solid silver;
    background-color: ${(props: { isDark: boolean, isNavOpen: boolean }) => {
        return !props.isDark ? 'var(--bg)' : 'var(--darkBgSecoundry)'
    }};

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

.logo {
  height: 3.3rem;
  color: #b3b3b3;
}

.navbar-lists {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

}

.navbar-link:link,
.navbar-link:visited {
  display: inline-block;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props: { isDark: boolean }) => {
        return !props.isDark ? 'var(--black)' : 'var(--darkBgPara)'
    }};
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear 0s;

}

.navbar-link:hover,
.navbar-link:active {
  color: var(--helper);
}


.mobile-nav-btn {
    display: none;

  }
.icon{
    color: var(--black);
    color:var(--darkBgPara);
    font-size: 3.5rem;
    cursor: pointer;

}
.menu,.close{
    font-size: 4rem;
    color: var(--para);
}



//Media query for menu

@media (max-width: 980px) {
    padding: 0 4rem;


 position: fixed;
 top: 0;


  .mobile-nav-btn {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .menu{
    display: ${(props: { isNavOpen?: boolean, isDark: boolean }) => {
        return props.isNavOpen ? "none" : "inline-lock";
    }};

  }
  .close{
    display: ${(props: { isNavOpen?: boolean, isDark: boolean }) => {
        return !props.isNavOpen ? "none" : "inline-block";
    }};

  }

  .navbar {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    /* background: var(--gradient); */

    background:${(props: { isNavOpen?: boolean, isDark: boolean }) => {
        return props.isDark ? "var(--darkBgHover)" : "var(--gradient)";
    }};

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    z-index: 99;
    transition: all 0.5s linear;

    ${(props: { isDark?: boolean, isNavOpen: boolean }) => {
        return !props.isNavOpen ? `transform: translateX(100%);
    visibility: none;
    opacity: 0;
    pointer-events: none;` : "";
    }};
    

  }

  .navbar-lists {
    flex-direction: column;
    align-items: center;

  }
}

`
export default Navbar