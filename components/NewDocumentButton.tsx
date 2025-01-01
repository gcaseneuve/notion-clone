'use client';
import React, { useTransition } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { createNewDocument } from '@/actions/actions';
import { auth } from '@clerk/nextjs/server';

function NewDocumentButton() {
  // const { userId, redirectToSignIn } = await auth();
  // if (!userId) {
  //   redirectToSignIn();
  // }

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleCreateNewDocument = () => {
    startTransition(async () => {
      // Create a new document
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? 'Creating ...' : 'New Document'}
    </Button>
  );
}

export default NewDocumentButton;