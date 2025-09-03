# Braz Ansible Vault Tool

This is a simple online **Ansible Vault** encryption/decryption tool.
You can encrypt or decrypt any information using the online interface or API tools provided.

For more technical information, please visit our  [DeepWiki Page](https://deepwiki.com/fbraz3/ansible-vault-tool) (AI generated).

## Objective

The goal of this project is to provide a secure and user-friendly tool for encrypting and decrypting data using **Ansible Vault**.

## Usage

The quickest way to get started is by using the online interface.
[https://ansible-vault.braz.dev/](https://ansible-vault.braz.dev/)

⚠️ [No data is stored or logged](https://deepwiki.com/search/in-what-part-of-the-code-we-ca_addee82c-6a9c-4274-b08e-d952fc75b6b4) when running the project locally or using the online interface.

### Local Setup
1. Clone the repository.
2. Install dependencies and run the application:
   ```
   npm install
   npm start
   ```
3. Access the application at `http://localhost:3000`.

### Configuration Options

The application supports several optional environment variables:

- `CONFIG_GTAG`: Google Analytics tracking ID
- `CONFIG_ADSENSE`: Google AdSense client ID  
- `CONFIG_REPO`: Repository URL (defaults to GitHub repo)
- `CONFIG_DONATION`: Donation/Sponsorship link URL (e.g., GitHub Sponsors, Buy me a coffee, etc.)

Example with GitHub Sponsors:
```bash
CONFIG_DONATION="https://github.com/sponsors/fbraz3" npm start
```

Other supported platforms:
```bash
# Buy me a Coffee
CONFIG_DONATION="https://www.buymeacoffee.com/yourusername" npm start

# PayPal
CONFIG_DONATION="https://paypal.me/yourusername" npm start

# Ko-fi
CONFIG_DONATION="https://ko-fi.com/yourusername" npm start
```

The sponsorship banner will only appear when `CONFIG_DONATION` is set and provides a subtle, elegant way to request support for the project.

### Docker Setup
1. Navigate to the `docker` directory:
   ```
   cd docker
   ```
2. Start the application using Docker Compose:
   ```
   docker-compose up -d
   ```
3. Access the application at `http://localhost:3003`.

## Contribution
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

Please visit the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

#### Useful links
- [How to create a pull request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [How to report an issue](https://docs.github.com/pt/issues/tracking-your-work-with-issues/creating-an-issue)

## Donation
I spend a lot of time and effort maintaining this project. If you find it useful, consider supporting me with a donation:
- [GitHub Sponsor](https://github.com/sponsors/fbraz3)
- [Patreon](https://www.patreon.com/fbraz3)

## License

This project is licensed under the [Apache License 2.0](LICENSE), so you can use it for personal and commercial projects. However, please note that the images are provided "as is" without any warranty or guarantee of any kind. Use them at your own risk.