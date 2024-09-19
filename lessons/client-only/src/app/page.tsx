import dynamic from "next/dynamic";

const WindowSize = dynamic(() => import("./WindowSize"), { ssr: false });

export default function Home() {
  return (
    <>
      <WindowSize />
    </>
  );
}
