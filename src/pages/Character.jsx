import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerList from "../data/player-list.json";
import StatDisplay from "../components/StatDisplay";

const Character = () => {
  const routeParams = useParams();
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const getIt = PlayerList.filter((elem) =>
      elem.name === routeParams.id ? setCharacterData(elem) : null
    );
  }, [PlayerList]);

  useEffect(() => {
    console.log(characterData);
  }, [characterData]);

  return (
    <div>
      <h1>{routeParams.id} </h1>
      {characterData ? (
        <>
          <p>Class: {characterData.classType}</p>
          <p>Level: {characterData.level}</p>
          <div>
            <StatDisplay characterStats={characterData.stats} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Character;
