import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    imageUrl: v.optional(v.string()),

    hasCompletedOnboarding: v.boolean(),
    location: v.optional(
      v.object({
        city: v.string(),
        state: v.optional(v.string()),
        country: v.string(),
      })
    ),

    interests: v.optional(v.array(v.string())),

    freeEventsCreated: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
  events: defineTable({
    title: v.string(),
    description: v.string(),
    slug: v.string(),
    //Organizer
    organizerId: v.id("users"),
    organizerName: v.string(),
    // Event details
    category: v.string(),
    tags: v.array(v.string()),
    //Date&time
    startDate: v.number(),
    endDate: v.number(),
    timeZone: v.string(),

    // Location
    locationType: v.union(v.literal("physical"), v.literal("online")),
    venue: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.string(),
    state: v.optional(v.string()),

    // Capacity & Ticketing
    capacity: v.number(),
    ticketType: v.union(v.literal("free"), v.literal("paid")),
    ticketPrice: v.optional(v.number()), // Paid at event offline
    ticketCount: v.optional(v.number()), // Paid at event offline
    registrationCount: v.number(),
    // customization
    coverImage: v.optional(v.string()),
    themeColor: v.optional(v.string()),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_organizer", ["organizerId"])
    .index("by_category", ["category"])
    .index("by_start_date", ["startDate"])
    .index("by_slug", ["slug"])
    .searchIndex("search_title", { searchField: "title" }),
  registrations: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),

    //Attendee info
    attendeeName: v.string(),
    attendeeEmail: v.string(),
    //Or
    qrCode: v.string(),
    //Check-in
    checkedIn: v.boolean(),
    checkedInAt: v.optional(v.number()),
    status: v.union(v.literal("confirmed"), v.literal("cancelled")),
    registerAt: v.number(),
  })
    .index("by_event", ["eventId"])
    .index("by_user", ["userId"])
    .index("by_event_user", ["eventId", "userId"])
    .index("by_qr_code", ["qrCode"]),
});
