import { ThemeProvider } from "@/components/theme-provider"
import { theme } from "@/lib/theme"
import "@/styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark"]}
          theme={theme}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'