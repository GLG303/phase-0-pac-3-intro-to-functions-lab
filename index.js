function shout(string)  {
    return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    const answerOne = "I can't hear you!";
    const answerTwo= "YES INDEED!";
    const answerThree= "I would love to!";
    if (string.toLowerCase(string) === string) {
      return answerOne;
    }
    else if (string.toUpperCase(string) === string) {
      return answerTwo;
    }
    else if ("Let's have dinner together!" === string) {
      return answerThree
    }
}