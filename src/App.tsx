import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { useTheme } from './hooks/useTheme';
import { DashboardLayout } from './components/DashboardLayout';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { ToastContainer } from './components/ToastContainer';
import 'lenis/dist/lenis.css';

// Lazy load pages for bundle optimization
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const TopicPage = lazy(() => import('./pages/TopicPage').then(module => ({ default: module.TopicPage })));
const Favorites = lazy(() => import('./pages/Favorites').then(module => ({ default: module.Favorites })));
const Admin = lazy(() => import('./pages/Admin').then(module => ({ default: module.Admin })));

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ReactLenis root options={{ lerp: 0.18, smoothWheel: true }}>
      <BrowserRouter>
        <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topic/:topicId" element={<TopicPage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </DashboardLayout>
        <ToastContainer />
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
