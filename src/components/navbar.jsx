/* eslint-disable jsx-a11y/anchor-is-valid */
    // eslint-disable-next-line 
import React from 'react';

const Navbar = ({totalCounter}) => {
  return ( 
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
       <a class="navbar-brand" href='#' >Navbar Menu
          <span className="badge badge-pill badge-secondary">{totalCounter}</span>
       </a>
    </div>
  </nav>
   );
}
export default Navbar;
