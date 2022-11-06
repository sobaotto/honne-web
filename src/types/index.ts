export type User = {
  id: number;
  name: string;
  email: string;
};

export type Question = {
  id: number;
  title: string;
  text: string;
  question_status: string;
  is_public: boolean;
};

export type Answer = {
  id: number;
  text: string;
} | null;

export type QuestionItem = {
  respondent_name: string;
  question: Question;
  answer: Answer;
};

export type askedQuestionItem = {
  questioner_name: string;
  question: Question;
  answer: Answer;
};

export type showingPagePath =
  | "questions"
  | "answers"
  | "home"
  | "contacts"
  | "settings"
  | "logout";
