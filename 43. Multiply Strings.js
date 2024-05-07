// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var mlt = (num1, num2) => {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let mem = 0;
  const b = Number.parseInt(num2);

  let result = "";

  for (let i = num1.length - 1; i >= 0; i--) {
    const a = Number.parseInt(num1[i]);
    const c = a * b + mem;
    const tmpRes = c % 10;
    mem = (c - tmpRes) / 10;

    result = tmpRes.toString() + result;
  }

  if (mem > 0) {
    result = mem.toString() + result;
  }

  return result;
};

var add = (num1, num2) => {
  let mem = 0;
  let result = "";

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    const a_str = num1[num1.length - 1 - i] || "0";
    const b_str = num2[num2.length - 1 - i] || "0";
    const a = Number.parseInt(a_str);
    const b = Number.parseInt(b_str);
    const c = a + b + mem;
    const tmpRes = c % 10;
    mem = (c - tmpRes) / 10;
    result = tmpRes.toString() + result;
  }

  if (mem > 0) {
    result = mem.toString() + result;
  }

  return result;
};

var multiply = function (num1, num2) {
  const toAdd = [];

  for (let i = num2.length - 1; i >= 0; i--) {
    const tmpRes = mlt(num1, num2[i]);
    if (tmpRes === "0") {
      toAdd.push(tmpRes);
    } else {
      toAdd.push(tmpRes + "0".repeat(num2.length - i - 1));
    }
  }

  console.log(toAdd);

  let sum = "0";

  for (let i = 0; i < toAdd.length; i++) {
    console.log(sum, toAdd[i]);
    sum = add(sum, toAdd[i]);
    console.log(sum);
  }

  return sum;
};
