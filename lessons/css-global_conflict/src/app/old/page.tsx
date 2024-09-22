import Link from "next/link";
import { RedBlue } from "../legacy/RedBlue";

export default function Home() {
  return (
    <>
      <RedBlue />
      <Link href="/new">NEW</Link>
    </>
  );
}
