import fs from 'fs';

export default async function Home() {
  return (
    <pre>
      {await fs.promises.readFile('src/app/page.tsx', 'utf-8')}
    </pre>
  );
}
