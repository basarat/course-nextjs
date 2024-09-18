import { ClientComponent } from './client';
import { ServerComponent } from './server';

export default function ServerPage() {
  console.log("Page: Server");
  return (
    <>
      <h1>Server Page</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </>
  );
}
