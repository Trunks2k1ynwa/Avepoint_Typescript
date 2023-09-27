class Person {
  public name: string = 'Person'
  private age!: number
  readonly address!: string
  constructor(name: string = 'Hello', age: number) {
    this.name = name
    this.age = age
  }
  err() {
    // this.address = 'Hau loc'; error
  }
  isPerson() {
    console.log('This is Person with nam', this.name, this.age)
  }
}
class Male extends Person {
  protected gender: string
  constructor(gender: string, name: string, age: number) {
    super(name, age)
    this.gender = gender
  }
}
const A = new Person('Darwin', 22)
const B = new Male('male', 'DarwinLe', 22)
console.log('🚀 ~ B:', B)
console.log(A.isPerson())
