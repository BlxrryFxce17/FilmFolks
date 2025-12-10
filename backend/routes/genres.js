import express from "express";
import { getFromTMDB } from "../utils/tmdb.js";
const router = express.Router();

// Movie genres
router.get("/", async (req, res) => {
  try {
    const data = await getFromTMDB("/genre/movie/list", { language: "en-US" });
    res.json(data);
  } catch (e) {
    console.error("movie genres error:", e?.response?.data || e.message);
    res.status(500).json({ error: "Failed to fetch movie genres" });
  }
});

// TV genres
router.get("/tv", async (req, res) => {
  try {
    const data = await getFromTMDB("/genre/tv/list", { language: "en-US" });
    res.json(data);
  } catch (e) {
    console.error("TV genres error:", e?.response?.data || e.message);
    res.status(500).json({ error: "Failed to fetch TV genres" });
  }
});

export default router;
