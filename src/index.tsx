import * as React from "react";
import * as ReactDOM from "react-dom";

import { Notepad } from "./components/app";

ReactDOM.render(
    <Notepad compiler="TypeScript" framework="React" />,
    document.getElementById("notepad")
);