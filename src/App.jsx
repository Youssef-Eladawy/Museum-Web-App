import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import ConfirmBookingPage from "./pages/ConfirmBookingPage";
import ProtectedRoute from "../ProtectedRoute";
import Login from "./pages/Login";
import UserLayout from "./components/UserLayout";
import Profile from "./pages/user/Profile";
import Bookings from "./pages/user/Bookings";
import SignUp from "./pages/SignUp";
import AdminRoute from "../ProtectedAdminRoute";
import AdminLayout from "./components/AdminLayout";
import Unauthorized from "./pages/unauthorized";
import Tours from "./pages/Tours";
import Users from "./pages/admin/Users";
import ManageBookings from "./pages/admin/Bookings";
import Contact from "./pages/Contact";
import Subscribe from "./components/Home_Sections/Subscribe";
import Footer from "./components/Home_Sections/Footer";
import DestinationPage from "./pages/Destination";
import TestomonialPage from "./pages/Testomonial";
import GuidesPage from "./pages/Guides";
import AboutUs from "./pages/AboutUs";
import GalleryPage from "./pages/Gallery";
import OurServicesPage from "./pages/OurServices";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/tours/:tourId" element={<Tour />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/tours" element={<Tours />} />

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/testimonial" element={<TestomonialPage />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Protected Confirming */}
          <Route
            path="/confirmBooking/:tourId"
            element={
              <ProtectedRoute>
                <ConfirmBookingPage />
              </ProtectedRoute>
            }
          />

          {/* Protected User Routes */}
          <Route
            path="user"
            element={
              <ProtectedRoute>
                <UserLayout />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="bookings" element={<Bookings />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route path="bookings" element={<ManageBookings />} />
            <Route path="tours" element={<h2>tours</h2>} />
            <Route path="users" element={<Users />} />
          </Route>

          {/* <Route path="/tours" element={<Tours />} />
            
            
            <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        <Subscribe />
        <Footer />
      </BrowserRouter>

      <Toaster
        position="bottom-right"
        gutter={16}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 4000,
            style: {
              fontSize: "15px",
              maxWidth: "420px",
              padding: "14px 22px",
              backgroundColor: "var(--color-light)",
              color: "var(--color-primary)",
            },
          },
          error: {
            duration: 6000,
            style: {
              fontSize: "15px",
              maxWidth: "420px",
              padding: "14px 22px",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-light)",
            },
          },
          style: {
            fontFamily: "'Roboto', sans-serif",
            borderRadius: "8px",
            boxShadow: "0 2px 15px rgba(0, 0, 0, 0.15)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
