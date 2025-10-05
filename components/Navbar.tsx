import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Navbar: React.FC<Props> = async (props) => {
  const { className, ...otherProps } = props;
  const session = await auth();

  return (
    <header className={`p-4 bg-white  ${className ?? ''}`} {...otherProps}>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo' width={150} height={60} />
        </Link>

        <div className='flex justify-between items-center gap-4 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>Create</Link>

              <form
                className='cursor-pointer'
                action={async () => {
                  'use server';

                  await signOut({ redirectTo: '/' });
                }}
              >
                <button
                  type='submit'
                  className='cursor-pointer text-secondary font-work-sans'
                >
                  Logout
                </button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form
              className='cursor-pointer'
              action={async () => {
                'use server';

                await signIn('github');
              }}
            >
              <button type='submit' className='cursor-pointer'>
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
