export type User = {
  id: number;
  name: string;
  email: string;
};

export type Question = {
  respondentName: string;
  title: string;
  text: string;
  question_status: string;
  is_public: boolean;
};
