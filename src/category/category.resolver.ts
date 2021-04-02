import { Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [String])
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }
}
