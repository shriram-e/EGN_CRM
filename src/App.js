import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import { useEffect, useState } from 'react';
import SpouseDetails from './Components/SpouseDetails';
import PrimaryDetails from './Components/PrimaryDetails';
import ChildDetails from './Components/ChildDetails';

function App() {

  const [martial_status, setMartial_Status] = useState('')

  console.log(martial_status)

  const HandleClick = (newData) => {
    setMartial_Status(newData)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    const Data = new FormData(e.target);
    const Jdata = Object.fromEntries(Data.entries())
    console.log(Jdata)

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json-patch+json' },
      body: JSON.stringify(Jdata)
    }

    const url = '' //Add API URL

    fetch(url, options)
      .then(response => {
        if (response.ok) {
          console.log("Success")
          return response.json()
        }
        else {
          throw Error('Error in updating data')
        }
      })
      .then(data => {
        console.log(JSON.stringify(data))
      })
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  return (
    <div class='page'>
      <div class='Div_Main'>
        <div class='Div_heading'>
          <p class='heading'>EGN Membership Application</p>
        </div>
        <div className='Primary_Main'>
          <form class='egnform' onSubmit={HandleSubmit}>
            <PrimaryDetails data={martial_status} onDataChange={HandleClick} />
            {
              (martial_status === 'Married') && (<SpouseDetails />)
            }
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
