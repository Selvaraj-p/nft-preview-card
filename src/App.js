import './App.css';
import nftImage from './image-equilibrium.jpg';
import creatorAvatar from './image-avatar.png';

function App() {
   return (
    <div className="card">
      <div className="card__images">
        <img src={nftImage} alt="Equilibrium" />
        <div className="card__images-layer">
          <img src="./images/icon-view.svg" alt="View icon" />
        </div>
      </div>

      <div className="card__title">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>

      <div className="card__time">
        <div className="card__time-left">
          <img src="./images/icon-ethereum.svg" alt="Ethereum" />
          <span>0.041 ETH</span>
        </div>
        <div className="card__time-right">
          <img src="./images/icon-clock.svg" alt="Clock" />
          <span>3 days left</span>
        </div>
      </div>

      <div className="card__creator">
        <img src={creatorAvatar} alt="Creator" />
        <p><span>Creation of</span> Jules Wyvern</p>
      </div>

    <footer>
      <div className="attribution">
        Challenge by <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">Crio</a>.
        Coded by <a href="https://github.com/Selvaraj-p" target="_blank" rel="noopener noreferrer">You</a>.
      </div>
    </footer>

    </div>
  );
}

export default App;
