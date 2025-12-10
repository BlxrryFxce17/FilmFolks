import express from "express";
import { getFromTMDB } from "../utils/tmdb.js";

const router = express.Router();

// GET /api/reviews/:type/:id - Movie/TV details
router.get("/:type/:id", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch details", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/credits - Cast/Crew
router.get("/:type/:id/credits", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/credits`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch credits", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/videos - Trailers & Videos
router.get("/:type/:id/videos", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/videos`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch videos", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/images - Images/Backdrops/Posters
router.get("/:type/:id/images", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/images`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch images", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/similar
router.get("/:type/:id/similar", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/similar`, { language: "en-US", page: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch similar", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/recommendations
router.get("/:type/:id/recommendations", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/recommendations`, { language: "en-US", page: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch recommendations", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/external_ids
router.get("/:type/:id/external_ids", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/external_ids`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch external IDs", details: err.toString() });
  }
});

// GET /api/reviews/:type/:id/keywords
router.get("/:type/:id/keywords", async (req, res) => {
  try {
    const { type, id } = req.params;
    const data = await getFromTMDB(`/${type}/${id}/keywords`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch keywords", details: err.toString() });
  }
});

// Person endpoints (for cast)
router.get("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getFromTMDB(`/person/${id}`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch person", details: err.toString() });
  }
});

router.get("/person/:id/movie_credits", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getFromTMDB(`/person/${id}/movie_credits`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch movie credits", details: err.toString() });
  }
});

router.get("/person/:id/tv_credits", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getFromTMDB(`/person/${id}/tv_credits`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch TV credits", details: err.toString() });
  }
});

export default router;
