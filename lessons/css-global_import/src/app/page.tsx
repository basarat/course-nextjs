export default function Home() {
  return (
    <div style={{ fontSize: "100px" }}>
      <div>Scroll Down 👇🏻</div>
      <FullPage />
      <div>Keep Going 🫰🏻</div>
      <FullPage />
      <div>Scroll Up 👆🏻</div>
    </div>
  );
}

const FullPage = () => <div style={{ height: "100vh" }} />;
