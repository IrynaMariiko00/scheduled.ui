/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: '#111827',
          secondary: '#6b7280',
          muted: '#9ca3af',
          inverse: '#ffffff',
        },
        bg: {
          DEFAULT: '#f5f7fb',
          surface: '#ffffff',
          muted: '#f3f4f6',
        },
        accent: {
          violet: '#7c3aed',
          indigo: '#4f46e5',
          blue: '#2563eb',
        },
        border: {
          DEFAULT: '#e5e7eb',
          strong: '#d1d5db',
        },
        status: {
          active: {
            DEFAULT: '#27e860',
            text: '#15803d',
            bg: 'rgb(39 232 96 / 32%)',
            border: 'rgb(39 232 96 / 55%)',
          },
          inactive: {
            text: '#6b7280',
            bg: 'rgba(156, 163, 175, 0.18)',
            border: 'rgba(107, 114, 128, 0.4)',
          },
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(17, 24, 39, 0.06)',
        md: '0 4px 12px rgba(17, 24, 39, 0.08)',
        lg: '0 8px 24px rgba(17, 24, 39, 0.1)',
      },
    },
  },
  plugins: [],
}
