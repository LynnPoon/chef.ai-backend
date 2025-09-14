//backend api calls
const express = require("express");
const router = express.Router();
const { getRecipeFromChefClaude } = require("../ai");

router.post("/", async (req, res) => {
  const { ingredients } = req.body;
  try {
    const recipe = await getRecipeFromChefClaude(ingredients);
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
});

module.exports = router;
