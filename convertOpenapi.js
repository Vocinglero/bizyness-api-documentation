const widdershins = require('widdershins');
const fs = require('fs');

const options = {
  httpsnippet:true,
  sample:true,
  codeSamples:true,
  tocSummary:true,
  version:true
};

const fileData = fs.readFileSync('source/bizyness-api.json', 'utf8');
const swaggerFile = JSON.parse(fileData);

widdershins.convert(swaggerFile, options)
.then(markdownOutput => {
  // markdownOutput contains the converted markdown
  fs.writeFileSync('source/index.html.md', markdownOutput, 'utf8');
})
.catch(err => {
  // handle errors
});