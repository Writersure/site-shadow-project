
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetail from "./pages/CaseStudyDetail";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AdSense when the app loads
    try {
      if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
        window.adsbygoogle.push({
          google_ad_client: "ca-pub-XXXXXXXXXXXXXXXX", // Replace with your actual AdSense publisher ID
        });
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
