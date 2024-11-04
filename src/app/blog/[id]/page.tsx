import ReactMarkdown from 'react-markdown';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import { ClientArticle, DbArticle } from '@/interfaces';
import { notFound } from 'next/navigation';
import { getDB } from '@/utils/db';
import ArticleHeader from '@/components/ArticleHeader';

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
    <div className="tw-px-[15%] tw-max-w-full tw-mx-[20px] tw-my-0">
      <Image
        src={src}
        alt={alt || ''}
        title={title}
        layout="responsive"
        width={300}
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
    <div className="tw-min-h-full tw-min-w-full tw-flex tw-flex-col tw-gap-y-10 tw-items-center tw-justify-center tw-px-[10%]">
      <ArticleHeader
        imageSrc={article.header_image}
        title={article.title}
        author={article.author}
        date={new Date(article.date).toLocaleDateString()}
        tags={article.tags}
      />
      <div className="post-class">
        <ReactMarkdown
          components={{
            img: ({ node: _node, ...props }) => <MarkdownImage {...props} />,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

async function getArticleByID(id: string) {
  const { db } = await getDB();
  const articlesCollection = db.collection<DbArticle>('articles');

  const articleFromDb = await articlesCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!articleFromDb) {
    return null;
  }

  const article: ClientArticle = {
    _id: articleFromDb._id.toHexString(),
    title: articleFromDb.title,
    header_image: articleFromDb.header_image,
    author: articleFromDb.author,
    date: articleFromDb.date.toISOString(),
    tags: articleFromDb.tags,
    content: articleFromDb.content,
  };

  return article;
}

export default ArticlePage;
