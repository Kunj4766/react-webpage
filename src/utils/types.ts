export interface Community {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface CommunityCardProps {
  community: Community;
}