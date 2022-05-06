import React from 'react';
import { Link } from 'react-router-dom'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Navbar() {
  return (
    <header>
      <MDBNavbar sticky expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>

              <MDBNavbarItem active>
                <MDBNavbarLink >
                <Link to="/" > Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink >
                <Link to="/gallary" > Gallary</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink >
                <Link to="/about" > About</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink >
                <Link to="/contact" > Contact Us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
             
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

    </header>
  );
}