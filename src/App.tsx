import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MediaPage from "./pages/MediaPage/MediaPage";
import { ROUTES } from "./shared/router/routes";
import ScrollToTop from "./shared/router/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.MEDIA_PAGE} element={<MediaPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
