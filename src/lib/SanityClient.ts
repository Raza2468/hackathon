import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: "v2023-06-22",
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITT_ACCESS_TOKEN,
    useCdn: true
})