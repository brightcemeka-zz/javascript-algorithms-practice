function fizzBuss(num) {
    for (let fizzNum = 1; fizzNum <= num; fizzNum++) {
        if (fizzNum % 3 == 0 && fizzNum % 5 == 0){
            console.log("FizzBuzz")
        } else if (fizzNum % 3 == 0) {
            console.log("Fizz");
        } else if(fizzNum % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(fizzNum)
        }
       // console.log(fizzNum);
    }
}

fizzBuss(20);