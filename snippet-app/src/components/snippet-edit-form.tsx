'use client';

import { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditFormPage({ snippet }: SnippetEditFormProps) {
  return <div> Client component has snippet with title {snippet.title}</div>;
}
