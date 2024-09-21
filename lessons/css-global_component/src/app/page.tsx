const commonStyle: React.CSSProperties = {
  width: "500px",
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <div style={commonStyle}>⬅️ 500px ➡️</div>
      <div
        style={{
          ...commonStyle,
          border: "50px solid green",
          padding: "50px",
        }}
      >
        <span>⬅️ 500px ➡️</span>
        <span style={{ fontSize: "25px" }}>(with border + padding)</span>
      </div>
    </div>
  );
}
