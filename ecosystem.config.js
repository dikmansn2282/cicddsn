module.exports = {
  apps : [{
    name: "dsncicd",
    script: "./index.js",
    exec_mode: "cluster",
    watch: true,
    ignore_watch: ['node_modules'],
    instances: "max"
  }]
};
