import { Button2 } from "./Button2";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="assets/videos/video-2.mp4" autoPlay muted loop />
      <h1>ADVENTURE AWAIT !!!</h1>
      <p>What Are You Waiting For!?</p>
      <div className="hero-btns">
        <Button2 buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button2>
        <Button2 buttonSize="btn--large" buttonStyle="btn--primary">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button2>
      </div>
    </div>
  );
};

export default HeroSection;
