'use client'

import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { configDotenv } from "dotenv";

const DefaultIcon = L.icon({
  iconUrl: iconUrl.src,
  iconRetinaUrl: iconRetinaUrl.src,
  shadowUrl: shadowUrl.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function ClickableMarker({ onSelect }: { onSelect: (lat: number, lng: number) => void }) {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng.lat, e.latlng.lng);
    },
  });

  return position === null ? null : <Marker position={position} />;
}

const MapPage = () => {
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isWater, setIsWater] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (lat: number, lng: number) => {
    setSelectedCoords({ lat, lng });
    setIsWater(null); // reset state when new point is chosen
  };

  const handleClose = () => {
    setSelectedCoords(null);
    setIsWater(null);
  };

  const checkWaterAndProceed = async () => {
    if (!selectedCoords) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://isitwater-com.p.rapidapi.com/?latitude=${selectedCoords.lat}&longitude=${selectedCoords.lng}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "", 
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
          },
        }
      );

      const data = await res.json();
      if (data.water) {
        setIsWater(true);
        alert("TODO: Find taxonomy logic here");
      } else {
        setIsWater(false);
      }
    } catch (error) {
      console.error("API error:", error);
      setIsWater(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Map */}
      <MapContainer
        center={[27.217008, 77.956881]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickableMarker onSelect={handleSelect} />
      </MapContainer>

      {/* Slide-in panel */}
      <div
        className={`absolute top-0 right-0 h-full w-1/3 bg-white/20 backdrop-blur-xl border-l border-slate-400/50 shadow-2xl z-[1000] transform transition-transform duration-300 ease-in-out ${
          selectedCoords ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition-colors z-10 p-2 rounded-full hover:bg-black/10"
          onClick={handleClose}
          aria-label="Close panel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full w-full p-6 space-y-6 overflow-y-auto">
          {/* Location Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span>📍</span>
              Location Selected
            </h2>
            {selectedCoords && (
              <div className="bg-slate-500/10 p-4 rounded-lg space-y-2 border border-slate-500/20">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium text-slate-600">Latitude:</span>
                  <span className="text-lg font-mono font-semibold text-slate-900">
                    {selectedCoords.lat.toFixed(6)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium text-slate-600">Longitude:</span>
                  <span className="text-lg font-mono font-semibold text-slate-900">
                    {selectedCoords.lng.toFixed(6)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Section */}
          <div className="pt-6 border-t border-slate-300/70">
            {loading && (
              <p className="text-slate-500 animate-pulse">Checking water/land...</p>
            )}

            {!loading && (
              <button
                onClick={checkWaterAndProceed}
                className="w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:opacity-90 transition transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/30"
              >
                🌊 Find Taxonomy in Ocean
              </button>
            )}

            {!loading && isWater === false && (
              <div className="mt-4 flex items-center gap-3 bg-red-100/80 text-red-800 font-medium p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Please select a water body.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
