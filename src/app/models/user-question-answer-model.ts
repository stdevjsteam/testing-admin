export interface Answer {
  answer: string;
  key: number;
}

export interface QuestionAnswerModel {
  id: number;
  question: string;
  rightAnswer: number;
  userAnswer: number;
  answers: Array<Answer>;
}

export default interface UserQuestionAnswerModel {
  userId: string;
  userAllRightAnswers: number;
  userQuestionAnswers: Array<QuestionAnswerModel>;
}
