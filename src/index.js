import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from './theme'

ReactDOM.render(<ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
                , 
                document.getElementById("root"));


// render(
//     <ThemeProvider theme={theme}>
//     <App />
//     </ThemeProvider>
//     ,
//     document.querySelector()
// )