import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { SearchForm } from '../../components/SearchForm';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import { auth } from '@/auth';

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.query;
  const params = { search: query || null };

  const session = await auth();

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <div>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch your startup, <br />
          connect with entrepreneurs and investors!
        </h1>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p>{query ? `Search Results for "${query}"` : 'All startups'}</p>

        <ul className='mt-t card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
