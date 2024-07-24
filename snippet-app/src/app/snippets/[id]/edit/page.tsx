import { db } from '@/app/db';
import { notFound } from 'next/navigation';
import SnippetEditFormPage from '@/components/snippet-edit-form';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id }
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditFormPage snippet={snippet} />
    </div>
  );
}
