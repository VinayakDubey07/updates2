import * as React from 'react';  
import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';  
import './Button.css';
export default function TextButtons() {  
  return (  
    <Stack direction="column" spacing={2}>  
      <Button className="Button1"onClick={() => {  
    alert('clicked');  
  }}>Continue</Button>  
       
    </Stack>  
  );  
}
