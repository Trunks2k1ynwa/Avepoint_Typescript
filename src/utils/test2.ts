var compose = function <T>(functions: ((val: T) => T)[]) {
  return function (x: T) {
    if (functions.length > 0) {
      let f = functions[functions.length - 1](x)
      for (let i = functions.length - 2; i >= 0; i--) {
        f = functions[i](f)
        console.log(f)
      }
      return f
    } else return x
  }
}
const result2 = compose([(x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x])(4)
console.log('🚀 ~ result:', result2)
