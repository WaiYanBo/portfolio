# Computer Science Portfolio

A modern, professional portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases projects, skills, and experience for Computer Science graduates.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Hero Section**: Eye-catching introduction with typewriter effect
- **About Section**: Detailed information about skills, education, and achievements
- **Projects Showcase**: Filterable project gallery with detailed descriptions
- **Contact Form**: Functional contact form with validation
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations using Framer Motion
- **Professional Styling**: Modern UI with Tailwind CSS

## 🛠️ Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Simple Typewriter**: Typing animation effect

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cs-portfolio.git
   cd cs-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎯 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change "Your Name" to your actual name
   - Update the roles array to match your expertise
   - Modify the description text

2. **About Section** (`src/components/About.js`):
   - Update skills and proficiency levels
   - Add your education details
   - Include your achievements

3. **Projects Section** (`src/components/Projects.js`):
   - Replace placeholder projects with your actual projects
   - Update project descriptions and technologies
   - Add real GitHub and demo links

4. **Contact Section** (`src/components/Contact.js`):
   - Update your email, phone, and location
   - Add your social media links

### Styling

The portfolio uses Tailwind CSS with custom color schemes. You can customize the colors by modifying the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      secondary: {
        // Your custom secondary colors
      }
    }
  }
}
```

## 📁 Project Structure

```
cs-portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   └── Projects.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/cs-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ by a Computer Science Graduate**
