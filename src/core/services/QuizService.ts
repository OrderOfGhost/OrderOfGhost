import { QuizQuestion } from '../../types/quiz';

/**
 * QuizService handles quiz logic such as verifying answers.
 */
export class QuizService {
  constructor(private questions: QuizQuestion[]) {}

  validate(questionId: string, answerIndex: number): boolean {
    const q = this.questions.find(qz => qz.id === questionId);
    return q ? q.correctIndex === answerIndex : false;
  }
}
