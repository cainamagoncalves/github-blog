import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { PostsProvider } from "./contexts/PostsContext";
import { Posts } from "./pages/Posts";
import { PostView } from "./pages/PostView";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/detail/:number",
    element: <PostView />,
  }
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
      <GlobalStyle />

      {/* <Posts /> */}
      {/* <PostView /> */}
    </ThemeProvider>
  )
}