"use client";

import { UnmarkedComponent } from "../ui/unmarked";
import { ClientComponent } from "../ui/client";
import { ServerComponent } from "../ui/server";

export default function ClientPage() {
  console.log("Page: Client");
  return (
    <>
      <h1>Client Page</h1>
      <ClientComponent />
      <UnmarkedComponent />
    </>
  );
}
