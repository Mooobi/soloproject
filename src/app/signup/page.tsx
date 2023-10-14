'use client';
import styled from 'styled-components';
import Form from './Form';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function SignUp() {
  const { data: session } = useSession();

  if (session) {
    redirect('/');
  }

  return (
    <Container>
      <Form />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25rem;
  min-width: 20rem;
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 0.5rem;
`;
