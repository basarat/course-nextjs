import dynamic from "next/dynamic";

const WindowWidth = dynamic(() => import("./WindowWidth"), { ssr: false });

export default function Home() {
  return (
    <>
      <WindowWidth />
    </>
  );
}
