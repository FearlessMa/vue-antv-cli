#! /usr/bin/env node

"use strict";

const { program } = require("commander");
const download = require("download-git-repo");
const ora = require("ora");

const spinner = ora();

// https://github.com/FearlessMa/vue-template.git

program
  .version("1.0.0", "-v --version")
  .option("-init --init", "init template")
  .parse(process.argv);

if (program.init) {
  spinner.text = "loading template ...";
  spinner.start();
  download("github:FearlessMa/vue-template", process.cwd(), function (err) {
    spinner.succeed("success !");
  });
}
