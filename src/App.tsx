import Bears from './components/Allure/Bears'
import Counter from './components/Allure/Counter'
import { getAllureTheme, Themes, Language, ThemeProvider } from '@gui/fluent-ui-allure'

function App() {
  return (
    <ThemeProvider theme={getAllureTheme(Themes.Cobalt, Language.EN)}>
      <Counter />
      <Bears />
    </ThemeProvider>
  )
}

export default App
