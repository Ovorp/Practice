// test

function toCamelCase(str) {
  if (str == '') {
    return str;
  }
  let newStr = str.split('-');
  let newStr2 = str.split('_');
  let testStr;

  newStr.length > newStr2.length ? (testStr = newStr) : (testStr = newStr2);

  let answer = testStr.map((val, i) => {
    if (i > 0) {
      return val[0].toUpperCase() + val.slice(1);
    } else return val;
  });

  return answer.join('');
}
