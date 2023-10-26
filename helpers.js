function successfullMessage(msg) {
    return "✅ *Davyduty*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Davyduty*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Davyduty*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
