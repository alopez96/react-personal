const lightTheme = {
    dark: false,
    gradient: {
        to: "#FFFFFF",
        from: "#D9D9FF"
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
        to: "#252525",
        from: "#434343"
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