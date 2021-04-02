import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CategoryService {
  async getAllCategories() {
    const categories = await axios.get(
      'https://jeopardy-api.bentleyherron.dev/api/categories',
    );
    return categories.data['category_names'];
  }
}
