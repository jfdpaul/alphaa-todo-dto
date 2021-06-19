import { IsNotEmpty } from "class-validator";

export default class Todo {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}