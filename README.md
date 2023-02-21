## Introduction

# Landing Page for code test made with React and TailwindCSS

I coded up this static single page as a code test for a job interview.

## Getting Started

# Install React & create react app

```bash
npm create-react-app project_name
cd my-project
```

# Install TailwindCSS

I recommend simply copy pasting the installation instructions from https://tailwindcss.com/docs/guides/create-react-app

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

I started by creating the necessary components, assets, and fonts folders to organize each of the pieces. Then, I added each one by one into the main page file (Acknowledgements.jsx) and routed it through App.js.

I built out the wireframes and added in all the content for each page, then used the color picker extension on chrome to pick out the correct colors. Once all the content was formatted on the page, I added in the font files to the Tailwind files. It was a little tricky, so here's a basic breakdown.

# Set up Custom Fonts with TailwindCSS

1. Add the .ttf or .otf files to the fonts folder
2. Open up the index.css file and add each font-style as follows:

```bash
@font-face {
    font-family: "font-name";
    src: url("../file-location/file-name");
}
```

3. Add the font to the tailwind.config.js file. Add "fontFamily" to "Extend" and list out the fonts from the index.css file. Looks like this:

```bash
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harmonicaReg: ["harmonica-reg", "regular"],
        harmonicaMono: ["harmonica-mono", "mono"],
        harmonicaBold: ["harmonica-bold","bold"],
        harmonicaItalic: ["harmonica-italic", "italic"],
        harmonicaCondensed: ["harmonica-condensed", "condensed"]
      }
    },
  },
  plugins: [],
}
```

4. Use them in your code! You can add your custom font like so: classname="font-harmonicaBold"

Challenges:

1. Unfortunately the provided picture in the Archves.jsx section was not on a transparent background like the mock-up showed. I attempted to edit it in photoshop, but to save time ultimately I took a screenshot from the mock up as a substitute.
2. The AV logo svg was not easily edited for color (similar issue to the archive section photo), so I also screenshoted that. If I had more time, I would edit the images in photoship, so the resolution is higher quality.
3. Responsive elements - the mock up provided was for a desktop view, and I usually build mobile-first so it felt a bit backwards to build the largest screen first.
