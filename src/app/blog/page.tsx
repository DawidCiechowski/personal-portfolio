import React from 'react';
import Link from 'next/link';
import { getArticles } from './getArticles';
import Image from 'next/image';

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
      <ul className="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 md:tw-gap-x-8 tw-gap-y-6 ">
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
              className="-tw-z-10"
            />
            <div className="tw-relative tw-z-10 tw-bg-slate-800 tw-text-white tw-w-full">
              <p className="tw-pb-2 tw-pt-4 tw-pr-2 tw-pl-2">{article.title}</p>
              <p className="tw-pb-2 tw-pr-2">
                {article.author} - {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </ul>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="tw-pt-4 tw-pb-16">
      {currentPage > 1 && (
        <Link
          className={`tw-text-[1.3rem] tw-text-black tw-bg-gradient-to-br tw-from-main-color tw-to-[#ac5a23] tw-rounded-md tw-font-semibold tw-px-4 tw-py-1 tw-shadow-glow-sm tw-mr-3`}
          href={`/blog?page=${currentPage - 1}`}
        >
          Previous
        </Link>
      )}
      <span className="tw-text-white tw-text-[1.2rem]">
        {' '}
        Page <span className="tw-text-main-color">{currentPage}</span> of{' '}
        <span className="tw-text-text-color">{totalPages}</span>{' '}
      </span>
      {currentPage < totalPages && (
        <Link
          className={`tw-pb-16tw-text-[1.3rem] tw-w-[100vw] tw-bg-gradient-to-br tw-from-main-color tw-to-[#ac5a23] tw-text-black tw-rounded-md tw-font-semibold tw-px-4 tw-py-1 tw-shadow-glow-sm tw-ml-3`}
          href={`/blog?page=${currentPage + 1}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}
