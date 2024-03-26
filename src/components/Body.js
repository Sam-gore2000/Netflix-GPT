import React from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Login'


const Body = () => {
  return (
    <div>
        <Router>
            <Routes>
         
                <Route path='/login' element={<Login/>} />
            </Routes>
        </Router>
        {/* <Login/> */}
   
    </div>
  )
}

export default Body
