import '../src/Card.css';
import nftImage from './images/image-equilibrium.jpg';
import creatorAvatar from './images/image-avatar.png';
import viewIcon from './images/icon-view.svg';
import ethIcon from '../src/images/icon-ethum.png.svg';
import clockIcon from '../src/images/icon-clock.svg';
export default function NftCard() {
  return (
    <main className="card">
      <div className="card__images">
        <img src={nftImage} alt="Equilibrium" />
        <div className="card__images-layer">
          <img src={viewIcon} alt="View icon" />
        </div>
      </div>

      <div className="card__title">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>

      <div className="card__time">
        <div className="card__time-left">
          <img src={ethIcon} alt="Ethereum icon" />
          <span>0.041 ETH</span>
        </div>
        <div className="card__time-right">
          <img src={ClockIcon} alt="Clock icon" />
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
          Coded by <a href="https://github.com/selvaraj-p" target="_blank" rel="noopener noreferrer">You</a>.
        </div>
      </footer>
    
    </main>
  );
}
