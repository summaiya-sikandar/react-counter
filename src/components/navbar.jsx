import React from 'react';

const Navbar = ({totalCounter}) => {
  return ( 
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
       <a class="navbar-brand" href="#">Navbar
          <span className="badge badge-pill badge-secondary">{totalCounter}</span>
       </a>
    </div>
  </nav>
   );
}
export default Navbar;
