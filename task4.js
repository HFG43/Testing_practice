const capitalize = (string) => {
  const splitted = string.split('');
  const [a, ...restOfString] = splitted;
  const jointedRest = a.toUpperCase().concat(restOfString.join(''));
  
  return jointedRest;
}

module.exports = capitalize;