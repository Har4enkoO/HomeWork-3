// Task #1
function getMaxDigit(n) {
    let k = n[0];
    for (let i = 1; i < (n.length - 1); i++) {
        if (n[i] > k) {
            k = n[i];
        } else {
            continue;
        }
    }
    return k;
}


// Task #2
function pow(a,b) {
    let c = a;
    for (let i = 1; i < b; i++) {
        c*=a;
    }
    return c;
}



// Task #3
function correctName(str) {
    correct = str[0].toUpperCase()+str.slice(1).toLowerCase();
    return correct;
}



// Task #4
function salary(x) {
    return x*0.805;
}



// Task #6

function countLetter(letter,word) {
    let count = 0;
    for (let i = 0; i < (word.length-1); i++) {
        if (word[i] == letter) {
            count+=1;
        } else {
            continue;
        }

    }
    return count;
}

// Task #7
function convertCurrency(money) {
    if (money.toUpperCase().indexOf("UAH")>=0) {
        return ((+(money.toUpperCase().replace("UAH","")))/25);
    } else if (money.toUpperCase().indexOf("$")>=0) {
        return ((+(money.replace("$","")))*25)
    } else {
        alert("Wrong currency!!");
    }
}

// Task #9
function deleteLetters(letter,word) {
    let withOutLetter="";
    for (let i = 0; i < (word.length) ; i++) {
        if (word[i] == letter) {
            continue;
        }else {
            withOutLetter+=word[i];
        }

    }
    return withOutLetter;
}
document.writeln(`Функция №1: ${getMaxDigit("1234567256")}`,"<br \/>")
document.writeln(`Функция №2: ${pow(3,4)}`,"<br \/>")
document.writeln(`Функция №3: ${correctName("iVaN")}`,"<br \/>")
document.writeln(`Функция №4: ${salary(1000)}`,"<br \/>")
document.writeln(`Функция №6: ${countLetter("a","alphabetatatatat")}`,"<br \/>")
document.writeln(`Функция №7: ${convertCurrency("2500uah")}`,"<br \/>")
document.writeln(`Функция №9: ${deleteLetters("b","blablalblalla")}`)