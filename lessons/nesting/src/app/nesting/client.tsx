"use client";

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log("Component: Client");
  return (
    <div style={{ background: 'lightblue' }}>
      <div>Client Component</div>
      <div style={{ background: "lightgray", margin: "8px 0px 0px 8px" }}>
        {children}
      </div>
    </div>
  );
}
