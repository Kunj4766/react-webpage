import { CommunityCardProps } from "../../utils/types";

const CommunityCard: React.FC<CommunityCardProps> = ({ community }) => {
  return (
    <div className="community-card">
      <div className="community-image-container">
        <img
          src={community.image}
          alt={community.title}
          className="community-image"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="community-content-wrapper">
        <div className="community-content">
          <p className="community-description">{community.description}</p>
        </div>
        <div className="title-wrapper">
          <h2 className="community-title">{community.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
