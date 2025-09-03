[![Docker Image](https://img.shields.io/docker/v/fbraz3/ansible-vault-tool?label=Docker%20Image&logo=docker&sort=semver)](https://hub.docker.com/r/fbraz3/ansible-vault-tool)
[![Docker Pulls](https://img.shields.io/docker/pulls/fbraz3/ansible-vault-tool?logo=docker)](https://hub.docker.com/r/fbraz3/ansible-vault-tool)
[![Image Size](https://img.shields.io/docker/image-size/fbraz3/ansible-vault-tool/latest?logo=docker)](https://hub.docker.com/r/fbraz3/ansible-vault-tool)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/fbraz3/ansible-vault-tool)

# Braz Ansible Vault Tool

This is a simple online **Ansible Vault** encryption/decryption tool.
You can encrypt or decrypt any information using the online interface or API tools provided.

## Objective

The goal of this project is to provide a secure and user-friendly tool for encrypting and decrypting data using **Ansible Vault**.

## Usage

The quickest way to get started is by using the online interface.
[https://ansible-vault.braz.dev/](https://ansible-vault.braz.dev/)

⚠️ [No data is stored or logged](https://deepwiki.com/search/how-can-i-be-sure-no-data-is-b_207e875d-dab5-44f7-a968-2b0092013dab) when running the project locally or using the online interface.

### Local Setup
1. Clone the repository.
2. Install dependencies and run the application:
   ```
   npm install
   npm start
   ```
3. Access the application at `http://localhost:3000`.

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

### Pre-built Docker Images

Ready-to-use Docker images are automatically built weekly and available on Docker Hub

#### Quick Start with Docker
```bash
# Run directly with Docker
docker run -p 3000:3000 fbraz3/ansible-vault-tool:latest

#### Docker Compose Example
```yaml
version: '3.8'
services:
  ansible-vault-tool:
    image: fbraz3/ansible-vault-tool:latest
    ports:
      - "3000:3000"
    restart: unless-stopped
```

Available tags:
- `latest` - Latest stable build from master branch
- `YYYY.MM.DD` - Weekly builds with date tag
- `master-<sha>` - Builds from specific commits

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