import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Question {
  @Field()
  showNumber: number;

  @Field()
  airDate: string;

  @Field()
  round: string;

  @Field()
  category: string;

  @Field()
  value: string;

  @Field()
  question: string;

  @Field()
  answer: string;
}
