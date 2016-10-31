function EventListener () {}

EventListener.prototype.on = function (eventName, cb) {
  this[eventName] = this[eventName] ? this[eventName] : []
  this[eventName].push(cb)
}

EventListener.prototype.emit = function (eventName, data) {
  if (!this[eventName]) throw new Error('event not registered')
  this[eventName].forEach(function (cb) {
    cb(data);
  })
}

EventListener.prototype.clear = function (eventName) {
  this[eventName] = null;
}

