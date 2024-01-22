import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import { useEffect, useState } from 'react';
import SpouseDetails from './Components/SpouseDetails';
import PrimaryDetails from './Components/PrimaryDetails';
import ChildDetails from './Components/ChildDetails';

function App() {

  const [martial_status, setMartial_Status] = useState(false)

  return (
    <div class='page'>
      <div class='Div_Main'>
        <div class='Div_heading'>
          <p class='heading'>EGN Membership Application</p>
        </div>
        <div className='Primary_Main'>

          <form class='egnform'>
            <PrimaryDetails />
            <SpouseDetails />
            <ChildDetails />
            <div class='btnsubmit'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
