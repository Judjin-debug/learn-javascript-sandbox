let student = {
    name: "Irene",
    respect: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.respect;
    }
}

console.log(student);
console.log(+student);
console.log(student + 500);
