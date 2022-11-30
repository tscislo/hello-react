import { Button, TextField } from "@mui/material";
import React from 'react';
import './App.css';

function App() {
    const variant = "contained";
    const label = "Edit me please!";
    return (
        <>
            <h1>React Basic</h1>
            <div style={{marginBottom: "10px"}}>
                <Button variant={variant} onClick={() => alert("click")}>
                    Im React Material button!
                </Button>
            </div>
            <div>
                <TextField label={label}></TextField>
                <a href={"https://mui.com/material-ui/react-text-field/#basic-textfield"}
                   target={"_blank"}>
                    MUI doc
                </a>
            </div>
        </>
    );
}

export default App;
