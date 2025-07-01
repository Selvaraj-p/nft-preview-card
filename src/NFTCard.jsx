import React, { useState } from 'react';
import './NFTCard.css';
import Equip from './images/image-equilibrium.jpg';
import EquipIco from './images/icon-view.svg';
import Ether from './images/icon-ethereum.svg';
import AVR from './images/image-avatar.png';
import CLK from './images/icon-clock.svg';
export default function NFTCard() {
  const [hover, setHover] = useState(false);

  return (
    <div className="card">
      <div
        className="card__images"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={Equip} alt="Equilibrium #3429" className="card__image" />
        <div className="card__images-layer" style={{ opacity: hover ? 1 : 0 }}>
          <img src={EquipIco} alt="View Icon" className="card__view-icon" />
        </div>
      </div>
      <h1 className="card__title">Equilibrium #3429</h1>
      <p className="card__description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="card__time">
        <div className="card__time-left">
          <img src={Ether} alt="Ethereum" />
          <span>0.041 ETH</span>
        </div>
        <div className="card__time-right">
          <img src={CLK} alt="Clock" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="card__creator">
        <img src={AVR} alt="Creator Avatar" className="card__creator-avatar" />
        <p>Creation of <span className="card__creator-name">Jules Wyvern</span></p>
      </div>
    </div>
  );
}
