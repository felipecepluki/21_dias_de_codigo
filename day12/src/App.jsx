import { useState } from "react";
import "./App.css";

import AirJordan1 from "./assets/off-white-air-jordan-1.jpg";
import Yeezy from "./assets/yeezy-boost.jpg";
import OffWhite from "./assets/nike-off-white.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Carousel>
      <div>
        <img src={AirJordan1} />
        <p className="legend">Air Jordan 1 Off-White</p>
      </div>
      <div>
        <img src={Yeezy} />
        <p className="legend">Yeezy Boost 350</p>
      </div>
      <div>
        <img src={OffWhite} />
        <p className="legend">Air Jordan 1 Off-White</p>
      </div>
    </Carousel>
  );
}

export default App;
