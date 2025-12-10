import express from "express";
import { getFromTMDB } from "../utils/tmdb.js";

const router = express.Router();

// ✅ Popular TV Shows
router.get("/popular", async (req, res) => {
  try {
    const { page = 1, language = "all", year, genre } = req.query;
    const params = {
      page,
      include_adult: false,
      sort_by: "popularity.desc",
      language: "en-US",
    };
    if (language !== "all") params.with_original_language = language;
    if (genre) params.with_genres = genre;
    if (year) params.first_air_date_year = year;

    const data = await getFromTMDB("/discover/tv", params);
    res.json(data);
  } catch (err) {
    console.error("❌ TV Popular Error:", err.message);
    res.status(500).json({ error: "Failed to fetch popular TV shows" });
  }
});

// ✅ Trending TV Shows
router.get("/trending", async (req, res) => {
  try {
    const data = await getFromTMDB("/trending/tv/week");
    res.json(data);
  } catch (err) {
    console.error("❌ TV Trending Error:", err.message);
    res.status(500).json({ error: "Failed to fetch trending TV shows" });
  }
});

// ✅ Top Rated TV Shows
router.get("/toprated", async (req, res) => {
  try {
    const data = await getFromTMDB("/tv/top_rated", { language: "en-US", page: 1 });
    res.json(data);
  } catch (err) {
    console.error("❌ TV Top Rated Error:", err.message);
    res.status(500).json({ error: "Failed to fetch top-rated TV shows" });
  }
});

// ✅ TV Details
router.get("/:id", async (req, res) => {
  try {
    const data = await getFromTMDB(`/tv/${req.params.id}`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TV Details Error:", err.message);
    res.status(500).json({ error: "Failed to fetch TV details" });
  }
});

// ✅ TV Videos (trailers)
router.get("/:id/videos", async (req, res) => {
  try {
    const data = await getFromTMDB(`/tv/${req.params.id}/videos`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TV Videos Error:", err.message);
    res.status(500).json({ error: "Failed to fetch TV videos" });
  }
});

// ✅ TV Reviews
router.get("/:id/reviews", async (req, res) => {
  try {
    const data = await getFromTMDB(`/tv/${req.params.id}/reviews`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TV Reviews Error:", err.message);
    res.status(500).json({ error: "Failed to fetch TV reviews" });
  }
});

// ✅ Season Videos
router.get("/:id/season/:seasonNumber/videos", async (req, res) => {
  try {
    const { id, seasonNumber } = req.params;
    const data = await getFromTMDB(`/tv/${id}/season/${seasonNumber}/videos`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TV Season Videos Error:", err.message);
    res.status(500).json({ error: "Failed to fetch season videos" });
  }
});

// ✅ Episode Videos
router.get("/:id/season/:seasonNumber/episode/:episodeNumber/videos", async (req, res) => {
  try {
    const { id, seasonNumber, episodeNumber } = req.params;
    const data = await getFromTMDB(`/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}/videos`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TV Episode Videos Error:", err.message);
    res.status(500).json({ error: "Failed to fetch episode videos" });
  }
});

export default router;
