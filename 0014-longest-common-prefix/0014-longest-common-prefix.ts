function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {

    // check if string doesn't start with prefix
    while (!strs[i].startsWith(prefix)) {

    // prefix will be looping and remove at the end of index until meets the condition
      prefix = prefix.slice(0, -1);
    }

    // if prefix is empty it will return ''
    if (prefix === '') {
      return prefix;
    }
  }
  
  return prefix;
};