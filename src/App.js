import './App.css';
import Card from './Card.js';

import sampleImg from './images/sample.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Greeting">
          HI, I'M <span className="White">CHLOE</span> AND I MAKE THINGS
        </div>
        <Card title="USC Financial Aid Forms"
          tags="#front-end #form.io"
          bgImg={sampleImg}></Card>
      </header>
    </div>
  );
}

export default App;
