'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ArticleHeaderProps {
  imageSrc: string;
  title: string;
  author: string;
  date: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  imageSrc,
  title,
  author,
  date,
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

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`tw-relative tw-w-screen tw-h-screen`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Article Header Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className={`tw-z-0 tw-duration-150 ${isScrolled ? 'tw-opacity-0' : 'tw-opacity-100'}`}
      />

      {/* Overlay Content */}
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
      </div>
    </div>
  );
};

export default ArticleHeader;
