
import playPause from '../icons/pause.png';
import prevBtn from '../icons/rewind-button.png';
import nextBtn from '../icons/forward-button.png';


const Wheel = (props) => {
    
  return (
    <div className="container">
      <div className="outer-circle" id="outer-circle" onClick={props.onhandleRotate}>
        <span id="menu-btn" className="menu-btn" onClick={props.onMenuClick} >Menu</span>
        <img id="play-pause-btn" className="play-pause-btn" src={playPause} alt="play-pause-btn"/>
        <img id="prev-btn" className="prev-btn" src={prevBtn} alt="play-pause-btn"/>
        <img id="next-btn" className="next-btn" src={nextBtn} alt="play-pause-btn"/>
        <div id="inner-circle" className="inner-circle" onClick={props.handleInnerCirlceClick}></div>
      </div>
    </div>
  );
};

export default Wheel;