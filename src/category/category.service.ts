import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Question } from 'src/question/question.model';

@Injectable()
export class CategoryService {
  async getAllCategories(): Promise<[string]> {
    const categories = await axios.get(
      'https://jeopardy-api.bentleyherron.dev/api/categories',
    );
    return categories.data['category_names'];
  }

  async getQuestionsFromCategory(
    categoryName: string,
  ): Promise<[Question] | []> {
    try {
      const questions = await axios.get(
        `https://jeopardy-api.bentleyherron.dev/api/categories/${categoryName}`,
      );

      return questions.data['questions'];
    } catch (e) {
      return [];
    }
  }
}
