import { extendTheme } from "@/components/ui/themes"

export const createTheme = (theme: Record<string, Record<string, string>>) => {
  return extendTheme(theme)
}

