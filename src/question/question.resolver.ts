import { Query, Resolver } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { Question } from './question.model';

@Resolver('Question')
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question])
  async getRandomQuestion() {
    return await this.questionService.getRandomQuestion();
  }
}
