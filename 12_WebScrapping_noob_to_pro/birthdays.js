const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}
function extractHTML(html) {
    let $ = cheerio.load(html);
    let innigsArr = $(".card.content-block.match-scorecard-table>.Collapsible");
    for (let i = 0; i < innigsArr.length; i++) {
        // team name
        let teamNameElem = $(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        // table batsman
        let tableElem = $(innigsArr[i]).find(".table.batsman");
        let allBatsMan = $(tableElem).find("tr");
        for (let j = 0; j < allBatsMan.length; j++) {
            let allColsOfPlayer = $(allBatsMan[j]).find("td");
            let isbatsManCol = $(allColsOfPlayer[0]).hasClass("batsman-cell");
            if (isbatsManCol == true) {
                let href = $(allColsOfPlayer[0]).find("a").attr("href");
                let name = $(allColsOfPlayer[0]).text();
                let fullLink = "https://www.espncricinfo.com" + href;
                // console.log(fullLink);
                getBirthdaypage(fullLink, name, teamName);
            }


        }
    }
}
// console.log(htmlStr);

function getBirthdaypage(url, name, teamName) {
    request(url, cb);
    function cb(err, response, html) {
        if (err) {

        } else {
            extractBirthDay(html, name, teamName);
        }
    }
}
function extractBirthDay(html, name, teamName) {
    let $ = cheerio.load(html);
    let detailsArr = $(".player-card-description");
    let birthDay =  $(detailsArr[1]).text();
    console.log(`${name} plays for ${teamName} was born on ${birthDay}`);
}