import React, { useState } from 'react';
import './App.css';
import Display from './Components/display';

function App() {
  // Calculator state
  const [display, setDisplay] = useState(''); // The current input or expression to evaluate
  const [lastOperation, setLastOperation] = useState(''); // Stores the last completed operation
       // Handle button clicks
       const handleButtonClick = (value) => {
        // If '=' is clicked, evaluate the expression
        if (value === '=') {
          try {
            // Use eval to calculate the expression (be cautious with eval for security reasons)
            setDisplay(String(eval(display))); // Convert the result to a string
            setLastOperation(display); // Store the last operation
          } catch (error) {
            setDisplay('Error'); // Show an error if the expression is invalid
          }
        } else if (value === 'AC') {
          setDisplay(''); // Clear the display
          setLastOperation(''); // Reset the last operation
        } else if (value === 'C') {
          setDisplay(display.slice(0, -1)); // Remove the last character
        } else {
          setDisplay(display + value); // Append the button's value to the display
        }
      };


  return (
    <div className="App">
      <div className="container">
        <div className="Calculator">
        <Display display={display}></Display>
        <div className="row">
            <button className="spcl" onClick={() => handleButtonClick('AC')}>
              AC
            </button>
            <button className="spcl" onClick={() => handleButtonClick('C')}>
              C
            </button>
            <button className="spcl" onClick={() => handleButtonClick('%')}>
              %
            </button>
            <button className="spcl" onClick={() => handleButtonClick('/')}>
              /
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button className="spcl" onClick={() => handleButtonClick('*')}>
              *
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button className="spcl" onClick={() => handleButtonClick('-')}>
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button className="spcl" onClick={() => handleButtonClick('+')}>
              +
            </button>
          </div>
          <div className="rowlast">
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button className="spcl" onClick={() => handleButtonClick('.')}>.</button>
            <button className="Equal spcl" onClick={() => handleButtonClick('=')}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
