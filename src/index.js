module.exports = function check(str, bracketsConfig) {
  let i, stringLength, regex, pairsBrackets, num;
  if (str.length % 2 != 0){
    return false;
  }
  do {
    stringLength = str.length;
    for (i = 0; i < bracketsConfig.length; i++) {
      num = +bracketsConfig[i].join('');
      if (num == bracketsConfig[i].join(''))
        pairsBrackets = bracketsConfig[i].join('');
      else
        pairsBrackets = "\\" + bracketsConfig[i][0] + "\\" + bracketsConfig[i][1];
      regex = new RegExp(pairsBrackets, 'g');
      str = str.replace(regex, '');
    }
    } while (stringLength != str.length);
    if(str.length == 0) {
      return true;
    }
    else
      return false;
  }