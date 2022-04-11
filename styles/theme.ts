import { createTheme } from '@mui/material/styles'

const themeDefault = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      dark: '#303f9f',
      light: '#7986cb',
      contrastText: '#fff'
    },
    secondary: {
      main: '#4caf50',
      dark: '#388e3c',
      light: '#81c784',
      contrastText: '#fff'
    },
    error: {
      main: '#f44336',
      dark: '#d32f2f',
      light: '#e57373',
      contrastText: '#fff'
    },
    warning: {
      main: '#ff9800',
      dark: '#f57c00',
      light: '#ffb74d',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      main: '#2196f3',
      dark: '#1976d2',
      light: '#64b5f6',
      contrastText: '#fff'
    },
    success: {
      main: '#4caf50',
      dark: '#388e3c',
      light: '#81c784',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)'
    },
    divider: 'rgba(0, 0, 0, 0.12)'
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
})

export default themeDefault
