import { Fragment } from "react";
import Skill from "./Skill";

const StatDisplay = ({ characterStats }) => {
  console.log(characterStats);

  return (
    <div className="stats">
      {characterStats.map(({ stat, level, modifier }) => {
        return (
          <Fragment>
            <Skill stat={stat} level={level} modifier={modifier} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default StatDisplay;
