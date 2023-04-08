import './App.css';
import TestComponent from "./components/TestComponent";

function App() {
    return (
        <div className="App">
            <h4>Component Title <span>*</span></h4>
            <TestComponent content={'Test Content'}/>
        </div>
    );
}

export default App;
