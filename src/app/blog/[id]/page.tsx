import ReactMarkdown from "react-markdown";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { NextPage } from "next";
import React from "react";
import { ClientArticle, DbArticle } from "@/interfaces";
import { notFound } from "next/navigation";
import { getDB } from "@/utils/db";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

interface MarkdownImageProps {
  alt?: string;
  src?: string;
  title?: string;
}

const MarkdownImage: React.FC<MarkdownImageProps> = ({ alt, src, title }) => {
  if (!src) return null;

  return (
    <div className="tw-max-w-full tw-mx-[20px] tw-my-0">
      <Image
        src={src}
        alt={alt || ""}
        title={title}
        layout="responsive"
        width={700}
        height={300}
      />
    </div>
  );
};

const ArticlePage: NextPage<ArticlePageProps> = async ({
  params,
}: ArticlePageProps) => {
  
  const { id } = params;
  const article = await getArticleByID(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="">
      <h1>{article.title}</h1>
      <p>
        {article.author} - {new Date(article.date).toLocaleDateString()}
      </p>
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => <MarkdownImage {...props} />,
        }}
      >
        {article.content}
      </ReactMarkdown>
      {article.tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  );
};

async function getArticleByID(id: string) {
  const { db } = await getDB();
  const articlesCollection = db.collection<DbArticle>("articles");

  const articleFromDb = await articlesCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!articleFromDb) {
    return null;
  }

  const article: ClientArticle = {
    _id: articleFromDb._id.toHexString(),
    title: articleFromDb.title,
    author: articleFromDb.author,
    date: articleFromDb.date.toISOString(),
    tags: articleFromDb.tags,
    content: articleFromDb.content,
  };

  return article;
}

export default ArticlePage;
