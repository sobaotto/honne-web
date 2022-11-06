import React from "react";
import { useTranslation } from "react-i18next";
import { BaseQuestionStatus } from "./styled";
import { QuestionStatusProps } from "./types";

export const AnswerStatus = React.memo(
  ({ className, children, answerStatus }: QuestionStatusProps) => {
    const [t] = useTranslation();

    let status: string = "";
    let statusColor: string = "";
    let statusBackgroundColor: string = "";

    switch (answerStatus) {
      case "resolved":
        status = t("answerStatus.resolved");
        statusColor = "rgba(42, 139, 242, 1)";
        statusBackgroundColor = "rgba(42, 139, 242, 0.25)";
        break;
      case "unresolved":
        status = t("answerStatus.unresolved");
        statusColor = "rgba(255,51,102,1)";
        statusBackgroundColor = "rgba(255,51,102,0.25)";
        break;
      default:
        status = "-";
        statusColor = "rgba(230,236,254,1)";
        statusBackgroundColor = "rgba(230,236,254,0.25)";
        break;
    }

    return (
      <BaseQuestionStatus
        className={className}
        statusColor={statusColor}
        statusBackgroundColor={statusBackgroundColor}
      >
        {status}
      </BaseQuestionStatus>
    );
  }
);
