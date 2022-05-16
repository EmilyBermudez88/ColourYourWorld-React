//RoomsNav.js
import { Link } from 'react-router-dom';
import LivingRoom from '../assets/room2.png';
import Kitchen from '../assets/kitchen2.png';
import Bedroom from '../assets/bedroom.png';

function RoomsNav(){

     return(
          <nav className="selectRoom">
               <ul className="roomList">
                    <li>
                         <Link to="/">
                              <img src={LivingRoom} alt="living room" />
                         </Link>
                         
                    </li>
                    <li>
                         <Link to="/kitchen">
                              <img src={Kitchen} alt="kitchen" />
                         </Link>
                         
                    </li>
                    <li>
                         <Link to="/bedroom">
                              <img src={Bedroom} alt="bedroom" />
                         </Link>
                         
                    </li>
               </ul>
          </nav>
     )
}

export default RoomsNav;