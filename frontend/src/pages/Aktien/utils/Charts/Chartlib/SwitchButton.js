import * as React from 'react';
import "./SwitchButton.css";

function SwitchButton() {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='SwitchButtonContainer' onClick={handleClick}>
      {/* <button type="button" onClick={handleClick}> */}
        {isOpen ? 
<img src="./../img/barchart.svg"></img>
:
<img src="./../img/linechart.svg"></img>
        }
      {/* </button> */}
    </div>
  );
};

export default SwitchButton;