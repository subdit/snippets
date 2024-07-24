import Image from 'next/image';
import { db } from '@/app/db';

// Mark async function to await for data from server component
// Make an HTTP for outside third party but we use directly access to a database to get data.

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map(snippet => {
    return (
      <div key={snippet.id}>
        {snippet.title}
        <p>{snippet.code}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Home Page Snippet Code</h2>
      <div>{renderSnippets}</div>
    </div>
  );
}
