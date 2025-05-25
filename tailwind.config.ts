
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Menlo", "monospace"],
        jetbrains: ["var(--font-jetbrains)", "Menlo", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Kojima x Apple Flow colors
        "flow-primary": "var(--flow-primary)",
        "flow-secondary": "var(--flow-secondary)",
        "flow-accent": "var(--flow-accent)",
        "flow-success": "var(--flow-success)",
        "flow-warning": "var(--flow-warning)",
        "flow-error": "var(--flow-error)",
        "dark-void": "var(--dark-void)",
        "dark-bg": "var(--dark-bg)",
        "dark-surface": "var(--dark-surface)",
        "dark-card": "var(--dark-card)",
        "dark-text": "var(--dark-text)",
        "dark-text-secondary": "var(--dark-text-secondary)",
        "dark-text-muted": "var(--dark-text-muted)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "kojima-entrance": {
          "0%": {
            opacity: "0",
            transform: "translateY(60px) scale(0.8) rotateX(15deg)",
            filter: "blur(10px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(20px) scale(0.95) rotateX(5deg)",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1) rotateX(0deg)",
            filter: "blur(0)",
          },
        },
        "kojima-float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg) scale(1)",
            opacity: "0.7",
          },
          "25%": {
            transform: "translateY(-30px) rotate(90deg) scale(1.1)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-60px) rotate(180deg) scale(0.9)",
            opacity: "0.8",
          },
          "75%": {
            transform: "translateY(-30px) rotate(270deg) scale(1.1)",
            opacity: "1",
          },
        },
        "kojima-breath": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
          },
          "50%": {
            transform: "scale(1.08)",
            boxShadow: "0 0 50px rgba(99, 102, 241, 0.7), 0 0 100px rgba(139, 92, 246, 0.4)",
          },
        },
        "holographic-shimmer": {
          "0%": {
            backgroundPosition: "-100% 0",
          },
          "100%": {
            backgroundPosition: "100% 0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(99, 102, 241, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "kojima-entrance": "kojima-entrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "kojima-float": "kojima-float 8s ease-in-out infinite",
        "kojima-breath": "kojima-breath 4s ease-in-out infinite",
        "holographic-shimmer": "holographic-shimmer 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "cinematic": "0 16px 64px 0 rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.3)",
        "holographic": "0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(6, 182, 212, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
