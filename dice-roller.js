//dice-roller
//Build a dice roller app that simulates the results of rolling a specified number of 6-sided dice.
// Requirements
// The user can specify the number of dice to roll using the input field and the value can be an integer between 1 to 12 inclusive.
// Upon clicking the "Roll" button, the dice roll is simulated and the results are displayed.
// The results of the dice roll should be displayed in rows of three.

//https://www.greatfrontend.com/questions/user-interface/dice-roller/react?format=user-interface
import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Hello World!');
  const [val,setVal] = useState(0);
  const [diceArray,setDiceArray] = useState([]);
  const diceCreater =()=>{
    const randomArray = Array.from({length : val},()=>
      Math.floor(Math.random() * 6) + 1
    )

    setDiceArray(randomArray);
    console.log("randomArray",randomArray);
  }
  const inputHandler=(e)=>{
        const value = e.target.value;

    // allow empty input while typing
    if (value === "") {
      setVal("");
      return;
    }

    const num = Number(value);

    if (!Number.isNaN(num)) {
      setVal(Math.min(12, Math.max(1, num)));
    }
  }
function DiceElement({ diceVal }) {
  const dotsMap = {
    1: ["center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
    6: [
      "top-left",
      "top-right",
      "middle-left",
      "middle-right",
      "bottom-left",
      "bottom-right"
    ],
  };

  return (
    <div className="dice">
      <div className="dots">
        {dotsMap[diceVal].map((position, index) => (
          <div key={index} className={`dot dot--${position}`} />
        ))}
      </div>
    </div>
  );
}
  return (
    <div>
      <div className="input-container" style={{display:"flex",gap:"12px"}}>
        <input type="number"   min={1}
  max={12} onChange={(e)=>{inputHandler(e)}}/>
        <div onClick={diceCreater}>Roll</div>
      </div>
      {diceArray.length > 0 &&
        <div className="dice-container">
        {diceArray.map(item=>(
          <DiceElement diceVal={item}/>
        ))}
        </div>
       }
    </div>
  )
}
