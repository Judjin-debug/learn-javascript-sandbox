let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];


class MessageUnreadCache {
    constructor (messages) {
        this.cache = new WeakMap();
        for (let key of messages) {
            this.cache.set(key, null);
        };
        this.has = function (message) {
            return this.cache.has(message);
        };
        this.date = function (message) {
            return this.cache.get(message);
        };
        this.read = function (message) {
            this.cache.set(message, new Date());
        };
    };
};

let cache = new MessageUnreadCache(messages);

console.log(cache.date(messages[0]));

cache.read(messages[1]);
console.log(cache.date(messages[1]));