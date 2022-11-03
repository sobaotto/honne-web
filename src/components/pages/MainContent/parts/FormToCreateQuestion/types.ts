export type FormToCreateQuestionProps = {
  setIsPosted: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setIsCreatingQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FormData = {
  title: string;
  text: string;
  is_public: boolean;
  respondent_id: number;
};
