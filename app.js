// Print numbers from 1 to 10

function one_to_tenn() {
    let tab = [];
    for (let i = 0; i <= 10; i++) {
        tab.push(i)
    }
    console.log(tab);
}
one_to_tenn();


// Print the odd numbers less than 100

function exo2() {
    let result_tab = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            result_tab.push(i);
        }
    }
    console.log(result_tab);
}

exo2();