import React, { useContext, useEffect, useState } from "react";
import { Box, Layer, TextInput } from "grommet";
import '../src/Demo.css'

const Demo = () => {
    const [value, setValue] = React.useState('');
    return (
        <Box>
            <Box className="textinputBox">
                <TextInput
                    className="textinput"
                    placeholder="type here"
                    value={value}
                    suggestions={['Apples', 'Oranges', 'Bananas']}
                />
            </Box>

            <div role="status" id="hpe-searchResults" >
                <Layer className="searchLayer"
                    modal={true}
                    direction="row"
                    full
                    role="status"
                    id="layerTop"
                >
                    <Box pad={{ top: 'medium' }}  align="center">
                        <h1>Layer!</h1>
                    </Box>
                </Layer>
            </div>

        </Box>
    );
};

export default Demo;