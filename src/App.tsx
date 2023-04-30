import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useActions } from "./hook/useActions";
import { useSelector } from "./hook/useSelector";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import NotFound from "./pages/Error/Notfound";
import Template from "./template";
import Dashboard from "./pages/Dashboard";
import Components from "./pages/Components";
import SignIn from "./pages/SignIn";

function App() {
  const { fetchTheme } = useActions();
  const theme = useSelector((state) => state.theme);

  const darkTheme = createTheme({
    palette: {
      mode: theme.theme ? "dark" : "light",
    },
  });

  useEffect(() => {
    fetchTheme();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Dashboard />} />
          <Route path='/components' element={<Components />} />
        </Route>
        {/* 404 page */}
        <Route path='*' element={<NotFound />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
