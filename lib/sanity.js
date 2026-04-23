import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "icswe4a6",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
