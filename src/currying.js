const count = (a) => {
  return  (b) => {
    return (c) => {
      return a * (b + c)
    }
  }
}

const fast = count(10)
const result = fast(8)(2)
console.log(result);
