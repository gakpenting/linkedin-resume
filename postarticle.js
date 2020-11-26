require('dotenv').config()
const axios = require("axios");
async function getAllArticle(){
    const article = await axios.get("https://dev.to/api/articles/me", {
        headers: { "api-key": process.env.DEV_API_KEY },
      });
      await translate(article.data[article.data.length-1].body_markdown)
}
getAllArticle()
async function translate(text) {
    const translatte = require('translatte');

    translatte(text, {from:"en",to: 'id'}).then(res => {
        console.log(res.text)
    }).catch(err => {
        console.error(err);
    });
}
