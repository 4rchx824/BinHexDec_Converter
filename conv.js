var input = require('readline-sync');
do {
    var conv = input.questionInt("\n----------------------------------------------------\nSelect conversion method (enter -1 to stop program): \n\n\t1. Decimal to Binary\n\t2. Decimal to Hexadecimal\n\n\t3. Binary to Decimal\n\t4. Binary to Hexadecimal\n\n\t5. Hexadecimal to Decimal\n\t6. Hexadecimal to Binary\n\n\t>> ");
    switch (conv) {
        case -1:
            console.log("\n\t<<<<< Program Terminated >>>>>")
            break;
        case 1:
            console.log("\nYou have chosen << Decimal to Binary >>");
            var value = input.question("Enter your value in (Decimal): \n\t>> ");
            console.log("\nBinary Value: " + decBin(value))
            break;
        case 2:
            console.log("\nYou have chosen << Decimal to Hexadecimal >>");
            var value = input.question("Enter your value in (Decimal): \n\t>> ");
            console.log("\nHexadecimal Value: " + decHex(value))
            break;
    
        case 3:
            console.log("\nYou have chosen << Binary to Decimal >>");
            var value = input.question("Enter your value in (Binary): \n\t>> ");
            console.log("\nDecimal Value: " + binDec(value))
            break;
        case 4:
            console.log("\nYou have chosen << Binary to Hexadecimal >>");
            var value = input.question("Enter your value in (Binary): \n\t>> ");
            console.log("\nHexadecimal Value: " + binHex(value))
            break;
    
        case 5:
            console.log("\nYou have chosen << Hexadecimal to Decimal >>");
            var value = input.question("Enter your value in (Hexadecimal): \n\t>> ");
            console.log("\nDecimal Value: " + hexDec(value))
            break;
        case 6:
            console.log("\nYou have chosen << Hexadecimal to Binary >>");
            var value = input.question("Enter your value in (Hexadecimal): \n\t>> ");
            console.log("\nBinary Value: " + hexBin(value))
            break;
        
        default: console.log("Please select one of the above values.")
    }
} while (conv!=-1)


function decBin(a) {
    var count = 1;
    var num = a;
    while (num!=1) {
        if (num==0) {
            return '0000'
        } else {
            num = Math.floor(num/2);
            count++
        }
    }
    var newArr = [];
    for (var i = 0; i < count; i++) {
        newArr.push(Math.pow(2, i))
    }
    newArr.reverse();
    var binStr = "";
    var num1 = a;
    for (j = 0; j < newArr.length; j++) {
        if (num1 - newArr[j]>-1) {
            binStr+=1;
            num1 = num1 - newArr[j]
        } else {
            binStr+=0;
        }
    }
    return binStr;
}

