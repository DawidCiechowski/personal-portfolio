import React from "react";
import Link from "next/link";
import { getArticles } from "./getArticles";

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const PAGE_SIZE = 12;

export default async function ArticlePage({ searchParams }: BlogPageProps) {
  const page = parseInt(searchParams.page || "1", 10);

  const { articles, totalPages } = await getArticles(page, PAGE_SIZE);

  return (
    <div className="tw-px-[12%] tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-8">
      <h1>Articles</h1>
      <ul className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-x-4 tw-gap-y-6 tw-rounded-xl tw-shadow-glow-md">
        {articles.map((article) => (
          <Link
            key={article._id}
            className="tw-border-solid tw-border-main-color tw-border-2"
            href={`/blog/${article._id}`}>
            <p>
              {article.title}
            </p>
            <p>
              {article.author} - {new Date(article.date).toLocaleDateString()}
            </p>
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
    <div>
      {currentPage > 1 && (
        <Link href={`/blog?page=${currentPage - 1}`}>Previous</Link>
      )}
      <span>
        {" "}
        Page {currentPage} of {totalPages}{" "}
      </span>
      {currentPage < totalPages && (
        <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>
      )}
    </div>
  );
}
