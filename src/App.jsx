import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button class="btn">Button</button>
            <button class="btn btn-primary">Button</button>
            <button class="btn btn-secondary">Button</button>
            <button class="btn btn-accent">Button</button>
            <button class="btn btn-ghost">Button</button>
            <button class="btn btn-link">Button</button>
        </>
    );
}

export default App;
