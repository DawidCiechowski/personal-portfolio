import React from 'react';
import Link from 'next/link';
import { getArticles } from './getArticles';
import Image from 'next/image';
import Pagination from '@/components/Pagination';

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const PAGE_SIZE = 12;

export default async function ArticlePage({ searchParams }: BlogPageProps) {
  const page = parseInt(searchParams.page || '1', 10);

  const { articles, totalPages } = await getArticles(page, PAGE_SIZE);

  return (
    <div className="tw-px-[12%] tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-8">
      <h1 className="tw-text-[2.2rem] tw-w-1/2 md:tw-text-[2.5rem] md:tw-w-1/3 lg:tw-w-1/2 lg:tw-text-[3.6rem] tw-font-bold tw-text-main-color tw-border-b-2 tw-rounded-full tw-outline-4 tw-text-center tw-mb-16 tw-mt-8">
        Beyond The Pages
      </h1>

      {articles.length === 0 && (
        <p className="tw-text-[1.5rem] tw-text-text-color">
          No articles found.
        </p>
      )}

      {articles.length > 0 && (
        <>
          <ul className="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 md:tw-gap-x-8 tw-gap-y-6 ">
            {articles.map(article => (
              <Link
                key={article._id}
                className="tw-relative tw-z-10 tw-min-h-72 tw-min-w-96 tw-border-solid tw-border-main-color tw-border-2 tw-shadow-glow-tiny tw-rounded-xl tw-text-wrap tw-items-end tw-flex tw-flex-col tw-justify-end tw-duration-200 tw-ease-in-out hover:tw-scale-110 hover:tw-shadow-glow-md"
                href={`/blog/${article._id}`}
              >
                <Image
                  src={article.header_image}
                  alt="Background Image"
                  layout="fill"
                  className="tw-z-12"
                />
                <div className="tw-relative tw-z-10 tw-bg-slate-800 tw-text-white tw-w-full">
                  <p className="tw-pb-2 tw-pt-4 tw-pr-2 tw-pl-2 tw-text-[20px]">
                    {article.title}
                  </p>
                  <p className="tw-pb-2 tw-pl-2 tw-text-[10px]">
                    {article.author} -{' '}
                    {new Date(article.date).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
          <Pagination currentPage={page} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}
