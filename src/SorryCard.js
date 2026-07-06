import React, { useState } from 'react';
import './SorryCard.css';

function SorryCard() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % 4);
  };

  return (
    <div className={`card slide-${slide}`} onClick={nextSlide}>
      <div className="card-front">
        <div className="sad-face">😔</div>
        <h1>Hey Shweta, I'm Sorry!</h1>
        <p className="tap-hint">Click to open</p>
      </div>
      <div className="card-inside">
        <div className="hearts">🤝</div>
        <h2>I owe you an apology</h2>
        <p>
          I messed up and I know it. You mean a lot to me,
          and I hate that I let you down. I hope you can forgive me.
        </p>
        <p className="signature">Always here for you 🙏</p>
        <p className="name">— Rohit</p>
        <p className="tap-hint">Click for a surprise</p>
      </div>
      <div className="card-chocolate">
        <div className="chocolate-promise">
          <div className="chocolate">🍫</div>
          <p className="promise-text">And yes — that chocolate I promised?</p>
          <p className="promise-text big">It's coming your way!</p>
          <div className="chocolate-rain">
            <span>🍫</span><span>🍫</span><span>🍫</span>
            <span>🍫</span><span>🍫</span><span>🍫</span>
          </div>
        </div>
        <p className="tap-hint">Click to continue</p>
      </div>
      <div className="card-thankyou">
        <div className="thankyou-emoji">🥹</div>
        <h2>Thank You, Shweta</h2>
        <p>
          Thank you for forgiving me. I won't take your kindness for granted.
          You're truly one of a kind.
        </p>
        <div className="sparkles">
          <span>✨</span><span>💛</span><span>✨</span>
          <span>💛</span><span>✨</span>
        </div>
        <p className="name">— Rohit</p>
        <p className="tap-hint">Click to restart</p>
      </div>
    </div>
  );
}

export default SorryCard;
