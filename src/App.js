import React from "react";
import { Box, Grommet, TextInput } from 'grommet';
import Demo from '../src/Demo'

const AppBar = (props) => (
  <Box
  full
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


function App() {
  return (
    <div className="App">
      <Grommet plain>
      <Demo/>
      <header className="App-header">
        
   

        
        
      </header>
      <AppBar>Hello Grommet!</AppBar>
      </Grommet>
    </div>
  );
}

export default App;
