module.exports = function check(str, bracketsConfig) {
  let openedBracket, closedBracket;
  let lengthStr = str.length;
  
  for ([openedBracket, closedBracket] of bracketsConfig) {
    str = str.split(`${openedBracket}${closedBracket}`).join('');
  }
  
  return str.length == 0 ? true: str.length == lengthStr ? false: check(str, bracketsConfig);
}
