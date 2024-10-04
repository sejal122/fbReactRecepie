import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import Button from "react-bootstrap/Button";
import Registeruser from "./components/registeruser";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft, faTrash} from '@fortawesome/free-solid-svg-icons'
import Viewall from "./components/viewall";
import {Routes,Route} from 'react-router-dom'
import Addnew from "./components/addnew";
import Recepiedetails from "./components/recepiedetails";
import Hookspractice from "./components/hookspractice";
import Updaterecepie from "./components/updaterecepie";
import Reduxexample from "./components/reduxexample";

function App() {
  return (
    <div className="App">
       <Navigation />
       {/* <Hookspractice/> */}
      <Routes>
        <Route path="/" Component={Viewall}></Route>
        <Route path="/addnew" Component={Addnew}/>
        <Route path="/recepiedetail/:id" Component={Recepiedetails}></Route>
        <Route path="/updaterecepie/:id" Component={Updaterecepie}></Route>
      </Routes>
      {/* <FontAwesomeIcon icon={faArrowCircleLeft} />
      <FontAwesomeIcon icon={faTrash}/> */}
     <br/><br/>
      {/* <Registeruser/> */}
      {/* <Viewall/> */}
      

    </div>
  );
}

export default App;
