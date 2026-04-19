// Office location coordinates
// Location: https://maps.app.goo.gl/5NY6bhTkdhAKxnBP7 (Temporary)
const OFFICE_LOCATION = {
  latitude: 15.841917,
  longitude: 76.727444
};

// Radius in meters to consider "at office"
const OFFICE_RADIUS = 100; // 100 meters

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in meters
 */
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export interface LocationCheckResult {
  isAtOffice: boolean;
  distance?: number;
  accuracy?: number;
  error?: string;
  permissionDenied?: boolean;
  coords?: {
    latitude: number;
    longitude: number;
  };
}

/**
 * Check if user is currently at office location
 */
export async function checkIfAtOffice(): Promise<LocationCheckResult> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        isAtOffice: false,
        error: 'Geolocation is not supported by your browser'
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Accuracy Check: If accuracy radius > geofence radius (100m), block it.
        if (position.coords.accuracy > OFFICE_RADIUS) {
            resolve({
                isAtOffice: false,
                accuracy: position.coords.accuracy,
                error: 'Unable to verify your location accurately. Please try again.'
            });
            return;
        }

        const distance = calculateDistance(
          position.coords.latitude,
          position.coords.longitude,
          OFFICE_LOCATION.latitude,
          OFFICE_LOCATION.longitude
        );

        resolve({
          isAtOffice: distance <= OFFICE_RADIUS,
          distance: Math.round(distance),
          accuracy: position.coords.accuracy,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      },
      (error) => {
        let errorMessage = 'Unable to verify your location. Please try again.';
        let permissionDenied = false;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location permission denied';
            permissionDenied = true;
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out';
            break;
        }

        resolve({
          isAtOffice: false,
          error: errorMessage,
          permissionDenied
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}

/**
 * Format distance for display
 */
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${meters}m away`;
  }
  return `${(meters / 1000).toFixed(1)}km away`;
}