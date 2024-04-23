import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const token = localStorage.getItem('token')

const LogOut =()=>{
  console.log("logout");
  localStorage.removeItem('token')
}
  return (
    <header className={`flex w-full items-center justify-center dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <NavLink to="/Home" className="block w-full py-5">
              <img
                src="https://www.incometax.gov.in/iec/foportal/themes/custom/itdbase/logo.svg"
                alt="logo"
                className="dark:hidden"
                width={600}
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </NavLink>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 bg-black py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute  right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
               {/* {token ?  <ul className="block lg:flex md:ms-[250px]">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Data</ListItem>
                  
                </ul> : null} */}
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0 gap-1">
              
              
              {token ?   <button onClick={()=>LogOut()} className="px-7  py-3 text-base bg-blue-500 rounded-md font-medium  hover:text-primary text-white" > Log Out</button> :<button><NavLink to={'/Login'}
                
                className="px-7  py-3 text-base bg-blue-500 rounded-md font-medium  hover:text-primary text-white"
              >
               Log In
              </NavLink></button>}

              {token ? null : <button><NavLink to={'/'} className="rounded-md bg-primary px-7 py-3 text-base font-medium bg-blue-500 text-white hover:bg-primary/90"
              >
                Sign Up
              </NavLink></button>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
