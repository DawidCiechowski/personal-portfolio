import ReactMarkdown from "react-markdown";
import { MongoClient, ObjectId } from "mongodb";
import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ClientArticle, DbArticle } from "@/interfaces";

interface ArticlePageProps {
  article: ClientArticle;
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

const BlogPost: NextPage<ArticlePageProps> = ({ article }) => {
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (
  context
) => {
  const { params } = context;
  const articleId = params?.id;

  if (!articleId || Array.isArray(articleId)) {
    return {
      notFound: true,
    };
  }

  const client = await MongoClient.connect(process.env.DB_URI as string);
  const db = client.db();

  const article = await db
    .collection<DbArticle>("articles")
    .findOne({ _id: new ObjectId(articleId) });

  client.close();

  if (!article) {
    return {
      notFound: true,
    };
  }

  const serializeArticle: ClientArticle = {
    _id: article._id.toHexString(),
    title: article.title,
    author: article.author,
    date: article.date.toISOString(),
    tags: article.tags,
    content: article.content,
  };

  return {
    props: {
      article: serializeArticle,
    },
  };
};

export default BlogPost;
