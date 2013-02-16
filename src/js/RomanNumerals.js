/*
 0xor1   http://github.com/0xor1

 'generate' called 'toRomanNumeral' because its a more accurate description of what the function actually does
 which is more important for the read/understandability of the code. it is called on an instance of 'Number' therefore there
 is no need for a parameter.

 */

(function () {


    Number.ROMAN_VALUES = [
        {decimal:1, roman:'I'},
        {decimal:5, roman:'V'},
        {decimal:10, roman:'X'},
        {decimal:50, roman:'L'},
        {decimal:100, roman:'C'},
        {decimal:500, roman:'D'},
        {decimal:1000, roman:'M'}
    ];


    Number.prototype.toRomanNumeral = function () {

        var rom = ""
            , tmpRom = ""
            , currentDigit
            , remainder = this
            , decOrder = 1
            , romCharIdx
            , i
            ;

        if (this < 1 || this > 3999 || this % 1 !== 0) {
            throw new Error('Number.prototype.toRomanNumeral() called on an invalid number, only integers from 1 to 3999 are accepted for conversion');
        }

        while (remainder >= 1) {

            currentDigit = Math.floor( remainder % 10);

            if (currentDigit > 0) {

                romCharIdx = 2 * (decOrder - 1);

                if (currentDigit <= 3) {

                    for(i = 0; i < currentDigit; i++){

                        tmpRom += Number.ROMAN_VALUES[romCharIdx].roman;

                    }

                } else if(currentDigit === 4){

                    tmpRom = Number.ROMAN_VALUES[romCharIdx].roman + Number.ROMAN_VALUES[romCharIdx + 1].roman;

                } else if(currentDigit === 5){

                    tmpRom = Number.ROMAN_VALUES[romCharIdx + 1].roman;

                } else if(currentDigit <= 8){

                    tmpRom = Number.ROMAN_VALUES[romCharIdx + 1].roman;

                    for(i = 0; i < currentDigit - 5; i++){

                        tmpRom += Number.ROMAN_VALUES[romCharIdx].roman;

                    }

                } else if(currentDigit === 9){

                    tmpRom = Number.ROMAN_VALUES[romCharIdx].roman + Number.ROMAN_VALUES[romCharIdx + 2].roman;

                }

            }

            rom = tmpRom + rom;

            tmpRom = "";

            remainder /= 10;

            decOrder += 1;

        }

        return rom;

    };


})();