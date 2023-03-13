import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ff2ml47e",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-12",
});

export default client;
