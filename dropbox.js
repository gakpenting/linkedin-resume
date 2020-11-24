const dropbox_1 = require("dropbox"); // eslint-disable-line no-unused-vars
const fs = require("fs");
const path = require("path");

    const dbx = new dropbox_1.Dropbox({ accessToken: process.env.DROPBOX_KEY });
    fs.readFile(path.join(__dirname, '/febriano-resume.pdf'), 'utf8', async (err, contents) => {
        if (err) {
            console.log('Error: ', err);
        }
        await dbx.filesDeleteV2({path:"/febriano-resume.pdf"})
        // This uploads basic.js to the root of your dropbox
        dbx.filesUpload({ path: '/febriano-resume.pdf', contents })
            .then((response) => {
            console.log("cukses");
        })
            .catch((uploadErr) => {
            console.log(uploadErr);
        });
    });
