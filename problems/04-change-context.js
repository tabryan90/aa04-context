function changeContext(func, obj) {
  // Your code here
  let funcbound = func.bind(obj);
  return funcbound()
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
