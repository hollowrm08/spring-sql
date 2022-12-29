import { Author } from "./author";
import { Subject } from "./subject";

export interface Topic {
  id: number;
  content: string;
  privacy: TopicPrivacy;
  typeAuthor: TypeAuthor;
  pathImage?: string;
  subject: Subject;
  dateOfCreation: Date;
  author: Author;
}

enum TopicPrivacy {
  PUBLIC, PRIVATE
}

enum TypeAuthor {
  PUBLIC
  //Todo: add others
}
