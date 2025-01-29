// import React, { useState } from 'react'

// const Header = () => {
//   const [toggleheader,setToggleheader] = useState(false)

//   const handleToggle = () => {
//       setToggleheader(!toggleheader);
//   }
//   console.log(toggleheader);
  
//   return (
//     <div className='container-fluid'>
//     <header class="mt-3 header d-flex justify-content-between align-items-center">
//     <div class="d-flex align-items-center">
//         <img src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png" alt="Logo" class="me-2" width="50%"/>
//     </div>
//     <div className=''>
//         <button className="btn btn-outline-dark me-2">Sign in</button>
//         <button className="btn btn-success m-2">Sign up free</button>
//         <i className="bi bi-list m-2" onClick={handleToggle}></i>
//     </div>
// <div className='d-flex justify-content-between align-items-center'>
//   <h2></h2>

// </div>
    
// </header>
// </div>
//   )
// }

// export default Header;
// import React, { useState, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   const [toggleheader, setToggleheader] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 960);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleToggle = () => {
//     setToggleheader(!toggleheader);
//   };

//   return (
//     <div className="container-fluid">
//       <header className="mt-3 header d-flex justify-content-between align-items-center">
//         <div className="d-flex align-items-center">
//           <img
//             src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png"
//             alt="Logo"
//             className="me-2"
//             width="50%"
//           />
//         </div>
//         <div>
//           <button className="btn btn-outline-dark me-2">Sign in</button>
//           <button className="btn btn-success m-2">Sign up free</button>
//           <i className="bi bi-list m-2" onClick={handleToggle}></i>
//         </div>
//       </header>

//       {/* Render Navbar if screen is large and toggle is enabled */}
//       {!isMobile && toggleheader && (
//         <nav className="navbar navbar-expand-lg bg-light p-3">
//           <div className="container-fluid">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Features</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Pricing</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       )}

//       {/* Render Sidebar if screen is small and toggle is enabled */}
//       {isMobile && toggleheader && (
//         <div className="sidebar bg-dark text-white p-3 position-fixed top-0 start-0 vh-100 w-75">
//           <button className="btn btn-danger mb-3" onClick={handleToggle}>Close</button>
//           <ul className="list-unstyled">
//             <li className="mb-2">
//               <a href="#" className="text-white text-decoration-none">Home</a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-white text-decoration-none">Features</a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-white text-decoration-none">Pricing</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [toggleheader, setToggleheader] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setToggleheader(!toggleheader);
  };

  return (
    <div className="container-fluid">
      <header className="mt-3 header d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/home">
          <img 
            src="https://i.ibb.co/5Tq0pq6/Black-logo-no-background.png" 
            alt="Logo" 
            className="me-2 " 
            width="50%"
          />
          </Link>
        </div>
    

        <div className='d-flex justify-content-center align-items-center' >
          { toggleheader && !isMobile &&   <div className='d-flex align-items-center justify-content-between gap-2 mx-4 ' style={{paddingTop: "10px"}}>
           <Link to="/features"><p style={{backgroundColor: "#FAF8F1" , padding: "4px 14px" ,borderRadius: "5px",fontWeight: "500"}}>Features</p> </Link>
           <Link to="/pricing" ><p style={{backgroundColor: "#FAF8F1" , padding: "4px 14px" ,borderRadius: "5px",fontWeight: "500"}}>Pricing</p> </Link>
           <Link to="/integration" > <p style={{backgroundColor: "#FAF8F1" , padding: "4px 14px" ,borderRadius: "5px",fontWeight: "500"}}>Integrations</p></Link>
           <Link to="/contact"> <p style={{backgroundColor: "#FAF8F1" , padding: "4px 14px" ,borderRadius: "5px",fontWeight: "500"}}>Contact</p></Link>

          </div>}
        <div className='d-flex sign_in'>
         
          <button className="btn btn-outline-dark ">Sign in</button>
          <button className="btn btn-success ms-3">Sign up free</button>
        </div>
          <i className="bi bi-list m-2" onClick={handleToggle} style={{cursor: "pointer"}}></i>
         
        </div>
      </header>

      {toggleheader && isMobile && 
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to='/features' >
                    Features
                  </Link>
                </li>
                <Link to='/pricing' >
                <li className="nav-item">
                    Pricing
                </li>
                </Link>
                <li className="nav-item">
                  <Link to="/integration">
                    Integrations
                  </Link>
                </li>
                <li className="nav-item">
                 <Link to="/contact">
                    Contacts
                    </Link>
                </li>
               
              </ul>          }
      {/* Render Navbar inline or as a sidebar */}
      {/* {toggleheader && (
        <div className={isMobile ? 
          <div className="collapse navbar-collapse" id="navbarNav">
        
        </div>
        : ""}>
          <Navbar />
        </div>
      )} */}
    </div>
  );
};

export default Header;

