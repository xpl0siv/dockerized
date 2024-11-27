# Hono Bun Dockerized

Execute the following command to run (create,start,attach) the docker container:
```sh
docker run --rm --name hono-dockerized -w /app -v "$(pwd):/app" -p 3000:3000 oven/bun sh -c "bun install && bun run dev"
```

To install dependencies && run:
```sh
bun install && bun run dev
```

open http://localhost:3000
