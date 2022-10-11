function changeTheme(themeObj) {
  debugger
  const vars = Object.keys(themeObj).map(key => `--${key}:${themeObj[key]}`).join(';')
  document.documentElement.setAttribute('style', vars)
}