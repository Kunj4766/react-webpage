import React from "react";
import { communities } from "../../utils/constants";
import "./communities.css";
import CommunityCard from "./CommunityCard";

const CommunitiesGrid: React.FC = () => {
  return (
    <div className="container">
      <h1 className="main-title">COMMUNITIES WE MANAGE</h1>
      <div className="communities-grid">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
};

export default CommunitiesGrid;
