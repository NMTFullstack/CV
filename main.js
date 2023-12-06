var currentLang = "en";
function getText(key) {
  return lang[currentLang][key] || key;
}
