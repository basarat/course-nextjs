"use client";

import { ClientComponent } from "../ui/client";
import { UnmarkedComponent } from "../ui/unmarked";

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
