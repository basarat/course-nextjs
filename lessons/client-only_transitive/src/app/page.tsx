import dynamic from "next/dynamic";

const ClientOnlyRoot = dynamic(() => import("./ClientOnlyRoot"), { ssr: false });

export default function Home() {
  return (
    <>
      <ClientOnlyRoot />
    </>
  );
}
