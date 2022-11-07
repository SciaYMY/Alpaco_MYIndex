// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='flex item-center justify-between px-2 shadow'>
      <div>
        <h1 className='text-2xl font-bold'>Sico Index</h1>
        <BookmarkIcon className='w-9' />
      </div>
      <div>
        {/* <MagnifyingGlassCircleIcon className='w-4' /> */}
        <input type='text' placeholder='serch...' className='w-24 h-10' />
      </div>
    </nav>
  );
};
