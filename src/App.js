import './App.css';
import Card from './Card.js';
import HorizontalScroll from 'react-scroll-horizontal';

import formio from './assets/formio.png';
import proevento from './assets/proevento-home.png';
import weatherjournal from './assets/weatherjournal.png';
import inorout from './assets/inorout.png';

import resume from './assets/Chloe_Shigeoka_Resume.pdf';

function App() {

  return (
    <div className="App">
      <HorizontalScroll reverseScroll={true}>
        <header className="App-header">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <div className="Greeting Main-text">
            HI, I'M <span className="White">CHLOE</span> AND I MAKE THINGS
          </div>

          <Card title="USC Financial Aid Forms"
            tags="#front-end #form.io"
            bgImg={formio}
            position="top"></Card>
          <Card title="ProEvento"
            tags="#front-end #back-end #react"
            bgImg={proevento}></Card>
          <Card title="Weather Journal"
            tags="#front-end #back-end #php"
            bgImg={weatherjournal}
            position="top"></Card>
          <Card title="InOrOut"
            tags="#front-end #back-end #java"
            bgImg={inorout}></Card>
          
          <div className="End">
            <div className="Links">
              <div className="Main-text">CHECK OUT MY OTHER LINKS</div>
              <div className="Link"><a href={resume}>RESUME</a></div>
              <div className="Link"><a href="https://www.linkedin.com/in/chloe-shigeoka-1a9747171/">LINKEDIN</a></div>
              <div className="Link"><a href="https://github.com/cshigeoka">GITHUB</a></div>
            </div>

            <div className="Links">
              <div className="Main-text">EMAIL ME</div>
              <div className="Link"><a href="mailto: shigeoka@usc.edu">SHIGEOKA@USC.EDU</a></div>
            </div>
          </div>
          
        </header>
      </HorizontalScroll>
    </div>
  );
}

export default App;
