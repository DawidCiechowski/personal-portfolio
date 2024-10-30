import { ObjectId } from 'mongodb';

export interface DbArticle {
  _id: ObjectId;
  title: string;
  author: string;
  date: Date;
  tags: string[];
  content: string;
}

export interface ClientArticle {
  _id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
}

export interface Article {
  _id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
}
