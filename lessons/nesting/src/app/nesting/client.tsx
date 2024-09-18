"use client";

export function ClientComponent({ serverComponent }: { serverComponent: React.ReactNode }) {
  console.log("Component: Client");
  return (
    <div style={{ background: "lightblue" }}>
      <div>Client Component</div>
      <div style={{ background: "lightgray", margin: "8px 0px 0px 8px" }}>
        {serverComponent}
      </div>
    </div>
  );
}
