module.exports = (themeConfig) => {
  // Will be useful when the right sidebar is developed.
  // In Gitbook, sub-headers are in a right sidebar, so the left one shouldn't
  // include them.
  //
  // themeConfig.sidebarDepth = themeConfig.sidebarDepth || 0

  return {
    extend: "@vuepress/theme-default",
  }
}
