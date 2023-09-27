// Get DeepValue
function getDeepValue<T, K extends keyof T, SK extends keyof T[K]>(obj: T, firstKey: K, secondKey: SK) {
  return obj[firstKey][secondKey]
}
const obj = {
  foo: {
    a: true,
    b: 20
  },
  baz: {
    c: false,
    d: 20
  }
}
const result = getDeepValue(obj, 'baz', 'd')
console.log('🚀 ~ result:', result)

// Deep Equal compare
function deepEqualCompare<T>(a: T extends any[] ? 'dont pass an array here' : T, b: T): boolean {
  return a === b
}
deepEqualCompare(true, true)
deepEqualCompare([1, 32, 432], [3])
deepEqualCompare(213, 3432)
deepEqualCompare('dsadsaf', 'Trunadfs')

// ReplaceAll
