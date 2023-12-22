import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Services from "./pages/service/Services";
import Project from "./pages/project/Project";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Team from "./pages/team/Team";
import ServiceSingle from "./pages/service-small/ServiceSingle";
import BlogSmall from "./components/blog-small/BlogSmall";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceSingle" element={<ServiceSingle />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogSmall" element={<BlogSmall />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer />
  </>
);
