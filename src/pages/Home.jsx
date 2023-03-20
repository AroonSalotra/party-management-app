import { Fragment } from "react";
import MemberDisplay from "../components/MemberDisplay";
import PlayerList from "../data/player-list.json";
import useAxiosGet from "../hooks/useAxiosGet";
import { Link } from "react-router-dom";

const Home = () => {
  const { fetchedData } = useAxiosGet("https://api.open5e.com/", "classes");

  return (
    <div className="party-list">
      {PlayerList.map(({ name, level, health, armor, classType }) => {
        return (
          <Fragment key={name} >
            <MemberDisplay
              name={name}
              level={level}
              health={health}
              armor={armor}
              classType={classType}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Home;
