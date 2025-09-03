# Copilot Instructions - Ansible Vault Tool

## Project Overview
A Node.js/Express web application providing online Ansible Vault encryption/decryption functionality with both web interface and REST API. Built with modern frontend (Bootstrap 5, vanilla JS) and parameterized configuration system.

## Architecture & Key Components

### Core Structure
- **`app.js`**: Express app setup with dual-format error handling (HTML/JSON/text)
- **`routes/index.js`**: Web interface with environment-based configuration
- **`routes/api.js`**: REST API using `ansible-vault` npm package
- **`views/`**: EJS templates with modern Bootstrap 5 design system
- **`public/`**: Static assets (custom CSS, client-side JS)

### Configuration Pattern
Environment variables drive optional features:
```bash
CONFIG_GTAG="GA_ID" CONFIG_ADSENSE="ca-pub-xxx" CONFIG_DONATION="https://github.com/sponsors/user" npm start
```
- All configs are optional with graceful degradation
- Templates use conditional rendering: `<%if (config_donation) {%>...<%}%>`

### API Design
POST `/api` with JSON body:
```json
{"action": "encrypt|decrypt", "content": "text", "passphrase": "password"}
```
- Uses `ansible-vault` npm package for actual operations
- Returns consistent JSON format with status/result/msg fields
- No data persistence - stateless operations only

## Development Patterns

### Frontend Architecture
- **Bootstrap 5** via CDN (not local files)
- **Custom CSS** in `public/css/style.css` using CSS variables and modern features
- **Vanilla JS** with jQuery for DOM manipulation
- **Responsive design** with mobile-first approach

### Error Handling Convention
Unified error handler in `app.js` supports content negotiation:
- HTML: Renders `error.ejs` template
- JSON: Returns structured error object
- Text: Plain text fallback

### Styling System
CSS uses design tokens in `:root` variables:
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
```
- Consistent component classes: `.card-modern`, `.btn-modern`, `.feature-icon`
- Dark mode support via `@media (prefers-color-scheme: dark)`

## Development Workflow

### Local Development
```bash
npm start  # Starts on port 3000
```

### Docker Deployment
```bash
cd docker && docker-compose up -d  # Runs on port 3003
```

### Asset Organization
- **CSS**: Single `style.css` file with organized sections
- **JS**: Separate files for specific functionality (`main.js`, `download.js`)
- **Templates**: Semantic HTML5 with accessibility considerations

## Integration Points

### External Dependencies
- **Frontend**: Bootstrap 5 CDN, Font Awesome 6, Google Fonts (Inter)
- **Backend**: `ansible-vault` npm package for core functionality
- **Analytics**: Optional Google Analytics & AdSense integration

### Client-Server Communication
- Form submissions via AJAX to `/api` endpoint
- File upload support using FileReader API
- Real-time progress indicators and user feedback

## Key Conventions

### Template Variables
All optional features check existence before rendering:
```ejs
<%if (config_gtag) {%><!-- Analytics --><%}%>
<%if (config_donation) {%><!-- Sponsor banner --><%}%>
```

### CSS Naming
- Component-based: `.card-modern`, `.btn-primary-modern`
- Feature-specific: `.donation-banner`, `.feature-icon`
- State-based: `.active`, `.hover` effects via CSS transitions

### Security Approach
- No data storage or logging (explicitly documented)
- Client-side file processing before API calls
- Environment variable configuration for sensitive data
