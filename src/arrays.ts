/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        const arrayFE1 = [...numbers, ...numbers];
        return arrayFE1;
    } else {
        const arrayFE2 = [numbers.at(0), numbers.at(-1)];
        return arrayFE2;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const arrayF2 = numbers.map((numberz: number): number => numberz * 3);
    return arrayF2;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arrayF3 = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return arrayF3;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSign = amounts.map((sign: string): string =>
        sign.charAt(0) == "$" ? sign.slice(1) : sign
    );
    const arrayF4 = stringsToIntegers(removeSign);
    return arrayF4;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upperCase = messages.map((str: string): string =>
        str.slice(-1) == "!" ? str.toUpperCase() : str
    );
    const arrayF5 = upperCase.filter(
        (str2: string): boolean => str2.slice(-1) != "?"
    );
    return arrayF5;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const arrayF6 = words.filter((word: string): boolean => word.length < 4);
    return arrayF6.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        const arrayF7 = colors.every(
            (color: string): boolean =>
                color == "green" || color == "blue" || color == "red"
        );
        return arrayF7;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    } else {
        const arrayF8 = addends.join("+");
        const sum = addends.reduce((partialSum, a) => partialSum + a, 0);
        return sum + "=" + arrayF8;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeCheck = values.some((num: number): boolean => num < 0);
    if (negativeCheck == true) {
        const firstNegIndex = values.findIndex(
            (numzz: number): boolean => numzz < 0
        );
        const sameArr = [...values];
        sameArr.splice(firstNegIndex, values.length);
        const sum = sameArr.reduce((partialSum, a) => partialSum + a, 0);
        const arrayF10 = [...values];
        arrayF10.splice(firstNegIndex + 1, 0, sum);
        return arrayF10;
    } else {
        const sum2 = values.reduce((partialSum, a) => partialSum + a, 0);
        const arrayF9 = [...values, sum2];
        return arrayF9;
    }
}
