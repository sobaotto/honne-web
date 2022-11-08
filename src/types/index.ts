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
};

export type Respondent = {
  name: string;
};

export type Questioner = {
  name: string;
};

export type QuestionItem = {
  respondent: Respondent;
  question: Question;
  answer?: Answer;
};

export type askedQuestionItem = {
  questioner: Questioner;
  question: Question;
  answer?: Answer;
};

export type showingPagePath =
  | "questions"
  | "answers"
  | "home"
  | "contacts"
  | "settings"
  | "logout";
