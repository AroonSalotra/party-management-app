import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowDownCircleFill, BsThreeDots } from "react-icons/bs";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiZzzFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const MemberDisplay = ({ name, health, armor, level, classType }) => {
  const [activeHealth, setActiveHealth] = useState("");
  const [showOptions, setShowOptions] = useState(false);

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
      <Link className="member-name" to={`/character/${name}`}>
        {name}
      </Link>

      <ul className="member-list">
        <li className="class-type">{classType}</li>

        <li className="level">Lv.{level}</li>

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

        {/* <li className="overlap">
          <i className="icon shield">
            <BsFillShieldFill />
          </i>
          <span className="member-text">{armor}</span>
        </li> */}
      </ul>

      <button onClick={() => setShowOptions(!showOptions)}>
        <BsThreeDots />
      </button>

      <div className={`options ${showOptions ? "" : "hide"}`}>
        <button>
          <FaSkullCrossbones />
        </button>
        <button>
          <RiZzzFill />
        </button>
        <button>
          <MdCancel />
        </button>
      </div>
    </div>
  );
};

export default MemberDisplay;
