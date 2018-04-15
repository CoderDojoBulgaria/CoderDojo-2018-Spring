function findMax(numberA, numberB) {
    var result;
    numberA = Number(numberA);
    numberB = Number(numberB);

    if (isNaN(numberA) || isNaN(numberB)) {
        return "Write a number!";
    }

    if (numberA === numberB) {
        result = "The numbers are equal!";
    } else {
        if (numberA > numberB) {
            result = "The biggest number is " + numberA;
        } else {
            result = "The biggest number is " + numberB;
        }
    }

    return result;
}