const log = require("./logger");
const EventEmitter = require("events");

let url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log = (message) => {
    // Send an HTTP request
    console.log(message);

    // Used to raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  };
}

module.exports = Logger;