import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Posts } from "./pages/Posts";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle />

      <Posts />
    </ThemeProvider>
  )
}