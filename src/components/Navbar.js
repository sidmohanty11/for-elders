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
          <h1>Iwnly.</h1>
          <div>
            <button onClick={() => history.push('/more')} className="the_button">
              ChangeMeds
            </button>
            <button onClick={signOut} className="the_button">
              Logout
            </button>
          </div>
        </header>
      </>
    );
}

export default Navbar;
