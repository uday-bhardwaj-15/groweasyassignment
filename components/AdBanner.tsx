import React, { useState } from "react";
import EditBanner from "./EditBanner";
import { Button } from "./ui/button";

interface AdBannerProps {
  ad: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedAd: any) => void;
}

const AdBanner: React.FC<AdBannerProps> = ({ ad, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);

  return (
    <div
      className="bg-cover bg-center p-5 mb-5 rounded-md shadow-md relative"
      style={{ backgroundImage: `url(${ad.background})` }}
    >
      <img
        src={ad.image}
        alt={ad.title}
        className="w-24 h-24 object-cover mb-3 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{ad.title}</h2>
      <p className="text-gray-700 mb-2">{ad.description}</p>
      <h3 className="inline-block bg-black  p-1 text-white mb-3">{ad.cta}</h3>
      <div className="absolute top-5 right-5">
        <Button onClick={handleEdit} className="text-black p-2 rounded">
          Edit
        </Button>
      </div>
      {isEditing && (
        <EditBanner
          ad={ad}
          onSave={onSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default AdBanner;
