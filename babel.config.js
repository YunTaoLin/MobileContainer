const removeConsolePlugin = [];
if (process.env.NODE_ENV === "prod") {
  removeConsolePlugin.push("transform-remove-console");
}
module.exports = {
  presets: ["@vue/app"],
  plugins: removeConsolePlugin
};
