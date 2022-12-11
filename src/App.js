import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick() {
    console.log("I was clicked!")
  }

  function handleHover() {
    console.log("You are hovering over an image!")
  }


  return (
    <div className="container">
      <img src="https://picsum.photos/640/360" onMouseOver={handleHover}/>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
