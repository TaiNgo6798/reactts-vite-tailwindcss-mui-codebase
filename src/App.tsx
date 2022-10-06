import { KeycloakProvider } from "./auth/keycloak";
import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <KeycloakProvider>
      <div className="app min-h-screen bg-blue-50">
        <Header />
        <main className="px-5 sm:px-10 xl:px-20">
          <Home />
        </main>
      </div>
    </KeycloakProvider>
  );
}

export default App;
