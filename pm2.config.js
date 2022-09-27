module.exports = {
  apps: [
    {
      script: "./dist/index.js",
      name: "pm2-remote",
      node_args: "-r dotenv/config",
    },
  ],
}
