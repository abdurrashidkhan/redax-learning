const count = (a) => {
  return  (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

const result = count(1)(2)(4)
console.log(result);
