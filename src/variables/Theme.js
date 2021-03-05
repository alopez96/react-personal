const lightTheme = {
    dark: false,
    gradient: {
        to: "#2B7A78",
        from: "#17252A"
    },
    contactGradient: {
        to: "#2B7A78",
        from: "#17252A"
    },
    textPrimary: "rgb(61, 61, 61)",
    textSecondary: "rgb(61, 61, 61)",
    backgroundColor: "#DEF2F1",
    btnColor: 'black',
    toogleColor: 'rgb(61, 61, 61)',
    shadow: 'rgb(0 0 0 / 20%)',
    border: 'none'
}
  
const darkTheme = {
    dark: true,
    gradient: {
        to: "rgb(59, 59, 59)",
        from: "rgb(34, 34, 34)"
    },
    contactGradient: {
        to: "#8650FF",
        from: "#33249D"
    },
    textPrimary: "#FAFAFA",
    textSecondary: "#8650FF",
    backgroundColor: "#000",
    btnColor: 'white',
    toogleColor: 'white',
    shadow: 'none',
    border: 'solid'
}



module.exports = {
    lightTheme: lightTheme,
    darkTheme: darkTheme
  }