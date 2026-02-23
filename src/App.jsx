import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import Courses from './components/Courses';
import Career from './pages/Career';
import Portfolio from './pages/Portfolio';
import EnquiryModal from './components/EnquiryModal';
import { ToastProvider } from './context/ToastProvider';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastProvider>
        <ScrollToTop />
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col min-h-screen font-sans text-slate-800 antialiased bg-white animate-fade-in-up">
            <Navbar />
            <EnquiryModal />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/career" element={<Career />} />

                {/* Course Routes - All pointing to generic CourseDetail for now */}
                <Route path="/course-detail" element={<CourseDetail />} />
                <Route path="/ad-full-stack" element={<CourseDetail />} />
                <Route path="/data-analytics" element={<CourseDetail />} />
                <Route path="/full-stack" element={<CourseDetail />} />
                <Route path="/graphics" element={<CourseDetail />} />
                <Route path="/web-design" element={<CourseDetail />} />
                <Route path="/digital-marketing" element={<CourseDetail />} />
                <Route path="/tally" element={<CourseDetail />} />
                <Route path="/python" element={<CourseDetail />} />
                <Route path="/django" element={<CourseDetail />} />
                <Route path="/java" element={<CourseDetail />} />
                <Route path="/react" element={<CourseDetail />} />
                <Route path="/angularjs" element={<CourseDetail />} />
                <Route path="/iot" element={<CourseDetail />} />
                <Route path="/advance-excel" element={<CourseDetail />} />
                <Route path="/olevel" element={<CourseDetail />} />
                <Route path="/ccc" element={<CourseDetail />} />

                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </ToastProvider>
    </Router>
  );
}

export default App;
