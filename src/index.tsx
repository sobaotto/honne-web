import * as React from "react";
import * as ReactDOM from"react-dom";
import './reset.css';
import Img from './example.png';

ReactDOM.render(<div>hello world
<img src={Img}></img></div>,
document.getElementById("root"));