function money(numA) {
    var str = "";
    for (var i = 1; i <= numA; i++) {
        for (var j = 1; j <= i; j++) {
            str += "$";
        }
        str += "\n";
    }
    console.log(str);
}

money(10);