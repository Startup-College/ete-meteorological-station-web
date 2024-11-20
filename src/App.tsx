import Footer from "./components/footer";
import Header from "./components/header";
import AppProvider from "./hooks";
import IndexRoutes from "./routes";
function App() {
  return (
    <AppProvider>
      <div className="min-h-screen antialiased text-pretty text-gray-950 font-sans w-full bg-dark-mode bg-no-repeat bg-cover">
        <Header />
        <div className="flex flex-1 min-h-[70vh] w-full">
          <IndexRoutes />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