function decHex(a) {
    var binary = decBin(a);
    var binArr = binary.split("")
    var binSplit = [];
    var maxLength = (Math.ceil(binary.length/4))*4
    if (binArr.length%4!=0) {
        binArr.reverse();
        for (var i = 0; i < (maxLength - binary.length); i++) {
            binArr.push("0")
        }
        binArr.reverse();
    }

    for (var j = 0; j < binArr.length; j++) {
        if (j%4 == 0 && j > 0) {
            binSplit.push(" ")
            binSplit.push(binArr[j]);
        } else {
            binSplit.push(binArr[j]);
        }
    }
    
    var binStr = "";

    for (var k = 0; k < binSplit.length; k++) {
        binStr+=binSplit[k]
    }

    var $4_bits = binStr.split(" ")

    var rawHex = [];
    for (var l = 0; l < $4_bits.length; l++) {
        const hexTable = [8, 4, 2, 1]
        var nums = $4_bits[l].split("");
        var sum = 0;
        for (var m = 0; m < nums.length; m++) {
            nums[m] = parseInt(nums[m]);
            if (nums[m] == 1) {
                sum += hexTable[m]
            }
        }
        rawHex.push(sum);
    }

    for (var n = 0; n < rawHex.length; n++) {
        var rawHexNum = rawHex[n];
        switch (rawHexNum) {
            case 0:
                rawHex[n] = 0;
                break;
            case 1:
                rawHex[n] = 1;
                break;
            case 2:
                rawHex[n] = 2;
                break;
            case 3:
                rawHex[n] = 3;
                break;
            case 4:
                rawHex[n] = 4;
                break;
            case 5:
                rawHex[n] = 5;
                break;
            case 6:
                rawHex[n] = 6;
                break;
            case 7:
                rawHex[n] = 7;
                break;
            case 8:
                rawHex[n] = 8;
                break;
            case 9:
                rawHex[n] = 9;
                break;
            case 10:
                rawHex[n] = 'A';
                break;
            case 11:
                rawHex[n] = 'B';
                break;
            case 12:
                rawHex[n] = 'C';
                break;
            case 13:
                rawHex[n] = 'D';
                break;
            case 14:
                rawHex[n] = 'E';
                break;
            case 15:
                rawHex[n] = 'F';
                break;
            
            default: console.log("Error")
        }
    }
    
    var hexStr = "";

    for (var o = 0; o < rawHex.length; o++) {
        hexStr+=rawHex[o];
    }

    return hexStr;

    
}

function binDec(a) {
    var binArr = a.split("")
    var binTable = [];

    for (var i = 0; i < binArr.length; i++) {
        binTable.push(Math.pow(2, i))
    }

    binTable.reverse();
    var sum = 0;


    for (var j = 0; j < binArr.length; j++) {
        if (binArr[j]==1) {
            sum+=binTable[j]
        } else {

        }
    }

    return sum
}

function binHex(a) {
    a = a.split(" ")
    var str = "";
    for (var i = 0; i < a.length; i++) {
        str += a[i]
    }
    a = str;
    var num = binDec(a)
    var finalHex = decHex(num)

    return finalHex
}


function hexDec(a) {
    var hexNums = a.split("")

    for (var i = 0; i < hexNums.length; i++) {
        var hexChar = hexNums[i];

        switch (hexChar) {
            case '0':
                hexNums[i] = 0;
                break;
            case '1':
                hexNums[i] = 1;
                break;
            case '2':
                hexNums[i] = 2;
                break;
            case '3':
                hexNums[i] = 3;
                break;
            case '4':
                hexNums[i] = 4;
                break;
            case '5':
                hexNums[i] = 5;
                break;
            case '6':
                hexNums[i] = 6;
                break;
            case '7':
                hexNums[i] = 7;
                break;
            case '8':
                hexNums[i] = 8;
                break;
            case '9':
                hexNums[i] = 9;
                break;
            case 'A':
                hexNums[i] = 10;
                break;
            case 'B':
                hexNums[i] = 11;
                break;
            case 'C':
                hexNums[i] = 12;
                break;
            case 'D':
                hexNums[i] = 13;
                break;
            case 'E':
                hexNums[i] = 14;
                break;
            case 'F':
                hexNums[i] = 15;
                break;
            
            default: console.log("Error")
        }
    }




    for (var j = 0; j < hexNums.length; j++) {
        hexNums[j] = fourBit(decBin(hexNums[j]))
    }


    
    var str = "";
    for (var k = 0; k < hexNums.length; k++) {
        str+=hexNums[k]
    }

    
    hexNums = binDec(str)
    return hexNums;
}

function fourBit(a) {
    a = a.split("")
    if (a.length<4) {
        a.reverse();
        while (a.length<4) {
            a.push("0")
        }
        a.reverse();
    }

    var str = ""

    for (var i = 0; i < a.length; i++) {
        str+=a[i]
    }

    a = str;
    return a;
}

function hexBin(a) {
    var num = hexDec(a)
    var num1 = decBin(num)

    return num1
}

