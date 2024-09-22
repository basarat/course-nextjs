import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="red">{`class="red"`}</div>
      <div className="blue">{`class="blue"`}</div>
      <Link href="/old">OLD</Link>
    </>
  );
}
