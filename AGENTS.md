# Project Guidelines - Ansible Vault Tool

## Project Overview
A Node.js/Express web application providing online Ansible Vault encryption/decryption functionality with both a web interface and a REST API. Built with a modern frontend (Bootstrap 5, vanilla JS) and a parameterized configuration system.

---

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
- All configs are optional with graceful degradation.
- Templates use conditional rendering: `<%if (config_donation) {%>...<%}%>`.

---

## Build and Test

### Local Development
```bash
npm install
npm start  # Starts on port 3000
```

### Integration Testing
Test the API and routes locally:
1. Start the app: `PORT=3000 npm start`
2. Run curl tests (use `printf` rather than `echo` when piping JSON with newlines to `jq` to prevent parsing failures):
```bash
# Encrypt API
encrypt_res=$(curl -s -X POST http://localhost:3000/api -d "action=encrypt&passphrase=testpass&content=hello world")
printf "%s\n" "$encrypt_res" | jq -e '.status == "success"'

# Decrypt API
encrypted_content=$(printf "%s\n" "$encrypt_res" | jq -r '.result')
curl -s -X POST http://localhost:3000/api -d "action=decrypt" -d "passphrase=testpass" --data-urlencode "content=$encrypted_content" | jq
```

### Docker Testing & Build
- **Local Test Image:** Avoid using `setup-buildx-action` and `build-push-action` for local test builds to prevent Docker Hub rate limits. Use native docker build:
  ```bash
  docker build -t ansible-vault-tool:test -f ./docker/Dockerfile .
  ```
- **Production Build (Multi-platform):** Ensure you perform `docker/login-action` **before** initializing `docker/setup-buildx-action` so that helper image pulls are authenticated.

---

## Conventions & Gotchas

### Express Route Handlers
*   **Crucial Rule:** In route handlers (like `routes/api.js`), always prepend validation/error responses with a `return` statement:
    ```javascript
    if (!req.body.passphrase) {
      return res.status(200).json({ status: 'fail', msg: 'Missing passphrase' });
    }
    ```
    Failing to return will cause execution to fall through, invoking multiple response attempts and crashing the server with `Error [ERR_HTTP_HEADERS_SENT]`.

### Frontend & Styling
- **Bootstrap 5** via CDN (do not use local files or npm bootstrap).
- **CSS Design Tokens:** Styled via CSS variables defined in `:root` inside `public/css/style.css`.
- **Vanilla JS & jQuery:** jQuery is used for AJAX requests and UI helper animations.
