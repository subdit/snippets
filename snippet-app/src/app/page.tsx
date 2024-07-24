import Image from 'next/image';
import { db } from '@/app/db';
import Link from 'next/link';

// Mark async function to await for data from server component
// Make an HTTP for outside third party but we use directly access to a database to get data.

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map(snippet => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className='flex justify-between items-center p-2 border rounded'>
        <div key={snippet.id}>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <h1 className=' text-2xl  font-bold flex justify-center m-4'>
        Home Page Snippet
      </h1>
      <div className='flex m-2 justify-between items-center'>
        <h2 className='text-xl font-bold'>Snippet</h2>
        <Link href='/snippets/new' className='border p-2 rounded'>
          New
        </Link>
      </div>

      <div className='flex flex-col gap-2'>{renderSnippets}</div>
    </div>
  );
}
