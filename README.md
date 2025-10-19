# Profile Card Component

A responsive and accessible profile card component built with HTML, CSS, and vanilla JavaScript. This project was created as part of HNG Stage 0 requirements.

![Profile Card Preview](./assets/preview.png)

## Features

- Responsive design that works on mobile, tablet, and desktop
- Real-time milliseconds counter
- Accessible semantic HTML structure
- Social media links integration
- Custom hover and focus states
- Modern CSS with Flexbox and Grid layouts

## Live Demo

Visit the live demo: [Profile Card Demo](https://hng-0-profilecard.netlify.app)

## Running Locally

### Prerequisites

- A modern web browser
- Basic text editor (VS Code recommended)
- No build tools or dependencies required

### Installation

1. Clone the repository
```bash
git clone https://github.com/Favais/HNG_Stage_0
cd HNG_Stage_0
```

2. Open with VS Code
```bash
code .
```

3. Start a local server (choose one):

Using Python:
```bash
python -m http.server 3000
```

Using Node.js Live Server (if installed):
```bash
npx live-server
```

Using VS Code:
- Install "Live Server" extension
- Right click on `index.html`
- Select "Open with Live Server"

4. Visit `http://localhost:3000` in your browser

## Project Structure

```
profile-card/
├── index.html          # Main HTML file
├── style.css          # Styles
├── main.js           # JavaScript for time updates
├── assets/          # Images and other assets
└── README.md        # This file
```

## Testing

All elements include data-testid attributes for automated testing:

- Profile card: `test-profile-card`
- User name: `test-user-name`
- Biography: `test-user-bio`
- Current time: `test-user-time`
- Avatar: `test-user-avatar`
- Social links: `test-user-social-links`
- Hobbies: `test-user-hobbies`
- Dislikes: `test-user-dislikes`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

- Aisosa Oghagbon
- GitHub: [@Favais](https://github.com/Favais)
- Twitter: [@theogsoso](https://x.com/theogsoso)
- LinkedIn: [ihsosa](https://www.linkedin.com/in/ihsosa/)

## License

This project is open source and available under the [MIT License](LICENSE).