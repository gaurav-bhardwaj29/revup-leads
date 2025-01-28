export function extendTheme(theme: Record<string, Record<string, string>>) {
  return {
    light: {
      ...theme.light,
    },
    dark: {
      ...theme.dark,
    },
  }
}

