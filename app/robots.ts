import type { MetadataRoute } from "next";

// Search and AI crawlers are explicitly welcome so the site can be cited in
// Google, ChatGPT, Perplexity, Claude and Gemini answers.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" }
    ],
    sitemap: "https://www.dalygrowthmedia.com/sitemap.xml",
    host: "https://www.dalygrowthmedia.com"
  };
}
