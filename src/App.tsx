import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import GalleryAlbum from "./pages/GalleryAlbum";
import BecomeMember from "./pages/BecomeMember";
import Conference from "./pages/Conference";
import Newsletter from "./pages/Newsletter";
import GalleryVideos from "./pages/GalleryVideos";
import GalleryMedia from "./pages/GalleryMedia";
import Conference2026 from "./pages/Conference2026";
import Conference2025 from "./pages/Conference2025";
import Conference2024 from "./pages/Conference2024";
import EventDetail from "./pages/EventDetail";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:albumId" element={<GalleryAlbum />} />
            <Route path="/become-member" element={<BecomeMember />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/gallery-videos" element={<GalleryVideos />} />
            <Route path="/gallery-media" element={<GalleryMedia />} />
            <Route path="/conference-2026" element={<Conference2026 />} />
            <Route path="/conference-2025" element={<Conference2025 />} />
            <Route path="/conference-2024" element={<Conference2024 />} />
            <Route path="/events/:id" element={<EventDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
