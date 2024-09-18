import fs from "fs";

export async function ServerComponent() {
  console.log("Component: Server");
  return (
    <>
      <div>Server Component</div>
      <pre>{await fs.promises.readFile("README.md", "utf-8")}</pre>
    </>
  );
}
