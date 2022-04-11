import { addDecorator } from "@storybook/react";
import {  ThemeProvider } from "@mui/material";

import theme from "../styles/theme";

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));



