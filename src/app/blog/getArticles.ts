import { Article, DbArticle } from '@/interfaces';
import { getDB } from '@/utils/db';
import { cache } from 'react';

export const getArticles = cache(async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize;

  const { db } = await getDB();
  const articlesCollection = db.collection<DbArticle>('articles');

  const totalArticles = await articlesCollection.countDocuments();

  const totalPages = Math.ceil(totalArticles / pageSize);

  const articlesFromDB = await articlesCollection
    .find({}, { projection: { content: 0 } })
    .sort({ date: -1 })
    .skip(skip)
    .limit(pageSize)
    .toArray();

  const articles: Article[] = articlesFromDB.map(article => ({
    _id: article._id.toHexString(),
    title: article.title,
    author: article.author,
    date: article.date.toISOString(),
    tags: article.tags,
  }));

  return { articles, totalPages };
});
