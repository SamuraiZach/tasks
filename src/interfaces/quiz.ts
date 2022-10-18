import { Question } from "./questionQuiz";

export interface Quiz {
    id: number;
    title: string;
    body: string;
    published: boolean;
    questionList: Question[];
}
