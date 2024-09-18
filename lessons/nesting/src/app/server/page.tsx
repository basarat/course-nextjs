import { UnmarkedComponent } from "../ui/unmarked";
import { ClientComponent } from "../ui/client";
import { ServerComponent } from "../ui/server";

export default function ServerPage() {
  console.log("Page: Server");
  return (
    <>
      <h1>Server Page</h1>
      <ClientComponent />
      <UnmarkedComponent />
      <ServerComponent />
    </>
  );
}
