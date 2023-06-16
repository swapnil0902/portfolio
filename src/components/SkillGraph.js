import React from 'react';
import './SkillGraph.css';

const SkillGraph = ({ language, percentage }) => {
  return (
    <div className="skill-graph">
      <h3>{language}</h3>
      <div className="graph">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillGraph;
