import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qk59lf96",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
