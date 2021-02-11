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
    btnColor: 'black'
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
    textPrimary: "#FFFFFF",
    textSecondary: "#8650FF",
    backgroundColor: "#12100E",
    btnColor: 'white'
}



module.exports = {
    lightTheme: lightTheme,
    darkTheme: darkTheme
  }