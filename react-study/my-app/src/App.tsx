import React, {useState} from 'react';
import logo from './logo.svg';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
import './App.css';

interface IShowResult {
    message: string;
    status: string;
}

function App() {
    const [show, setShow] = useState(true)
    // 使用自定义hook
    // const positions = useMousePosition();
    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
    console.log(data, loading)
    const dogResult = data as IShowResult;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/*<p>X: {positions.x}, Y: {positions.y}</p>*/}
                <p>
                    <button onClick={() => {
                        setShow(!show)
                    }}>Toggle Tracker
                    </button>
                </p>
                {/*{show && <MouseTracker/>}*/}
                {loading ? <p>dog is loading</p>
                    : <img src={dogResult && dogResult.message}/>
                }
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
