import React , {useState} from "react";
import Seat from "./components/Seat";
import MovieSelector from "./components/MovieSelector";
import "./App.css";

const App = () => {
  const [type, setType] = useState("");
  const [count, setCount] = useState(0);
  const handleSelect = () => {
    setCount(count + 1);
    setType("occupied");}
  return (
    <>
      <div>
        <MovieSelector />
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>

          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>

          <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>
        <div className="container">
          <div className="screen"></div>
          <div className="row">
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
          </div>
          <div className="row">
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
            <Seat type={"occupied"} />
            <Seat type={"occupied"} />
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
          </div>
          <div className="row">
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect} />
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat type={type} />
            <Seat type={type} />
          </div>
          <div className="row">
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
          </div>
          <div className="row">
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat type={type} />
            <Seat type={type} />
          </div>
          <div className="row">
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat handleSelect={handleSelect}/>
            <Seat type={type} />
            <Seat type={type} />
            <Seat type={type} />
            <Seat handleSelect={handleSelect}/>
          </div>
        </div>
      </div>

      <p class="text">
        You have selected <span id="count">count</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
};

export default App;
