# Express Dockerized

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) installed
-   [Docker](https://docs.docker.com/get-docker/) installed

### Installation

1. Clone the repository

```bash
git clone https://github.com/xpl0siv/express-dockerized.git
```

2. Install dependencies

```bash
npm install
```

3. Docker compose build [**requires node:current image**]

```bash
docker compose build --no-cache
```

4. Docker compose up

```bash
docker compose up
```

5. Open your browser and navigate to `http://localhost:3005`

## Configuration

The server can be configured using environment variables.

| Variable           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NODE_ENV           | The environment mode. Can be either `development` or `production`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HOST               | The host address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| IP                 | The IP address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| PORT               | The port number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## License

[MIT](https://choosealicense.com/licenses/mit/)