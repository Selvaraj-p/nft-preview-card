

import Equip from './images/image-equilibrium.jpg';
import EquipIco from './images/icon-view.svg';
import Ether from './images/icon-ethereum.svg';
import CLK from './images/icon-clock.svg';

import React from "react";
import "./NFTCard.css";

const NFTCard = () => {
  return (

    <main class="card">
    <div class="card__images">
      <img src={Equip} alt="Equilibrium NFT" class="card__image" />
      <div class="card__images-layer">
        <img src={EquipIco} alt="View Icon" class="card__view-icon" />
      </div>
    </div>
    <div class="card__title">
    <h1>Equilibrium #3429</h1>
    <p id="info">Our Equilibrium collection promotes balance and calm.</p>
      </div>
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
        <img src="https://media.licdn.com/dms/image/D5603AQHmisevs6V-Wg/profile-displayphoto-shrink_200_200/0/1711565017432?e=2147483647&v=beta&t=2gxdXF049G8KQ53xOdouFjL_DKFruEzC2XH5LmLtem4" alt="Creator" />
        <p>
          Creation of <strong>selvaraj-p</strong>
        </p>
      </div>
      <footer className="attribution">
        Challenge by <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">Crio</a>.
        Coded by <a href="https://www.github.com/yourUsername" target="_blank" rel="noopener noreferrer">selvaraj-p</a>.
      </footer>

    </main>
  );
};

export default NFTCard;
