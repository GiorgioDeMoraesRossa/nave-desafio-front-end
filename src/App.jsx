import Routes from "./routes";
import { AuthProvider } from "./contexts/authContext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
