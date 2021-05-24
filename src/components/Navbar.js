import React from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = ({ logout }) => {
  const history = useHistory();
  function signOut() {
    logout();
    history.push('/');
  }
    return (
      <>
        <header className="header_dashboard">
                <h1>I will never leave you.</h1>
                <button onClick={signOut} className="the_button">Logout</button>
        </header>
      </>
    );
}

export default Navbar;
