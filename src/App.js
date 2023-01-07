import img from './iou.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="headerImage" src={img} alt="headerImg"></img>
        <p>
          Dear Shan, Happy Birthday.<br />
          I love you so much, and I'm so excited (and terrified) about all the big things we're planning to do this year.<br /><br />
          We're going to marry, we're going to move half way across the world together, we're going to move on to a new stage in our lives. I know it's scary, I know it's full of uncertainty, but I'm so happy to be doing it with you. <br /><br />
          The gift I've given you is mostly just a token to celebrate the day of your birthday.<br /><br />
          <span className="special">My real gift is this: whenever you can, whenever you are ready, I will take you on an ALL EXPENSES PAID trip to Disneyland Shanghai. We can stay as long as you want, stay where you want, and ride whatever rides you want. You just tell me when you're ready to go.</span><br /><br />

          Happy Birthday Baobi, <br />
          I love you,<br />
          Jack.x
        </p>
      </header>
    </div>
  );
}

export default App;
