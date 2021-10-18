import React, {useState } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import './index.js';



const App = () => {
    
    const [result, setResult] = useState(""); 

    const LogThis = () => {
        console.log(result);
      

    }
    const handleClick = (e) => { // USE NAME VALUE FOR CALCULATOR
       
            setResult(result.concat(e.target.name));
           
    }

    const ac = () => { // ALL CLEAR 
        setResult("");
      
    }
    const backspace = () => { // DELETE LAST INPUT
        setResult(result.slice(0, -1));
       

    }
    const log = () => { // LETS LOG THE INPUT

    }

   const equal = () => {
       try {
        setResult(eval(result).toString());
        LogThis();
       } catch (err) {
           setResult("ERROR!");
           LogThis();

           
       }

       
      
 
}

    return (

        <div className="calculator">
            
        <div className="topbar">
            
<div id="myModal" class="modal">

  
<div class="modal-content">
  <span class="close">&times;</span>
  <h6>Recent Calculations</h6>
  <p>Coming soon.</p>
</div>

</div>

        <li class="navbar navbar-light">
        <a class="nav-link dropdown" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Conversion Tool</a></li>
            <li><a class="dropdown-item" href="#" id="myBtn">Calculator Log</a></li>
          </ul>
        </li> 
        </div>



        <form>
        <input type="text" name="input" id="input" value={result} disabled />
        </form>
        
            <div className="inputKeys">
            <button onClick={backspace} id="delete" class="buttonKey-yellow">C</button>
            <button onClick={ac} id="ac" class="buttonKey-yellow">AC</button>
            <button onClick={handleClick} id="divide" name="/" class="buttonKey">&divide;</button>
            <button onClick={handleClick} name="*" class="buttonKey">&times;</button>
                <button onClick={handleClick} name="7" class="buttonKey-white">7</button>
                <button onClick={handleClick} name="8" class="buttonKey-white">8</button>
                <button onClick={handleClick} name="9" class="buttonKey-white">9</button>
                <button onClick={handleClick} name="-" class="buttonKey">&ndash;</button>
                <button onClick={handleClick} name="4" class="buttonKey-white">4</button>
                <button onClick={handleClick} name="5" class="buttonKey-white">5</button>
                <button onClick={handleClick} name="6" class="buttonKey-white">6</button>
                <button onClick={handleClick} name="+" class="buttonKey">+</button>
                
                <button onClick={handleClick} name="1" class="buttonKey-white">1</button>
                <button onClick={handleClick} name="2" class="buttonKey-white">2</button>
                <button onClick={handleClick} name="3" class="buttonKey-white">3</button>
                <div class="empty"></div>
                <button onClick={handleClick} id="zero" name="0" class="buttonKey-white">0</button>
                <button onClick={handleClick} id="dot" name="." class="buttonKey-white">.</button>
                <div class="empty"></div>
                <button onClick={equal} id="equal" class="buttonKey">=</button>
            </div>
          



            </div>


        
    )
}

export default App;