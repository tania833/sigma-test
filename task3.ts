function getCurrentScript(): HTMLScriptElement {
  return document.scripts[document.scripts.length - 1];
}
