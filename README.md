# Skillup - Portfolio Website

A modern, responsive portfolio website built with Angular and Tailwind CSS, featuring dynamic GitHub integration and a sleek design inspired by brittanychiang.com.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark mode support
- **Dynamic Content**: Automatically fetches and displays GitHub repositories
- **README Rendering**: Renders project README files using ngx-markdown
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Multi-Page**: Angular Router-based navigation with smooth transitions
- **GitHub Integration**: Real-time data from GitHub API
- **Contact Form**: Interactive contact form with validation
- **Blog Integration**: Links to external blog at teknogeeks.in

## 🛠️ Tech Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: Tailwind CSS
- **Markdown**: ngx-markdown + marked.js
- **Deployment**: GitHub Pages
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Hero section
│   │   ├── projects/      # GitHub projects display
│   │   ├── skills/        # Skills and technologies
│   │   ├── experience/    # Work experience timeline
│   │   ├── contact/       # Contact form and info
│   │   └── blog-link/     # Blog redirection
│   ├── services/
│   │   └── github-api.ts  # GitHub API service
│   ├── app.routes.ts      # Angular routing
│   ├── app.config.ts      # App configuration
│   └── app.html          # Main layout with navigation
├── assets/
└── styles.css            # Global styles and Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone URL
   cd skillup.githubrepo.in/portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Home Component**: Update name, tagline, and description
- **Experience Component**: Add your work experience and education
- **Contact Component**: Update email and social links
- **GitHub API Service**: Change username to your GitHub username

### Styling

The design uses Tailwind CSS with custom colors defined in `tailwind.config.js`:

- Primary: `#64ffda` (Teal)
- Dark Background: `#0a192f`
- Text Primary: `#ccd6f6`
- Text Secondary: `#8892b0`

### GitHub Integration

The portfolio automatically fetches:
- Public repositories
- Repository descriptions and languages
- README files for project details
- Repository topics for skill extraction

## 📦 Build & Deployment

### Build for Production

```bash
ng build --configuration production
```

### Deploy to GitHub Pages

```bash
npx angular-cli-ghpages --dir=dist/portfolio-app
```

### Manual Deployment

1. Build the project
2. Push the `dist/portfolio-app` folder to the `gh-pages` branch
3. Configure GitHub Pages in your repository settings

## 🔧 Configuration

### GitHub API

The GitHub API service is configured to fetch data from the specified username. No authentication is required for public repositories.

### Routing

Routes are defined in `app.routes.ts`:
- `/` - Home
- `/projects` - Projects
- `/skills` - Skills
- `/experience` - Experience
- `/contact` - Contact
- `/blog` - Blog link

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌙 Dark Mode

Dark mode is enabled by default and can be toggled using the button in the navigation. The preference is saved in localStorage.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: abhayk_d@skillup.online


---

Built with ❤️ using Angular and Tailwind CSS
