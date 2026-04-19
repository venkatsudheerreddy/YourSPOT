import React, { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { AuthScreen } from "./components/AuthScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CalendarScreen } from "./components/CalendarScreen";
import { TimeSelectionScreen } from "./components/TimeSelectionScreen";
import { SeatSelectionScreen } from "./components/SeatSelectionScreen";
import { BookingConfirmationScreen } from "./components/BookingConfirmationScreen";
import { MyBookingsScreen } from "./components/MyBookingsScreen";
// import { CheckInScreen } from "./components/CheckInScreen"; // Removed
import { SettingsScreen } from "./components/SettingsScreen";
import { DirectionScreen } from "./components/DirectionScreen";
import { LayoutScreen } from "./components/LayoutScreen";
import { DesktopLayout } from "./components/DesktopLayout";
import { FaviconHandler } from "./components/FaviconHandler";
import { TodaysMenuScreen } from "./components/TodaysMenuScreen";
import { BottomNavigation } from "./components/BottomNavigation";
import { MenuScreen } from "./components/MenuScreen";

type Screen =
  | "home"
  | "calendar"
  | "time"
  | "seats"
  | "confirmation"
  | "bookings"
  | "settings"
  | "direction"
  | "layout"
  | "lunch"
  | "menu";

interface BookingData {
  id?: string; // Reservation ID
  seatId?: string;
  seat: string;
  zone: string;
  date: string;
  time: string;
}

export default function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>("user");
  
  const isAdmin = userRole === "admin" || userRole === "super_admin";
  const isSuperAdmin = userRole === "super_admin";

  // Initialize screen from path or default to home
  const getScreenFromPath = (): Screen => {
    const path = window.location.pathname.replace(/^\//, "");
    if (path === "") return "home";

    const validScreens: Screen[] = [
      "home",
      "calendar",
      "time",
      "seats",
      "confirmation",
      "bookings",
      "settings",
      "lunch",
      "menu",
    ];
    
    if (validScreens.includes(path as Screen)) return path as Screen;
    return "home";
  };

  const [currentScreen, setCurrentScreen] = useState<Screen>(getScreenFromPath());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [currentBooking, setCurrentBooking] = useState<BookingData | null>(null);
  const [nextBooking, setNextBooking] = useState<BookingData | undefined>(undefined);
  const [viewingBooking, setViewingBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    // Initial session load
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
      if (data.session?.user) {
        checkUserRole(data.session.user.id);
      }
    });

    supabase.auth.getUser();

    // Listen for future auth changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session?.user) {
          checkUserRole(session.user.id);
        } else {
          setUserRole("user");
        }
        if (event === "SIGNED_OUT") {
          setCurrentScreen("home");
          window.history.replaceState({}, "", "/");
        }
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  const checkUserRole = async (userId: string) => {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();
    
    setUserRole(profile?.role || "user");
  };

  const navigateTo = (screen: string) => {
    if (currentScreen === screen) return;
    const url = `/${screen}`;
    window.history.pushState({}, "", url);
    setCurrentScreen(screen as Screen);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentScreen(getScreenFromPath());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (screen: string) => {
    navigateTo(screen);
  };

  // ... Handlers ...
  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    handleNavigate("time");
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    handleNavigate("seats");
  };

  const handleBookSeat = (seat: string, zone: string, seatId?: string) => {
    setCurrentBooking({ seatId, seat, zone, date: selectedDate, time: selectedTime });
    handleNavigate("confirmation");
  };

  const handleViewBooking = (booking: BookingData) => {
    setViewingBooking(booking);
    handleNavigate("direction");
  };

  const handleBookingComplete = () => {
    if (!isAdmin) setSelectedDate("");
    setSelectedTime("");
    setCurrentBooking(null);
    handleNavigate("home");
  };

  const handleClose = () => {
    setSelectedDate("");
    setSelectedTime("");
    setCurrentBooking(null);
    handleNavigate("home");
  };
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // Identify if we are on a main tab
  const isMainTab = ["home", "lunch", "settings"].includes(currentScreen);

  if (loading) return <div className="min-h-screen bg-white" />;

  if (!session || !session.user.email_confirmed_at) {
    return (
      <AuthScreen
        unconfirmedEmail={session?.user?.email}
        onLoginSuccess={() => {
          supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setCurrentScreen("home");
            window.history.replaceState({}, "", "/");
          });
        }}
      />
    );
  }

  const userName = session.user.user_metadata?.full_name || session.user.email?.split("@")[0] || "User";

  return (
    <DesktopLayout currentScreen={currentScreen} onNavigate={handleNavigate} nextBooking={nextBooking}>
      <FaviconHandler />
      
      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative flex flex-col h-full">
        {currentScreen === "home" && (
          <HomeScreen
            onNavigate={handleNavigate}
            userName={userName}
            userId={session.user.id}
            onViewBooking={handleViewBooking}
            isAdmin={isAdmin}
          />
        )}

        {currentScreen === "lunch" && (
          <TodaysMenuScreen bypassUnderConstruction={isAdmin} isAdmin={isAdmin} />
        )}

        {currentScreen === "settings" && (
          <SettingsScreen
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            isAdmin={isAdmin}
          />
        )}

        {currentScreen === "menu" && (
          <MenuScreen onBack={() => handleNavigate("settings")} />
        )}

        {/* Sub-screens (Full Screen / Modal-like) */}
        {currentScreen === "calendar" && (
          <CalendarScreen
            onBack={() => handleNavigate("home")}
            onClose={handleClose}
            onSelectDate={handleSelectDate}
            isAdmin={isAdmin}
            selectedDate={selectedDate}
          />
        )}

        {currentScreen === "time" && (
          <TimeSelectionScreen
            selectedDate={selectedDate}
            onBack={() => handleNavigate("calendar")}
            onClose={handleClose}
            onSelectTime={handleSelectTime}
          />
        )}

        {currentScreen === "seats" && (
          <SeatSelectionScreen
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onBack={() => handleNavigate("time")}
            onClose={handleClose}
            onBookSeat={handleBookSeat}
            userId={session.user.id}
            onViewBooking={handleViewBooking}
            isAdmin={isAdmin}
          />
        )}

        {currentScreen === "confirmation" && currentBooking && (
          <BookingConfirmationScreen
            seatId={currentBooking.seatId || ""}
            seatName={currentBooking.seat}
            zone={currentBooking.zone}
            date={currentBooking.date}
            time={currentBooking.time}
            onHome={handleBookingComplete}
            onViewBooking={handleViewBooking}
          />
        )}

        {currentScreen === "bookings" && (
          <MyBookingsScreen
            onBack={() => handleNavigate("home")}
            userId={session.user.id}
            onViewBooking={handleViewBooking}
          />
        )}

        {currentScreen === "direction" && viewingBooking && (
          <DirectionScreen
            booking={{
              seatId: viewingBooking.seat,
              zone: viewingBooking.zone,
              date: viewingBooking.date,
              time: viewingBooking.time,
            }}
            onClose={() => window.history.back()}
          />
        )}

        {currentScreen === "layout" && (
          <LayoutScreen
            onClose={() => handleNavigate("home")}
            isAdmin={isAdmin}
            userId={session.user.id}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      {isMainTab && (
        <BottomNavigation
          activeTab={currentScreen as "home" | "lunch" | "settings"}
          onNavigate={(tab) => handleNavigate(tab)}
        />
      )}
    </DesktopLayout>
  );
}
