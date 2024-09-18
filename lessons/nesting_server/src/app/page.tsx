import { ServerComponent } from "./ui/server";
import { ClientComponent } from "./ui/client";
import { UnmarkedComponent } from "./ui/unmarked";

export default function ServerPage() {
  console.log("Page: Server");
  return (
    <>
      <h1>Server Page</h1>
      <ServerComponent />
      <ClientComponent />
      <UnmarkedComponent />
    </>
  );
}