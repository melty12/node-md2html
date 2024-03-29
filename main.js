const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// ファイルを読み込む
fs.readFile(filePath, { encoding: "utf-8" }, (err, file) =>
{ 
  if (err)
  {
    console.error(err.message);
    process.exit(1);
    return;
  }

  const html = md2html(file, cliOptions);
  console.log(html)
})