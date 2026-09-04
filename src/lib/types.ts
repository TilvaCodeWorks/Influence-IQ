export type Platform =
  | "Instagram"
  | "YouTube"
  | "TikTok"
  | "Facebook"
  | "LinkedIn"
  | "Snapchat"
  | "X";

export type Gender =
  | "Female"
  | "Male"
  | "Other";

export interface Influencer {
  id: string;

  name: string;

  handle: string;

  platform: Platform;

  profileUrl: string;

  niche: string;

  location: string;

  gender: Gender;

  followers: number;

  following: number;

  avgViews: number;

  avgLikes: number;

  avgComments: number;

  engagementRate: number;

  audienceQuality: number;

  authenticityScore: number;

  matchScore: number;

  estimatedPriceMin: number;

  estimatedPriceMax: number;

  tags: string[];

  avatar: string;
}