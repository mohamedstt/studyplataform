const proffys = [
  {
    name: "Mohamed Schuster",
    avatar:
      "https://avatars3.githubusercontent.com/u/63928237?s=460&u=8bcd649d6baf59f2585bcf5dd28bf36157e2806c&v=4",
    whatsapp: "999885545",
    bio:
      "Enthusiast of the best advanced Biology technologies. Passionate about blowing things up in the laboratory and for changing people's lives through experiences. More than 200,000 people have gone through one of mine explosions.",
    subject: "Biology",
    cost: "20",
    weekday: "[0]",
    time_from: "[720]",
    time_to: "[1240]",
  },
  {
    name: "Mohamed Schuster",
    avatar:
      "https://avatars3.githubusercontent.com/u/63928237?s=460&u=8bcd649d6baf59f2585bcf5dd28bf36157e2806c&v=4",
    whatsapp: "999885545",
    bio:
      "Enthusiast of the best advanced Biology technologies. Passionate about blowing things up in the laboratory and for changing people's lives through experiences. More than 200,000 people have gone through one of mine explosions.",
    subject: "Math",
    cost: "20",
    weekday: "[0]",
    time_from: "[720]",
    time_to: "[1240]",
  },
];
const subjects = [
  "Arts",
  "Biology",
  "Science",
  "Physical Education",
  "Physics",
  "Geography",
  "History",
  "Math",
  "English",
  "Chemistry",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function pageLanding(req, res) {
  return res.render("index.html");
}
function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}
function pageGiveClass(req, res) {
  const data = req.query;

  const isNotEmpty = Object.keys(data).length > 0;
  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    proffys.push(data);
    return res.redirect("/study");
  }

  return res.render("give-classes.html", { subjects, weekdays });
}

const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});
server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClass)
  .listen(5500);
