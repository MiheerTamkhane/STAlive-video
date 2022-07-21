import { MyRoutes } from "./frontend/MyRoutes";
import { Navbar, Footer } from "./frontend/Components";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app">
      <Navbar />
      <MyRoutes />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#6d28d9",
            color: "#efefef",
          },
        }}
      />
    </div>
  );
}

export default App;
