/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        subtitle: '2px',
        h1: '12px',
        h2: '14px',
        h3: '16px',
        h4: '20px',
        h5: '24px',
        h6: '32px',
        h7: '40px',
        h8: '56px',
        h9: '72px'
      },
      colors: {
        'peach': {
          0: '#FF7966',
          50: '#FFA699',
          100: '#FFD2CC',
        },
        'watergreen': {
          50: '#7DFFEE',
          100: '#00FAD9'
        },
        'purplehaz': {
          0: '#E4D3FF',
          5: '#C9A7FF',
          10: '#AD7BFF',
          20: '#924EFF',
          50: '#7722FF',
          100: '#5E00F5',
        },
        'nig': {
          0: '#FFFFFF',
          10: '#E0E0E6',
          20: '#C1C1CD',
          30: '#A2A2B5',
          40: '#83839C',
          50: '#666680',
          60: '#4E4E61',
          70: '#353542',
          80: '#1C1C23',
          100: '#0E0E12',
        },
        'skin': {
          0: '#FF7F37'
        },
        'service': {
          0: '#CFCFFC'
        }
      },
      dropShadow: {
        'text-shadow': '0 8px 25px #FF79667a',
        'facebook-shadow': '0 8px 25px #1771E67a',
      },
      boxShadow: {
        'service-shadow': 'inset 0px 1px 2px 0px rgb(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

