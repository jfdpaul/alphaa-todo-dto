import { IsNotEmpty } from "class-validator";

export default class Todo {
  _id: string;

  @IsNotEmpty()
  title: string;

  description: string;
}