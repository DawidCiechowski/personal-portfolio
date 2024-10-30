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
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <Link href={`/blog/${article._id}`}>{article.title}</Link>
            <p>
              {article.author} - {new Date(article.date).toLocaleDateString()}
            </p>
          </li>
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
        <Link href={`/articles?page=${currentPage - 1}`}>Previous</Link>
      )}
      <span>
        {" "}
        Page {currentPage} of {totalPages}{" "}
      </span>
      {currentPage < totalPages && (
        <Link href={`/articles?page=${currentPage + 1}`}>Next</Link>
      )}
    </div>
  );
}
