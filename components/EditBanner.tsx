import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

interface EditBannerProps {
  ad: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedAd: any) => void;
  onClose: () => void;
}

const EditBanner: React.FC<EditBannerProps> = ({ ad, onSave, onClose }) => {
  const [title, setTitle] = useState(ad.title);
  const [description, setDescription] = useState(ad.description);
  const [cta, setCta] = useState(ad.cta);
  const [image, setImage] = useState(ad.image);
  const [background, setBackground] = useState(ad.background);

  const handleSave = () => {
    onSave({ ...ad, title, description, cta, image, background });
    onClose();
  };

  return (
    <Card className="fixed bottom-0 left-0 right-0 bg-white p-5 shadow-md z-50">
      <CardHeader>
        <CardTitle>Edit Ad Banner</CardTitle>
        <CardDescription>
          Update the details of the ad banner below and save your changes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="cta">CTA</Label>
            <Input
              type="text"
              id="cta"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              placeholder="CTA"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="background">Background URL</Label>
            <Input
              type="text"
              id="background"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              placeholder="Background URL"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button onClick={handleSave} variant="default">
            Save
          </Button>
          <Button onClick={onClose} variant="default">
            Cancel
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EditBanner;
