import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2">
        <div style={{ height: "150px", width: "150px" }}>
          <img
            alt="logo"
            style={{ height: "100px", width: "100px", padding: "25px" }}
            src={brain}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
