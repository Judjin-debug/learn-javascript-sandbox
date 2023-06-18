let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (value == meetup && key != "") ? undefined : value;
}));