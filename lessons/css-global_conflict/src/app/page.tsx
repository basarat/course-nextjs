import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/new">NEW</Link>
      <br />
      <Link href="/old">OLD</Link>
    </>
  );
}
