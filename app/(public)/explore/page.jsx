"use client";

import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { useQuery } from "convex/react";
import React from "react";

const ExplorePage = () => {
  const data = useConvexQuery(api.events.getFeaturedEvents);
  console.log(data);
  return <div>ExplorePage</div>;
};

export default ExplorePage;
