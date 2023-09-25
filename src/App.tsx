import Bears from './components/Allure/Bears'
import Counter from './components/Allure/Counter'
import { getAllureTheme, Themes, Language, ThemeProvider } from '@gui/fluent-ui-allure'

function App() {
  var compose = function <T>(functions: T[]) {
    return function (x: number) {
      let f: number = functions[0](x)
      for (let i = 1; i < functions.length; i++) {
        f = functions[i](f)
      }
      return f
    }
  }
  const functions = [(x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x]
  const x = compose<(x: number) => number>(functions)(4)
  console.log(x)
  return (
    <ThemeProvider theme={getAllureTheme(Themes.Cobalt, Language.EN)}>
      <Counter />
      <Bears />
    </ThemeProvider>
  )
}

export default App
