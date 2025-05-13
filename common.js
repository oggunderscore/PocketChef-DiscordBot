// Global functions file

// Initialize personalities function
function initPersonalities(personalities, env) {
  console.log("[DEBUG] Initializing personalities...");
  personalities.length = 0;
  let envKeys = Object.keys(env);
  // For each variable in .env check if starts with personality. and add to personalities array if true
  envKeys.forEach((element) => {
    if (element.startsWith("personality.")) {
      let name = element.slice(12);
      console.log(`[DEBUG] Adding personality: ${name}`);
      personalities.push({
        name: name,
        request: [{ role: "system", content: `${env[element]}` }],
      });
    }
  });
  console.log(
    "[DEBUG] Personalities loaded:",
    personalities.map((p) => p.name)
  );
}

// Export the function(s)
module.exports = {
  initPersonalities: initPersonalities,
};
