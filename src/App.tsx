import Header from "./components/header";
import AppProvider from "./hooks";
import IndexRoutes from "./routes";
function App() {
  return (
    <AppProvider>
      <div className="min-h-screen text-gray-950 font-sans w-full bg-dark-mode bg-no-repeat bg-cover">
        <Header />
        <IndexRoutes />
      </div>
    </AppProvider>
  );
}

export default App;
