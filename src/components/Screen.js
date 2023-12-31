


const Screen = (props) => {
     const {menu,submenu} = props;
    return(
        <div className="screen-container" id="screen-container">
       
  
        {/* if menu = true the show menu */}
        { menu ?
          <div className="menu">
            <span className="heading">iPod.js</span>
            <ul className="menu-list" id="menu-list">
              <li id="song" className = "" >Music</li>
              <li id="games" className = "" >Games</li>
              <li id="setting" className = "" >Setting</li>
              <li id="developer" className = "" >Developer</li>
            </ul>
         </div>
         : null
        }
  
        {/* if submenu = true the show submenu */}
        {
           submenu ?
          <div className="menu">
            <span className="heading">Music</span>
            <ul className="menu-list" id="menu-list">
              <li id="allsong" className = "" >All Song</li>
              <li id="album" className = "" >Album</li>
              <li id="artist" className = "" >Artist</li>
            </ul>
          </div>
          :null
        }
          
      </div>
    )
}

export default Screen;