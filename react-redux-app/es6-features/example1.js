let output=[];

foo = (refMax) => {
    let refMin = refMax - 24;
    for (let i = 1; i <= 125; i++) {
        if (i > refMax || i < refMin) {
            output.push(i);
        }
        if (i === 125 && refMax < 125) {
            foo(refMax + 25)
        }

    }
};

foo(initialValue = 25);
console.log(JSON.stringify(output));

