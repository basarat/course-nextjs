import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/server">Server Page</Link>
      <Link href="/client">Client Page</Link>
    </div>
  );
}
