import { defineType, defineField } from "sanity";

export default defineType({
  name: "day",
  title: "Day",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "conference",
      title: "Conference",
      type: "reference",
      to: [{ type: "conference" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
    },
  },
});