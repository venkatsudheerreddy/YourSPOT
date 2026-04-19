import React, { useState, useEffect } from "react";
import { MapPin, CheckCircle2, Navigation } from "lucide-react";
import { supabase } from "../utils/supabaseClient";

import { projectId } from "../utils/supabase/info";

interface AdminReservationCardProps {
  reservation: {
    id: string;
    seat_id: string;
    seat_name: string;
    office_name: string; // Assuming we can get this or hardcode "Headquarters"
    status: "pending" | "confirmed";
  };
  onCheckInSuccess: () => void;
}

const OFFICE_LOCATION = {
  lat: 17.46663,
  lng: 78.363136,
  radius: 50, // meters
};

// Office
// lat: 17.442915,
// lng: 78.374002,

export function AdminReservationCard({
  reservation,
  onCheckInSuccess,
}: AdminReservationCardProps) {
  const [distance, setDistance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Local Check-in State (UI/Session Level)
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const { data, error } = await supabase
          .from("reservations")
          .select("checked_in")
          .eq("id", reservation.id)
          .single();

        if (error) {
          throw error;
        }

        if (data?.checked_in) {
          setIsCheckedIn(true);
        } else {
          setIsCheckedIn(false);
        }
      } catch (e) {
        console.error("Failed to fetch check-in status:", e);
      }
    };

    checkStatus();
  }, [reservation.id]);

  // Calculate distance using Haversine formula
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) *
        Math.cos(φ2) *
        Math.sin(Δλ / 2) *
        Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  useEffect(() => {
    if (isCheckedIn) return;

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // Geolocation requires a secure context (HTTPS) in most modern browsers
    if (window.isSecureContext === false) {
      setError(
        "Location requires a secure (HTTPS) connection.",
      );
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const dist = calculateDistance(
          position.coords.latitude,
          position.coords.longitude,
          OFFICE_LOCATION.lat,
          OFFICE_LOCATION.lng,
        );
        setDistance(dist);
        setError(null);
      },
      (err: any) => {
        // Handle cases where err object might be non-standard or empty in logs
        const code = err.code;
        const message = err.message;

        let errorMessage =
          "Location access needed for check-in";

        if (code === 1) {
          // PERMISSION_DENIED
          // Often due to iframe restrictions in Figma/Preview.
          // We suppress console warnings here as this is a known environment constraint.
          errorMessage =
            "Location disabled by browser policy. Using manual mode.";
        } else {
          console.error("Geolocation error details:", {
            code,
            message,
            err,
          });
          if (code === 2) {
            // POSITION_UNAVAILABLE
            errorMessage =
              "Location unavailable. Try moving to a better signal area.";
          } else if (code === 3) {
            // TIMEOUT
            errorMessage =
              "Location request timed out. Retrying...";
          } else if (message) {
            errorMessage = `Location error: ${message}`;
          } else {
            errorMessage =
              "Unable to determine location. Please check browser permissions.";
          }
        }

        setError(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10000,
      },
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [isCheckedIn]);

  const handleCheckIn = async () => {
    setLoading(true);

    try {
      // 1. Update reservation directly in DB
      const { error } = await supabase
        .from("reservations")
        .update({
          checked_in: true,
          checked_in_at: new Date().toISOString(),
          status: "confirmed",
        })
        .eq("id", reservation.id);

      if (error) {
        throw error;
      }

      // 2. Update UI state
      setIsCheckedIn(true);

      // (Optional) keep for instant UX, but no longer required
      localStorage.setItem(
        `checked_in_${reservation.id}`,
        "true",
      );

      // 3. Trigger refresh
      onCheckInSuccess();
    } catch (err: any) {
      console.error("Check-in error:", err);
      setError(err.message || "Failed to check in");
    } finally {
      setLoading(false);
    }
  };

  // Determine State
  const isInRange =
    distance !== null && distance <= OFFICE_LOCATION.radius;

  // 11 AM Check (Local time check for UI disabling, though server handles expiry)
  const now = new Date();
  const isTooLate = now.getHours() >= 23;

  if (isTooLate && !isCheckedIn) {
    // Logic for expiry should hide this card, but if it's still here, show nothing or expired state.
    // Based on requirements, the card shouldn't be shown if no record found (which implies expired/deleted).
    // But if standard "pending" record exists and it's past 11, we technically shouldn't allow check-in.
  }

  return (
    <div className="bg-card w-full rounded-[24px] p-6 shadow-[var(--shadow-card)] border border-primary/20 flex flex-col gap-4 mb-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <div>
          <h3 className="title-medium-heavy text-foreground">
            {isCheckedIn ? "Checked In" : "Today's Reservation"}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="body-md-normal text-muted-foreground">
              {reservation.seat_name}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="body-md-normal text-muted-foreground">
              {reservation.office_name}
            </span>
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isCheckedIn
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-yellow-100 text-yellow-700 border border-yellow-200"
          }`}
        >
          {isCheckedIn ? "Confirmed" : "Pending Check-in"}
        </div>
      </div>

      {/* Location / Status Section */}
      <div className="bg-secondary/50 rounded-[16px] p-4 flex flex-col gap-3 z-10">
        {isCheckedIn ? (
          <div className="flex items-center gap-3 text-primary">
            <CheckCircle2 className="w-6 h-6" />
            <p className="body-md-heavy">
              Checked in successfully
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-full ${
                  isInRange
                    ? "bg-green-100 text-green-600"
                    : error
                      ? "bg-destructive/10 text-destructive"
                      : "bg-blue-100 text-blue-600"
                }`}
              >
                {isInRange ? (
                  <MapPin className="w-5 h-5" />
                ) : (
                  <Navigation className="w-5 h-5" />
                )}
              </div>
              <div>
                {error ? (
                  <p className="body-md-heavy text-destructive">
                    Location unavailable
                  </p>
                ) : distance === null ? (
                  <p className="body-sm-normal text-muted-foreground">
                    Locating...
                  </p>
                ) : isInRange ? (
                  <p className="body-md-heavy text-foreground">
                    You are at the office
                  </p>
                ) : (
                  <p className="body-md-heavy text-foreground">
                    {Math.round(distance)} meters away{" "}
                    <span className="text-muted-foreground font-normal">
                      from office
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            {!isTooLate && (
              <>
                {/* Normal Flow */}
                {isInRange && !error && (
                  <button
                    onClick={handleCheckIn}
                    disabled={loading}
                    className="mt-2 w-full bg-primary text-primary-foreground h-[48px] rounded-[12px] body-md-heavy active:scale-[0.98] transition-all shadow-[var(--shadow-glow)] flex items-center justify-center"
                  >
                    {loading ? "Checking in..." : "Check In"}
                  </button>
                )}

                {/* Error Flow - Manual Override */}
                {error && (
                  <div className="mt-2 flex flex-col gap-2">
                    <p className="text-destructive text-xs">
                      {error}
                    </p>
                    <button
                      onClick={handleCheckIn}
                      disabled={loading}
                      className="w-full bg-secondary text-secondary-foreground border border-border h-[48px] rounded-[12px] body-md-heavy active:scale-[0.98] transition-all flex items-center justify-center hover:bg-secondary/80"
                    >
                      {loading
                        ? "Checking in..."
                        : "Manual Check In"}
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
