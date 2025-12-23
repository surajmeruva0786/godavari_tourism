import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SightseeingPackages } from './components/SightseeingPackages';
import { AccommodationPackages } from './components/AccommodationPackages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { BookingModal } from './components/BookingModal';
import { useApp } from './utils/AppContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAdmin } = useApp();
    return isAdmin ? <>{children}</> : <Navigate to="/admin" replace />;
}

function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <SightseeingPackages />
            <AccommodationPackages />
            <Contact />
            <Footer />
            <BookingModal />
        </div>
    );
}

export function AppRouter() {
    const { isAdmin } = useApp();

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/admin"
                element={isAdmin ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin />}
            />
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
