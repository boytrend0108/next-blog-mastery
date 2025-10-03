'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface Props {
  className?: string;
}

export const SearchFormReset: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;

  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <div className={cn('search-btn', className)} {...otherProps}>
      <button className='search-button' onClick={reset}>
        <X className='size-5' />
      </button>
    </div>
  );
};
