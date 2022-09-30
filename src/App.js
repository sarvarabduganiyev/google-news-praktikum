import useAuth from "./hook/useAuth";
import PrivateApp from "./Private-app";
import PublicApp from "./Public-app";

function App() {
  const [token] = useAuth();
  if (token) {
    return <PrivateApp />;
  }
  return <PublicApp />;
}

export default App;
