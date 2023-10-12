import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styled from 'styled-components';
import SignButton from './SignButton';
import Button from './Button';

export default function Header() {
  const { data: session } = useSession();

  return (
    <Wrapper>
      <Container>
        <Link href='/'>CodrenForum</Link>
      </Container>
      <Container>
        <Link href='/about'>About</Link>
        {session ? (
          <Link href='/mypage'>MyPage</Link>
        ) : (
          <Link href='/signup'>
            <Button background='#686B3A' color='white'>
              SignUp
            </Button>
          </Link>
        )}
        <SignButton session={session} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 3.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid #bbbbbb;

  > :first-child {
    > :first-child {
      font-size: 1.25rem;
      font-weight: 800;
    }
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;