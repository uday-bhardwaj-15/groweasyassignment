"use client";
import { useState } from "react";
import AdBanner from "../components/AdBanner";
import adsData from "../data/ads.json";

const Home = () => {
  const [ads, setAds] = useState(adsData);

  const handleSave = (updatedAd: any) => {
    setAds(ads.map((ad) => (ad.id === updatedAd.id ? updatedAd : ad)));
  };

  return (
    <div className="p-5">
      {ads.map((ad) => (
        <AdBanner key={ad.id} ad={ad} onSave={handleSave} />
      ))}
    </div>
  );
};

export default Home;
