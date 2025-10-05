'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const SearchFormReset: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={cn('search-btn', className)} {...otherProps}>
      <Link href='/'>
        <X className='size-5' />
      </Link>
    </div>
  );
};
