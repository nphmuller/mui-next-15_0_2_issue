"use client";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import InfoSharp from "@mui/icons-material/InfoSharp";

createTheme({
  components: {
    MuiCheckbox: {
      defaultProps: {
        // Comment this out and the error goes away
        icon: <InfoSharp />,
      },
    },
  },
});

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>;
}
