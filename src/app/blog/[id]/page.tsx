import ReactMarkdown from 'react-markdown';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import { ClientArticle, DbArticle } from '@/interfaces';
import { notFound } from 'next/navigation';
import { getDB } from '@/utils/db';

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
    <div className="tw-min-h-full tw-min-w-full tw-flex tw-flex-col tw-gap-y-10 tw-items-center tw-justify-center tw-px-[10%] tw-mt-[10%]">
      <div className=" tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col">
        <h1 className="tw-text-[6vh] md:tw-text-[4vh] tw-font-bold tw-border-b-[2px] tw-rounded-lg tw-border-main-color tw-mb-4 tw-text-slate-300">
          {article.title}
        </h1>
        <h2 className="tw-text-[4vh] md:tw-text-[2vh] tw-text-slate-400">
          {article.author} - {new Date(article.date).toLocaleDateString()}
        </h2>
      </div>

      <div className="tw-relative tw-z-10 tw-px-[12%] tw-items-center tw-flex tw-flex-col tw-gap-y-10 tw-text-slate-400 tw-text-[12px] md:tw-text-[16px] lg:tw-text-[20px]">
        <ReactMarkdown
          components={{
            img: ({ node: _node, ...props }) => <MarkdownImage {...props} />,
          }}
        >
          {article.content}
        </ReactMarkdown>
        {article.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
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
