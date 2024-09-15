import fs from "fs";
import path from "path";

/** Normally in order to use this in the frontend you would need to expose it as an API */
async function readme() {
  const contents = await fs.readFileSync(
    path.join(process.cwd(), "/README.md")
  );
  return contents.toString("utf-8");
}

/** 
 * React Server Components or RSCs
 * allow you to use server functions in a server component with async/await
 */
export default async function Fancy() {
  const contents = await readme();
  return <>{contents}</>;
}
