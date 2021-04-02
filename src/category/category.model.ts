import { Field, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/question/question.model';

@ObjectType()
export class QuestionsFromCategory {
  @Field()
  category: string;

  @Field(() => [Question], { nullable: 'items' })
  items: [Question] | [];
}
