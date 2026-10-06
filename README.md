# Easescan Website

A beautiful, responsive landing page for Easescan - an automotive scanning application for Android devices.

## Project Structure

```
Mastertech-website/
├── index.html          # English version (default)
├── es.html             # Spanish version
├── fr.html             # French version
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── Images/             # Image assets
│   ├── DSCN1978.JPG
│   ├── Tablet A20_2.jpg
│   ├── Tablet Samsung.jpg
│   ├── ELM327.png
│   └── 3 devices tablet.jpg
└── README.md           # This file
```

## Features

- **Multi-language Support**: English, Spanish, and French with language switcher
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with TailwindCSS and custom styling
- **Zig-zag Layout**: Eye-catching alternating feature sections
- **FAQ Accordion**: Interactive frequently asked questions
- **Contact Form**: Simple form optimized for HostPapa (no database required)
- **Smooth Navigation**: Fixed header with smooth scrolling
- **SEO Optimized**: Meta tags for search engines

## Sections

1. **Hero**: Impactful title, subtitle, and call-to-action with device images
2. **Features**: Key benefits with alternating image/text layout
3. **Device Information**: Technical details and supported vehicle brands
4. **Glossary**: Automotive terminology explained
5. **App Structure**: Application menu and feature descriptions
6. **Download**: Links to download from website, Google Play, and Amazon
7. **FAQ**: Accordion-style frequently asked questions
8. **Contact**: Contact form with email integration
9. **Footer**: Social media links and quick navigation

## Technical Requirements

- **Lightweight**: Under 1000MB for HostPapa hosting
- **Fast**: Optimized images and minimal JavaScript
- **Responsive**: Mobile-first design with 2-column layout
- **No Database**: Contact form uses mailto: for HostPapa compatibility
- **Static**: Pure HTML/CSS/JS, no server-side processing

## Deployment Instructions

### For HostPapa

1. **FTP Upload**: Upload all files to `/home/eases906/public_html/`
2. **File Structure**: Maintain the folder structure as shown above
3. **Images**: Ensure the `Images/` folder is uploaded with all image files
4. **Permissions**: Standard file permissions (644 for files, 755 for directories)

### Local Testing

1. Open `index.html` in a web browser
2. Test responsive design using browser dev tools (F12)
3. Test language switching functionality
4. Test contact form (will open default email client)
5. Test FAQ accordion functionality

## Customization

### Colors
Primary color: Blue (#3b82f6)
Can be customized in `styles.css`

### Fonts
- Logo: Audiowide (Google Fonts)
- Body: Inter (Google Fonts)

### Images
Replace images in the `Images/` folder while maintaining the same filenames

### Content
Edit text directly in the HTML files:
- `index.html` for English
- `es.html` for Spanish
- `fr.html` for French

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- TailwindCSS via CDN for minimal file size
- Lazy loading for images
- Smooth scrolling for better UX
- Minimal JavaScript for fast loading

## Contact Form

The contact form is optimized for HostPapa without database:
- Uses `mailto:` protocol to open user's email client
- Pre-fills subject and body with form data
- No server-side processing required
- Email: info@easescan.com

## Social Media Links

Update social media links in the footer section of each HTML file:
- Facebook
- Instagram
- Amazon

## SEO Keywords

Easescan, scanner, obd2, automotive diagnostic, android app

## License

Proprietary - Easescan

## Support

For technical support, contact: info@easescan.com
