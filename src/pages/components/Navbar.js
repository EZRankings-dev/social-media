import Link from 'next/link';
import Image from 'next/image'
import React, {useState} from 'react'

 
const Navbar = () => {
   const [classs, setActiveClass] = useState({
      home:"nav-link active",
      about:"nav-link",
      price:"nav-link",
      portfolio:"nav-link",
      contact:"nav-link talk-let"
    });
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
                     <li className="nav-item" onClick={() => setActiveClass({
                       home:"nav-link active",
                       about:"nav-link",
                       price:"nav-link",
                       portfolio:"nav-link",
                       contact:"nav-link talk-let"

                     })}>
                        <Link href="/" className={classs.home} aria-current="page">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item" onClick={() => setActiveClass({
                       home:"nav-link",
                       about:"nav-link active",
                       price:"nav-link",
                       portfolio:"nav-link",
                       contact:"nav-link talk-let"

                     })}>
                      <Link href="/about" className={classs.about}>
                      About
                     </Link>
                     </li>
                     <li className="nav-item" onClick={() => setActiveClass({
                       home:"nav-link",
                       about:"nav-link ",
                       price:"nav-link",
                       portfolio:"nav-link active",
                       contact:"nav-link talk-let"

                     })}>
                     <Link href="/portfolio" className={classs.portfolio}>
                     Portfolio
                     </Link>
                     </li>
                     <li className="nav-item" onClick={() => setActiveClass({
                       home:"nav-link",
                       about:"nav-link",
                       price:"nav-link active",
                       portfolio:"nav-link ",
                       contact:"nav-link talk-let"

                     })}>
                     <Link href="/pricing" className={classs.price}>
                     Pricing
                     </Link>
                     </li>
                     {/* <li className="nav-item"> 
                     <Link href="/contact" className="nav-link">
                     Blogs
                     </Link>
                     </li> */}
                     <li className="nav-item" onClick={() => setActiveClass({
                       home:"nav-link",
                       about:"nav-link",
                       price:"nav-link",
                       portfolio:"nav-link",
                       contact:"nav-link talk-let active"

                     })}> 
                     <Link href="/contact" className={classs.contact}>
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