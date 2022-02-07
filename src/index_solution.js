
/* specifications:
if num is less than 5 => "[num] is less than 5."
if num is more than 5 => "[num] is more than 5."
if num is equal to 5 => "[num] is equal to 5."
if the input is not a number then return -1
*/

export function checkFive(num) {
  if (typeof num !== 'number'){
    return "Error";
  }
  let result = '';
  if (num < 5) {
    result = num + " is less than 5";
  } else if (num > 5) {
    result = num + " is greater than 5";
  } else {
    result = num + " is equal to 5";
  }
  return result;
}