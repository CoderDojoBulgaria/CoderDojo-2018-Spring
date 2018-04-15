function getWeeklyDay(number) {
    number = Number(number);

    if (isNaN(number) || number < 1 || number > 7) {
        return "Invalid day";
    } else {
        var result;
        switch (number) {
            case 1:
                result = "01";
                break;
            case 2:
                result = "Tuesday";
                break;
            case 3:
                result = "Wednesday";
                break;
            case 4:
                result = "Thursday";
                break;
            case 5:
                result = "Friday";
                break;
            case 6:
                result = "Saturday";
                break;
            case 7:
                result = "Sunday";
                break;
        }

        if (result === undefined) {
            return "Invalid day";
        }
        
        return "The day of the week is " + result;        
    }
}