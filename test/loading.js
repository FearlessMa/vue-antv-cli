const ora = require("ora");

const instance = new ora();
instance.text = "loading";
instance.start();
setTimeout(() => {
  instance.succeed();
}, 3000);
