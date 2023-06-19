// Print numbers from 1 to 10

function one_to_tenn() {
    let tab = [];
    for (let i = 0; i <= 10; i++) {
        tab.push(i)
    }
    console.log(tab);
}

// one_to_tenn();

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

// exo2();

// Print the multiplication table with 7

function exo3() {
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x 7 = ${i * 7}`);
    }
}

// exo3();

// Print all the multiplication tables with numbers from 1 to 10

function exo4() {
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            console.log(`${j} x ${i} = ${j * i}`);
        }
    }
}

// exo4();

// Calculate the sum of numbers from 1 to 10

function exo5() {
    let result = 0;
    for (let i = 0; i <= 10; i++) {
        result = result + i;
    }
    console.log(result);
}

// exo5();

// Calculate 10!

function exo6() {
    let result = 1;
    for (let i = 1; i <= 10; i++) {
        result = result * i;
    }
    console.log(result);
}

// exo6();

// Calculate the sum of even numbers greater than 10 and less than 30

function exo7() {
    let result = 0;
    for (let i = 10; i <= 30; i++) {
        if (i % 2 === 0) {
            result = result + i;
        }
    }
    console.log(result);
}

// exo7();

// Create a function that will convert from Celsius to Fahrenheit

function exo8() {
    let celsius = prompt();
    let result = 0;
    result = (celsius * 9 / 5) + 32;
    console.log(result);
}

// exo8();

// Create a function that will convert from Fahrenheit to Celsius

function exo9() {
    let Fahrenheit = prompt();
    let result = 0;
    result = (Fahrenheit - 32) * 5 / 9;
    console.log(result);
}

// exo9();

// Calculate the sum of numbers in an array of numbers

function exo10() {
    let tab = [5, 5, 20];
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        result = result + tab[i];
    }
    console.log(result);
}

// exo10();

// Calculate the average of the numbers in an array of numbers

function exo11() {
    let tab = [10, 20, 20, 5, 15];
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        result = result + tab[i];
    }
    console.log(result / tab.length);
}

// exo11();

// Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers

function exo12() {
    function positive_num_in_table(tab) {
        let result = [];
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] > 0) {
                result.push(tab[i]);
            }
        }
        console.log(result);
    }
    positive_num_in_table([-1, -10, 50, 30, -100])
}

// exo12();

// Find the maximum number in an array of numbers

function exo13() {
    let tab = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > result) {
            result = tab[i];
        }
    }
    console.log(result);
}

// exo13();

// Print the first 10 Fibonacci numbers without recursion

function exo14() {
    let tmp = 0;
    let active = 1;
    let precedent = 1;
    console.log(active);

    active = active + precedent;
    tmp = active;

    console.log(active);

    active = active + precedent;
    precedent = tmp;

    for (let i = 0; i < 8; i++) {
        console.log(active);
        tmp = active;
        active = active + precedent;
        precedent = tmp
    }
}

// exo14();

// Create a function that will return a Boolean specifying if a number is prime

function exo16() {
    let user_number = prompt();
    function boolean_for_prymary(user_number) {
        let tab = [2, 3, 5];
        for (let i = 0; i < tab.length; i++) {
            if (user_number % 2 === 0) {
                console.log('no prymary');
                return false;
            } else {
                console.log('prymary');
                return true;
            }
        }
    }
    boolean_for_prymary(user_number);

}

// exo16();

// Calculate the sum of digits of a positive integer number

function exo17() {
    let num = 145;
    num = num.toString();
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result = result + parseInt(num[i]);
    }
    console.log(result);
}

// exo17();

// Print the first 100 prime numbers

function exo18() {
    let prymary_number_table = [2, 3, 5];
    let test = 6;
    let flag = false;
    while (prymary_number_table.length !== 99) {
        flag = false;
        for (let i = 0; i < prymary_number_table.length; i++) {
            if (test % prymary_number_table[i] === 0) {
                flag = true;
            }
        }
        if (!flag) {
            prymary_number_table.push(test);
        }

        test++
    }
    prymary_number_table.unshift(1)

    console.log(prymary_number_table);
}

// exo18();


// Rotate an array to the left 1 position

function exo20() {
    let tab = [5, 10, 20, 30, 40, 50];
    let tmp = tab.pop();
    tab.push(tab[0]);
    tab[0] = tmp
    console.log(tab);
}

// exo20();

// Rotate an array to the right 1 position

function exo21() {
    let tab = [10, 10, 20, 30, 40, 50];
    let tmp = tab.shift();
    tab.unshift(tab[tab.length - 1]);
    tab.pop()
    tab.push(tmp)
    console.log(tab);
}

// exo21();

// Reverse an array

function exo22() {
    let tab = [1, 2, 3, 4, 5];
    let new_tab = [];
    while (tab.length !== 0) {
        new_tab.push(tab.pop());
    }
    console.log(new_tab);
}
// exo22();

// Reverse a string

function exo23() {

}
// exo23();

// Create a function that will merge two arrays and return the result as a new
// array

function exo24() {
    let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let tab2 = [1, 2, 3, 4, 5]
    let new_tab = [];
    for (let i = 0; i < tab.length; i++) {
        new_tab.push(tab[i])
    }
    for (let j = 0; j < tab2.length; j++) {
        new_tab.push(tab[j])
    }
    console.log(new_tab);

}
// exo24();

// Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array
// or second array but not in both

function exo25(tab1, tab2) {
    let new_tab = [];
    for (let i = 0; i < tab1.length; i++) {
        if (!tab2.includes(tab1[i])) {
            new_tab.push(tab1[i])
        }
    }
    for (let i = 0; i < tab2.length; i++) {
        if (!tab1.includes(tab2[i])) {
            new_tab.push(tab2[i])
        }
    }
    console.log(new_tab);
}
// exo25([1, 2, 3, 4, 5, 10, 15], [1, 2, 3, 4, 5, 6]);

// Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second


function exo26(tab1, tab2) {
    let new_tab = [];
    for (let i = 0; i < tab1.length; i++) {
        if (!tab2.includes(tab1[i])) {
            new_tab.push(tab1[i])
        }
    }
    console.log(new_tab);
}
// exo26([1, 2, 3, 6, 10], [1, 2, 3, 8, 10]);


// Create a function that will receive an array of numbers as argument and will return a
// new array with distinct elements

function exo27(tab1) {
    let new_tab = [];
    for (let i = 0; i < tab1.length; i++) {
        if (!new_tab.includes(tab1[i])) {
            new_tab.push(tab1[i])
        }
    }
    console.log(new_tab);
}
// exo27([1, 1, 5, 3, 2, 2]);


// Create a function that will return the number of words in a text

function exo31(str) {
    let number_of_the_world_on_the_text = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] === " " || str[i + 1] === undefined) {
            number_of_the_world_on_the_text++;
        }
    }
    console.log(number_of_the_world_on_the_text);
}

// exo31("le chat dans la forêt. qui parle le dans le vent.");

// Create a function that will capitalize the first letter of each word in a text

function exo32(str) {
    let new_str = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === undefined || str[i - 1] === " ") {
            new_str = new_str + str[i].toUpperCase();
        } else {
            new_str = new_str + str[i];
        }
    }
    console.log(new_str);
}
// exo32("le chat dans la nuit");

function exo32b(str) {
    str = str.toLowerCase();
    let letter = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
    };

    for (let i = 0; i < str.length; i++) {
        letter[str[i]] = letter[str[i]] + 1;
    }

    for (let key in letter) {
        if (letter[key] > 0) {
            console.log(`Il y a ${letter[key]} ${key} dans la phrase`);
        }
    }

}
// exo32b("le chat dans la foret");


// Calculate the sum of numbers received in a comma delimited string

function exo33(str) {
    let split_str = str.split(",");
    let result = 0;
    for (let i = 0; i < split_str.length; i++) {
        result = result + parseInt(split_str[i]);
    }
    console.log(result);
}

// exo33("10,20");

// Create a function that returns an array with words inside a text. 

function exo34(str) {
    let new_tab = [];
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            new_tab.push(tmp);
            tmp = "";
        } else {
            tmp = tmp + str[i];
        }
    }
    new_tab.push(tmp);
    tmp = "";
    console.log(new_tab);
}

// exo34("tous les jour je vie dans ce monde de more que le jour du jujement commence");

// Create a function that converts a string to an array of characters

function exo36(str) {
    str = str.replaceAll(" ", "")
    console.log(str);
    let new_tab = [];
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
        tmp = str[i];
        new_tab.push(tmp);
    }
    console.log(new_tab);
}

// exo36("tous les jour je vie dans ce monde de more que le jour du jujement commence");

// Create a function that will convert a string in an array containing the ASCII codes of
// each character

function exo37(str) {
}
// exo37("hello les amie");


// Create a function to return the longest word in a string

function exo48(str) {
    let new_str = str.split(" ");
    let tmp = 0;
    let result = "";
    for (let i = 0; i < new_str.length; i++) {
        if (new_str[i].length > tmp) {
            tmp = new_str[i].length
            result = new_str[i]
        }
    }
    console.log(result);
}
exo48("hello le chat dans la forêt. enticostitutionelment le chart")


// 1 a 14
// 17
// 20 a 27
// 31 a 34
// 36 a 39
// 48