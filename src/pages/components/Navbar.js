import Link from 'next/link';
import Image from 'next/image'
import React, {useState} from 'react'
import { useRouter } from "next/router";
 
const Navbar = () => {
   const router = useRouter();
  return (
  
      <header>
         <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
               <Link className="navbar-brand" href="/"><img src={"https://smca.ezrankings.in/react-backend/uploads/logo.png" } className="header-logo" alt=""/></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link href="/" className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                      <Link href="/about" className={router.pathname == "/about" ? "nav-link active" : "nav-link"}>
                      About
                     </Link>
                     </li>
                     <li className="nav-item">
                     <Link href="/portfolio" className={router.pathname == "/portfolio" ? "nav-link active" : "nav-link"}>
                     Portfolio
                     </Link>
                     </li>
                     <li className="nav-item">
                     <Link href="/pricing" className={router.pathname == "/pricing" ? "nav-link active" : "nav-link"}>
                     Pricing
                     </Link>
                     </li>
                     {/* <li className="nav-item"> 
                     <Link href="/contact" className="nav-link">
                     Blogs
                     </Link>
                     </li> */}
                     <li className="nav-item"> 
                     <Link href="/contact" className={router.pathname == "/contact" ? "nav-link talk-let active" : "nav-link talk-let"}>
                     Lets Talk
                     </Link>
                     </li>                     
                  </ul>
               </div>
            </div>
         </nav>
      </header>
  )
}

export default Navbar