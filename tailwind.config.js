/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/react-tailwindcss-select/dist/index.esm.js"
   ],
   theme: { 

      extend: { 

         fontFamily: { 
            "Lato": ['Lato', 'sans-serif'],
            "Nunito": ['Nunito', 'sans-serif'],
            "OpenSans": ['Open Sans', 'sans-serif'],
            "Poppins": ['Poppins', 'sans-serif'],
            "Roboto": ['Roboto', 'sans-serif'],
            "RobotoCondensed": ['Roboto Condensed', 'sans-serif'],
            "RobotoFlex": ['Roboto Flex', 'sans-serif']
         },
         colors: { 
            GFGtext: '#379237', 
            paraBG: '#59C1BD', 
         },
         backGround: {
            primaryBG: 'linear-gradient(to right, #360435, #AA076B)'
         },
         boxShadow: {
            'rank': '0px 0px 15px -4px black',
            'users': '0px 0px 15px -10px black',
            'dropdown': '0px 0px 15px -4px #999999',
            'notifications': '0px 0px 16px -10px #999999',
            'Nav': '0px 0px 15px -8px black',
         },
         borderWidth: {
            'winner': '0.23em',
         },
         borderColor: {
            'winner': 'orange',
         },
      
      }, 
   }, 
   plugins: [],
}
 
