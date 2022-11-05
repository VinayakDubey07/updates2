import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import './timepicker.css';
function App() {
  const [time, setTime] = useState('');
  return (
    <div className="App11" >
      <a className="text1">Pick time</a>
      <br />
      <p>Selected Time: {time || '-'}</p>
      <TimePicker className="Time1"
        placeholder="Select Time"
        use12Hours
        showSecond={false}
        focusOnOpen={true}
        format="hh:mm A"
        onChange={e => setTime(e.format('LT'))}
      />
    </div>
  );
}

export default App;