import "./page.css";

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
      <div
        style={{
          width: "500px",
          background: "black",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "50px",
        }}
      >
        ⬅️ 500px ➡️
      </div>
      <div
        style={{
          width: "500px",
          background: "black",
          color: "white",
          textAlign: "center",
          fontSize: "25px",
          border: "20px solid green",
          padding: "20px",
        }}
      >
        ⬅️ 500px ➡️
        <br />
        (with 20px border + 20px padding)
      </div>
    </div>
  );
}
