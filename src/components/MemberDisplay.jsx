import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShieldFill } from "react-icons/bs";

const MemberDisplay = ({ name, health, armor, level, classType }) => {
  const [activeHealth, setActiveHealth] = useState("");

  useEffect(() => {
    if (activeHealth != "") return;
    setActiveHealth(health);
  }, [health]);

  const handleHealthChange = (e, action) => {
    if (action === "+") {
      setActiveHealth(activeHealth + 1);
    } else if (action === "-") {
      if (activeHealth < 1) return;
      setActiveHealth(activeHealth - 1);
    } else console.log("Health change error, check params");
  };

  return (
    <div className="member">
      <p className="member-name">{name}</p>

      <ul className="member-list">
        <li>{classType}</li>

        <li>Lv.{level}</li>

        <li className="overlap">
          <i className="icon heart">
            <AiFillHeart />
          </i>
          <div>
            <span className="member-text">{activeHealth}</span>
            <div className="member-btns">
              <button onClick={(e) => handleHealthChange(e, "+")}>+</button>
              <button onClick={(e) => handleHealthChange(e, "-")}>-</button>
            </div>
          </div>
        </li>

        <li className="overlap">
          <i className="icon shield">
            <BsFillShieldFill />
          </i>
          <span className="member-text">{armor}</span>
        </li>
      </ul>
    </div>
  );
};

export default MemberDisplay;
