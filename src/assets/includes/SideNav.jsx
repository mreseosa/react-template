import { NavLink, useLocation } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import { GoHome, GoHomeFill } from "react-icons/go";
import { BiSolidTrophy, BiTrophy } from "react-icons/bi";
import { BiReceipt, BiSolidReceipt } from "react-icons/bi";
import { MdOutlinePersonAddAlt1, MdPersonAddAlt1 } from "react-icons/md";
import { HiOutlineUser, HiUser } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";

const SideNav = () => {
   
   // eslint-disable-next-line react/prop-types
   const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 1120, maxWidth: 100000})
      return isDesktop ? children : null
   }
   
   const location = useLocation();
   const currentPath = location.pathname;

   const isCurrentUrl = (path) => currentPath === path;

   const iconStyle = 'text-[1.2rem]'
   const linkStyle = 'flex items-center gap-[.65em] py-4 px-6 rounded-[3em]'

   return (
      <>
         <Desktop>

            <div 
               className="w-[30%] max-w-[280px] px-3 overflow-y-auto h-screen bg-white"
            >
               <div className="pt-5 pb-4 border-b-[.16em] border-[#99999948]">
                  <NavLink
                     to="/"
                     className="flex items-start gap-[.5em]"
                  >
                     {/* <img 
                        src="https://src.africapg.com/images/sponsors/annacle.png" 
                        alt="" 
                        className="w-[1.95em]"
                     /> */}
                     <span className="text-[1.36rem] pt-1 font-bold font-Nunito">CourierX</span>
                  </NavLink>
               </div>

               <div className="text-gray-400 font-RobotoCondensed py-3 pt-5 text-[.82rem] uppercase">Overview</div>

               <ul className="sideNAv flex flex-col gap-1 mt-2 pb-3 border-b-[.16em] border-[#99999948]">
                  <li>
                     <NavLink
                        to="/"
                        className={linkStyle}
                     >
                        {isCurrentUrl('/') ? (
                           <GoHomeFill 
                              className={iconStyle}
                           />
                        ) : (
                           <GoHome 
                              className={iconStyle}
                           />
                        )}

                        <span
                           className="text-[.9rem] font-Lato"
                        >Home</span>

                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/contestants"
                        className={linkStyle}
                     >
                        {isCurrentUrl('/contestants') || isCurrentUrl('/contestants/profile') ? (
                           <BiSolidTrophy 
                              className={iconStyle}
                           />
                        ) : (
                           <BiTrophy 
                              className={iconStyle}
                           />
                        )}

                        <span
                           className="text-[.9rem] font-Lato"
                        >Contestants</span>

                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/history"
                        className={linkStyle}
                     >
                        {isCurrentUrl('/history') || isCurrentUrl('/history/votes') ? (
                           <BiSolidReceipt 
                              className={iconStyle}
                           />
                        ) : (
                           <BiReceipt 
                              className={iconStyle}
                           />
                        )}

                        <span
                           className="text-[.88rem] font-Lato"
                        >Vote History</span>

                     </NavLink>
                  </li>
               </ul>

               <div className="text-gray-400 font-RobotoCondensed py-3 pt-5 text-[.82rem] uppercase">Account Actions</div>

               <ul className="sideNAv flex flex-col gap-1 mt-2 pb-3 border-b-[.16em] border-[#99999948]">
                  <li>
                     <NavLink
                        to="/register"
                        className={linkStyle}
                     >
                        {isCurrentUrl('/register') ? (
                           <MdPersonAddAlt1
                              className={iconStyle}
                           />
                        ) : (
                           <MdOutlinePersonAddAlt1
                              className={iconStyle}
                           />
                        )}

                        <span
                           className="text-[.9rem] font-Lato"
                        >Register Contestants</span>

                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/account"
                        className={linkStyle}
                     >
                        {isCurrentUrl('/account') || isCurrentUrl('/account/profile') || isCurrentUrl('/account/password') || isCurrentUrl('/account/withdraw') || isCurrentUrl('/account/bank') || isCurrentUrl('/account/twofa') || isCurrentUrl('/account/votes') ? (
                           <HiUser 
                              className={iconStyle}
                           />
                        ) : (
                           <HiOutlineUser 
                              className={iconStyle}
                           />
                        )}

                        <span
                           className="text-[.9rem] font-Lato"
                        >
                           Account
                        </span>

                     </NavLink>
                  </li>
               </ul>

               <div className="text-gray-400 font-RobotoCondensed py-3 pt-5 text-[.82rem] uppercase">Log Out</div>

               <ul className="sideNAv flex flex-col gap-1 mt-2">
                  
                  <li className="">
                     <button
                        className={`${linkStyle} w-full`}
                     >
                        <MdLogout />

                        <span
                           className="text-[.88rem] font-Lato"
                        >Log Out</span>
                     </button>
                  </li>
               </ul>
               
            </div>

         </Desktop>
      </>

   )
}

export default SideNav
