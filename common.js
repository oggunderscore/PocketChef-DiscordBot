// Global functions file

// Initialize personalities function
function initPersonalities(personalities, env) {
  console.log("[DEBUG] Initializing personalities...");
  personalities.length = 0;
  let envKeys = Object.keys(env);
  // For each variable in .env check if starts with PERSONALITY_ and add to personalities array if true
  envKeys.forEach((element) => {
    if (element.startsWith("PERSONALITY_")) {
      let name = element.slice(11).toLowerCase(); // Extract name after "PERSONALITY_"
      console.log(`[DEBUG] Adding personality: ${name}`);
      personalities.push({
        name: name,
        request: [{ role: "system", content: `${env[element]}` }],
      });
    }
  });

  // Fallback: Add a default personality if none are loaded
  if (personalities.length === 0) {
    console.log("[DEBUG] No personalities found. Adding default personality.");
    personalities.push({
      name: "default",
      request: [{ role: "system", content: "You are a helpful assistant." }],
    });
  }
  console.log(
    "[DEBUG] Personalities loaded:",
    personalities.map((p) => p.name)
  );
}

// Export the function(s)
module.exports = {
  initPersonalities: initPersonalities,
};
