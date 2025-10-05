import Form from 'next/form';
import { SearchFormReset } from './SearchFormReset';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  query?: string | string[] | undefined;
  className?: string;
}

export const SearchForm: React.FC<Props> = (props) => {
  const { className, query, ...otherProps } = props;

  return (
    <Form action='/' className={cn('search-form', className)} {...otherProps}>
      <input
        type='text'
        className='search-input'
        placeholder='Search...'
        name='query'
        defaultValue={query}
      />

      <div className='flex gap-2'>
        {query && <SearchFormReset />}

        <button type='submit' className='search-btn'>
          <Search className='size-5' />
        </button>
      </div>
    </Form>
  );
};
