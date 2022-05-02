import { MyRoutes } from "./frontend/MyRoutes";
import { Navbar, Footer } from "./frontend/Components";
function App() {
  return (
    <div className="app">
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
