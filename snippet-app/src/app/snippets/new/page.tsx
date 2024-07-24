import { redirect } from 'next/navigation';
import { db } from '@/app/db';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // Server Action
    'use server';

    // Check the user's imputs and make sure they're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // Create new record in the database
    await db.snippet.create({
      data: {
        title,
        code
      }
    });

    // Redirect to Home page to "Home Page"to list out all the record
    redirect('/');
  }

  return (
    <form>
      <h3 className='font-bold m-3'>Create Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            name='title'
            className='border-2 rounded p-2 w-full'
            id='title'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            className='border-2 rounded p-2 w-full'
            id='code'
          />
        </div>
        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  );
}
