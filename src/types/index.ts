export type IInterviewOverview = {
  candidate: string;
  role: string;
  interviewer: string;
  date: string;
};
export type IImpressionRate = {
  title: string;
  mark: number;
};
export type IImpression = {
  category: string;
  impressions: Array<IImpressionRate>;
  comment: string;
};
