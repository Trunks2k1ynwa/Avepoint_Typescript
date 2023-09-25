type OptionFags<Type> = {
  [Property in keyof Type]: boolean
}
type FeatureFlags = {
  darkMode: () => void
  newUserProfile: () => void
}
type FeatureOptions = OptionFags<FeatureFlags>

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
const test: UnlockedAccount = {
  id: 'Trung',
  name: 'le Trung'
}
