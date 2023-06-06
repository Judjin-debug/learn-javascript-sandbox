let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];


class MessageUnreadCache {
    constructor (messages) {
        this.cache = new WeakMap();
        for (let key of messages) {
            this.cache.set(key, 0);
        };
        this.has = function (message) {
            return this.cache.has(message);
        };
        this.isRead = function (message) {
            return Boolean(this.cache.get(message));
        };
        this.read = function (message) {
            this.cache.set(message, 1);
        };
    };
};

let cache = new MessageUnreadCache(messages);
// cache.delete({text: "Hello", from: "John"});
console.log(cache.has(messages[0]));
console.log(cache.has(messages[1]));
console.log(cache.has(messages[2]));

console.log(cache.isRead(messages[0]));

cache.read(messages[1]);
console.log(cache.isRead(messages[1]));



