import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class QuestionService {
  // Does not work
  async getRandomQuestion() {
    const question = await axios.get(
      'https://jeopardy-api.bentleyherron.dev/api/question',
    );

    return question.data['question'];
  }
}
