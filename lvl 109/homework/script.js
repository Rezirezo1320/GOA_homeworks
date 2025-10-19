function object(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
      throw new TypeError('Target must be an object');
    }
  
    for (const source of sources) {
      if (typeof source === 'object' && source !== null) {
        for (const key in source) {
          if (source.hasOwnProperty(key)) {
            target[key] = source[key];
          }
        }
      }
    }
  
    return target;
  }