import useMode from "./hook/useMode";
import PrivateHome from "./pages/PrivateHome";

function PrivateApp() {
  const [darkMode] = useMode();
  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "initial" }
          : { backgroundColor: "rgba(10, 25, 41, 0.7)", color: "#ffffff" }
      }
    >
      <PrivateHome />
    </div>
  );
}

export default PrivateApp;
