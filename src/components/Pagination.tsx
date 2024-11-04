'use client';

import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="tw-pt-4 tw-pb-16">
      {currentPage > 1 && (
        <Link
          className="tw-text-[1.3rem] tw-text-black tw-bg-gradient-to-br tw-from-main-color tw-to-[#ac5a23] tw-rounded-md tw-font-semibold tw-px-4 tw-py-1 tw-shadow-glow-sm tw-mr-3"
          href={`/blog?page=${currentPage - 1}`}
        >
          Previous
        </Link>
      )}
      <span className="tw-text-white tw-text-[1.2rem]">
        Page <span className="tw-text-main-color">{currentPage}</span> of{' '}
        <span className="tw-text-text-color">{totalPages}</span>
      </span>
      {currentPage < totalPages && (
        <Link
          className="tw-text-[1.3rem] tw-w-auto tw-bg-gradient-to-br tw-from-main-color tw-to-[#ac5a23] tw-text-black tw-rounded-md tw-font-semibold tw-px-4 tw-py-1 tw-shadow-glow-sm tw-ml-3"
          href={`/blog?page=${currentPage + 1}`}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
