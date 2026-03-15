import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { PhilosophySection } from "./components/philosophy-section";
import { FacilitiesSection } from "./components/facilities-section";
import { EventsSection } from "./components/events-section";
import { WorksSection } from "./components/works-section";
import { InstagramSection } from "./components/instagram-section";
import { FooterSection } from "./components/footer-section";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { PostEditor } from "./pages/admin/PostEditor";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <FacilitiesSection />
        <EventsSection />
        <WorksSection />
        <InstagramSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/posts/new"
          element={
            <ProtectedRoute>
              <PostEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/posts/:id/edit"
          element={
            <ProtectedRoute>
              <PostEditor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
