import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [enabledButton, setEnabledButton] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={enabledButton ? { backgroundColor: 'gray' } : { backgroundColor: buttonColor }}
        onClick={(() => setButtonColor(newButtonColor))}
        disabled={enabledButton}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={() => setEnabledButton(!enabledButton)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
