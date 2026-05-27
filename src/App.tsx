import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="app-root-container bg-white min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

/* Add to App.css (or global CSS if not present):

.app-root-container {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  font-family: 'Inter', 'Poppins', Arial, sans-serif;
}

section {
  margin-bottom: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', 'Inter', Arial, sans-serif;
  font-weight: 700;
  color: #181818;
  margin-top: 0;
  margin-bottom: 1.2em;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 2.8rem;
  line-height: 1.1;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

@media (max-width: 700px) {
  .app-root-container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  section {
    margin-bottom: 2.5rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.3rem;
  }
}
*/
