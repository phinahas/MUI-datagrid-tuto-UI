import { createTheme } from '@mui/material/styles';


// desktop theme
const desktopTheme = createTheme({
  palette: {
    primary: {
      main: '#78C1F3',
    },
    secondary:{
        main:'#BAD7E9'
    },
    
    backgroundColor:{
        main:'#2B3467'
    },
    textColor:{
      main:'#FCFFE7'
    },
    paragraphColor:{
      main:'black'
    }
  },
});

// dark theme 
const darkTheme = createTheme({
    palette:{
        type:'dark',
        primary:{
            main:'#0F6292'
        },
        secondary:{
            main:'#000000'
        },
        backgroundColor:{
            main:'#FFED00'
        },
        textColor:{
          main:'#16FF00'
        },
        paragraphColor:{
          main:'#16FF00'
        }
    }
})

// Mobile theme
const mobileTheme = createTheme({
  palette: {
    primary: {
      main: '#98EECC',
    },
    secondary: {
      main: '#FBFFDC',
    },
    backgroundColor:{
        main:'#A4907C'
    },
    textColor:{
      main:'#FF0303'
    },
    paragraphColor:{
      main:'#16FF00'
    }
  },
});

export  {darkTheme, mobileTheme, desktopTheme};
