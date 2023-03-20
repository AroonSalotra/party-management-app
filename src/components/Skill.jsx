const Skill = ({ stat, level, modifier }) => {
  return (
    <div className="skill">
      <p className="skill-stat">{stat.slice(0, 3)}</p>
      <p className="skill-level">{level}</p>
      {modifier ? <p className="skill-mod">{modifier}</p> : null}
    </div>
  );
};

export default Skill;
