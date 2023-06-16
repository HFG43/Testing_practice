const reverseString = (string) => {
    str = "";
for(let i = string.length-1; i >= 0; i -= 1){
    str += string[i];
}
return str;
}

module.exports = reverseString;