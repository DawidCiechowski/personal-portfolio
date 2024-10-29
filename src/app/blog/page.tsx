import React from "react";
import { MongoClient } from "mongodb";
import { Article, DbArticle } from "@/interfaces";
import { getDB } from "@/utils/db";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

interface BlogPageProps {
  articles: Article[];
  currentPage: number;
  totalPages: number;
}

const PAGE_SIZE = 12;

const BlogPage: NextPage<BlogPageProps> = ({
  articles,
  currentPage,
  totalPages,
}) => {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <div key={article._id}>
            <Link href={`/articles/${article._id}`}>
              <a>{article.title}</a>
            </Link>
            <p>
              {article.author} - {new Date(article.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`}>
            <a>Previous</a>
          </Link>
        )}
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`}>
            <a>Next</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async (
  context
) => {
  try {
    const page = parseInt((context.query.page as string) || "1", 10);
    const skip = (page - 1) * PAGE_SIZE;

    const db = await getDB();
    const articlesCollection = db.collection<DbArticle>("articles");

    await articlesCollection.createIndex({ date: -1 });

    const totalArticles = await articlesCollection.countDocuments();

    const totalPages = Math.ceil(totalArticles / PAGE_SIZE);

    const articlesFromDB = await articlesCollection
      .find({}, { projection: { content: 0 } })
      .sort({ date: -1 })
      .skip(skip)
      .limit(PAGE_SIZE)
      .toArray();

    const articles: Article[] = articlesFromDB.map((article) => ({
      _id: article._id.toHexString(),
      title: article.title,
      author: article.author,
      date: article.date.toISOString(),
      tags: article.tags,
    }));

    return {
      props: {
        articles,
        currentPage: page,
        totalPages,
      },
    };
  } catch (error) {
    return {
      props: {
        articles: [],
        currentPage: 1,
        totalPages: 1,
      },
    };
  }
};

export default BlogPage;
