import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "@/components/sharedstyles";
import Cards from "@/components/cards";

export default function Home({ repo }: { repo: { stargazers_count: number } }) {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Next repo stars: <CodeTag>{repo.stargazers_count}</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  );
}

export const runtime = "experimental-edge";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}
