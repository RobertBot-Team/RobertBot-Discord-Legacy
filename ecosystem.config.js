module.exports = {
  apps: [
    {
      name: "robbie-bot",
      script: "./app.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};