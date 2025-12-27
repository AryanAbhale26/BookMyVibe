"use client";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
function darkenColor(color, amount) {
  const colorWithoutHash = color.replace("#", "");
  const num = parseInt(colorWithoutHash, 16);
  const r = Math.max(0, (num >> 16) - amount * 255);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - amount * 255);
  const b = Math.max(0, (num & 0x0000ff) - amount * 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

const DynamicExpPage = () => {
  const params = useParams();
  const router = useRouter();
  const { user } = useUser();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Fetch event details
  const { data: event, isLoading } = useConvexQuery(api.events.getEventBySlug, {
    slug: params.slug,
  });

  // Check if user is already registered
  const { data: registration } = useConvexQuery(
    api.registrations.checkRegistration,
    event?._id ? { eventId: event._id } : "skip"
  );

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: event.description.slice(0, 100) + "...",
          url: url,
        });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleRegister = () => {
    if (!user) {
      toast.error("Please sign in to register");
      return;
    }
    setShowRegisterModal(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  if (!event) {
    notFound();
  }

  const isEventFull = event.registrationCount >= event.capacity;
  const isEventPast = event.endDate < Date.now();
  const isOrganizer = user?.id === event.organizerId;
  return <div>DynamicExpPage</div>;
};

export default DynamicExpPage;
