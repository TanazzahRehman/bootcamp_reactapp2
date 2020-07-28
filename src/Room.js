import React, {useState} from 'react';
import './Room.css';

//console.log("state=" ,state);

function Room() {
    let [islit, setlit] = useState(false);
    let [temp, settemp] = useState(22);

    function Lighton() {
        console.log("Button clicked to turn on");
        setlit(islit = true);
    }

    function Lightoff() {
        console.log("Button clicked to turn off");
        setlit(islit = false);
    }

    function temp_up() {
        console.log("increase temp ");
        settemp(++temp);
    }  

    function temp_down() {
        console.log("decrease temp ");
        settemp(--temp);
    }  
    
  return (
      
    <div className={"room "+ (islit ? "lit": "dark")} ><center>
        <h1> MY ROOM </h1>
      This room is<b> {islit ? "lit": "dark"}</b>
       <br /> 
       <button onClick = {Lighton} > ON </button>
       <button onClick = {Lightoff} > OFF </button>
       <br />
       <br />
       <br />
       <br />
       Temperature of the room is : {temp} 
       <br/>
       <button onClick = {temp_up} > +  </button>
       <button onClick = {temp_down} > -  </button>
       </center>
    </div>
  );
}

export default Room;