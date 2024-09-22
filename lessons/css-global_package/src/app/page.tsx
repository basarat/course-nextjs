const Column = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

const commonStyle: React.CSSProperties = {
  height: "300px",
  background: "black",
  color: "white",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",

  fontSize: "50px",
};

export default function Home() {
  return (
    <Column>
      <div
        style={{
          ...commonStyle,
          width: "500px",
        }}
      >
        ⬅️ 500px ➡️
      </div>
      <div
        style={{
          ...commonStyle,
          width: "500px",
          border: "50px solid green",
          padding: "50px",
        }}
      >
        ⬅️ 500px ➡️
      </div>
    </Column>
  );
}
