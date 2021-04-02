import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { QuestionsFromCategory } from './category.model';
import { CategoryService } from './category.service';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [String])
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }

  @Query(() => [String])
  async getRandomCategories(
    @Args('amount', { type: () => Int }) amount: number,
  ) {
    const categories: string[] = await this.categoryService.getAllCategories();
    const shuffled = categories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
  }

  @Query(() => [QuestionsFromCategory])
  async getRandomCategoriesAndQuestions(
    @Args('amount', { type: () => Int }) amount: number,
  ): Promise<[QuestionsFromCategory]> {
    const categories = await this.getRandomCategories(amount);
    const arrayWithQuestions: QuestionsFromCategory[] = [];
    categories.map(async (categoryName) => {
      const questions = await this.categoryService.getQuestionsFromCategory(
        categoryName,
      );

      console.log('Category:', categoryName);
      console.log('Questions:', questions);

      arrayWithQuestions.push({
        category: categoryName,
        items: questions,
      });
    });

    return arrayWithQuestions as [QuestionsFromCategory];
  }
}
