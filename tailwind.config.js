export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#151923',
        panel: '#11151D',
        ink: '#0B0D12',
        accent: '#4F8CFF',
        text: '#F4F6FB',
        muted: '#A5ADBD',
        lightbg: '#F5F7FB',
        lightcard: '#FFFFFF',
        lighttext: '#111827',
        lightmuted: '#596579'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.18)',
        glow: '0 0 0 1px rgba(79, 140, 255, 0.25), 0 18px 30px rgba(79, 140, 255, 0.12)'
      }
    }
  },
  plugins: []
}
