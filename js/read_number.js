function readNumber () {
    let input;
    while (true) {
        input = prompt('Input a number:');
        if (input === null) break;
        if (input.length > 0) {
            input = +input;
            break;
        };
        return null;
    };
    return input;
}