var string = 'いかのだんすはすんだのかい';
function palin(str, i) {
  if (str.slice(i-1,i) === str.slice(str.length-i,str.length+1-i)) {
    return true;
  }
  else {
    return false;
  }
}

for (i=1; i<=Math.round(string.length/2); i++) {
  if (palin(string, i) === false) {
    console.log('This is not a Palindrome.');
    break;
  }
  if (i<Math.round(string.length/2)) {
    continue;
  }
  console.log('Excellent! This is a Palindrome!!');
}
