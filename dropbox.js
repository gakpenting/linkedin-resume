const dropbox_1 = require("dropbox"); // eslint-disable-line no-unused-vars
const fs = require("fs");
const path = require("path");

    const dropboxV2Api = require('dropbox-v2-api');
    const dropbox = dropboxV2Api.authenticate({
      token: process.env.DROPBOX_KEY
  });
    dropbox({
      resource: 'files/upload',
      parameters: {
          path: '/febriano-resume.pdf',
          mode:"overwrite"
      },
      readStream: fs.createReadStream(path.join(__dirname, '/febriano-resume.pdf'))
  }, (err, result, response) => {
    if(err) console.log("errr")
      console.log("cukses")
  });
