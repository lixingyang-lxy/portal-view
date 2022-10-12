function changeTheme(themeObj) {
  debugger
  const vars = Object.keys(themeObj).map(key => `--${key}:${themeObj[key]}`).join(';');
  document.documentElement.setAttribute('style', vars);
  document.documentElement.className = document.documentElement.className == 'primary' ? 'danger' : 'primary';
}