#https://github.com/oven-sh/bun
FROM oven/bun

LABEL authors="SirXplosiv"

WORKDIR /app
COPY package.json .
RUN bun install
COPY . .

CMD ["bun", "run", "dev"]

