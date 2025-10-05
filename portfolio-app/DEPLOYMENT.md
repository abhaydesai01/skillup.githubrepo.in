# Deployment Guide

This guide will help you deploy your Angular portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Repository**: Make sure you have a GitHub repository named `AtharvaGulhane.github.io` (replace with your username)
2. **Angular CLI**: Ensure you have Angular CLI installed globally
3. **Node.js**: Make sure you have Node.js installed

## Deployment Steps

### 1. Build the Application

First, build the application for production:

```bash
ng build --configuration production
```

This will create optimized files in the `dist/portfolio-app` directory.

### 2. Deploy to GitHub Pages

Use the Angular CLI GitHub Pages package to deploy:

```bash
npm run deploy
```

Or manually:

```bash
npx angular-cli-ghpages --dir=dist/portfolio-app/browser
```

### 3. Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose the **gh-pages** branch
5. Click **Save**

### 4. Access Your Website

Your portfolio will be available at:
- `https://atharvagulhane.github.io` (replace with your username)

## Manual Deployment (Alternative)

If the automatic deployment doesn't work, you can manually deploy:

1. **Build the application**:
   ```bash
   ng build --configuration production
   ```

2. **Create a new branch**:
   ```bash
   git checkout -b gh-pages
   ```

3. **Copy build files**:
   ```bash
   cp -r dist/portfolio-app/* .
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure your repository is named correctly (`username.github.io`)
2. **Build Errors**: Check that all dependencies are installed (`npm install`)
3. **Routing Issues**: Angular routing might need base href configuration

### Base Href Configuration

If you encounter routing issues, update the `angular.json` file:

```json
{
  "projects": {
    "portfolio-app": {
      "architect": {
        "build": {
          "options": {
            "baseHref": "/"
          }
        }
      }
    }
  }
}
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository root with your domain
2. Configure DNS settings to point to GitHub Pages
3. Update the base href in `angular.json`

## Environment Variables

For production builds, you might want to set environment variables:

```bash
export NODE_ENV=production
npm run build:prod
```

## Performance Optimization

After deployment, you can optimize further:

1. **Enable Gzip compression** on your web server
2. **Set up CDN** for static assets
3. **Configure caching headers** for better performance

## Monitoring

Monitor your deployment:

1. Check GitHub Actions (if using CI/CD)
2. Monitor website performance with tools like Lighthouse
3. Set up analytics to track visitors

## Security

For production deployment:

1. **HTTPS**: GitHub Pages automatically provides HTTPS
2. **Content Security Policy**: Consider adding CSP headers
3. **Dependencies**: Regularly update dependencies for security patches

---

Your portfolio website should now be live on GitHub Pages! 🚀 