import fs from "fs";
import path from "path";

async function readme() {
  const contents = await fs.readFileSync(
    path.join(process.cwd(), "/README.md")
  );
  return contents.toString("utf-8");
}

export default async function Fancy() {
  const contents = await readme();
  return <>{contents}</>;
}
