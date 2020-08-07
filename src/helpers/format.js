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

function convertHoursToMinute(time) {
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = { subjects, weekdays, getSubject, convertHoursToMinute };
