'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ArticleHeaderProps {
  imageSrc: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  imageSrc,
  title,
  author,
  date,
  tags,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`tw-relative tw-w-screen tw-h-screen`}>
      <Image
        src={imageSrc}
        alt="Article Header Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className={`tw-z-0 tw-duration-150 ${isScrolled ? 'tw-opacity-0' : 'tw-opacity-100'}`}
      />

      <div
        className={`tw-absolute tw-inset-0 tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-white tw-bg-black tw-bg-opacity-50 tw-transition-opacity tw-duration-500 ${
          isScrolled ? 'tw-opacity-0' : 'tw-opacity-100'
        }`}
      >
        <h1 className="tw-text-[26px] md:tw-text-[34px] tw-font-bold tw-border-b-[2px] tw-rounded-lg tw-border-main-color tw-mb-4">
          {title}
        </h1>
        <p className="tw-text-[18px] md:tw-text-[22px] tw-mb-2">{`By ${author}`}</p>
        <p className="tw-text-[14px] md:tw-text-[16px]">{date}</p>
        {tags.length > 0 && (
          <div className="tw-text-[12px] md:tw-text-[14px] tw-text-slate-200 tw-flex tw-gap-x-2">
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleHeader;
