#!/bin/bash
docker run --name hono-dockerized -w /app -v "$(pwd)/src:/app/src" -p 3000:8080 oven/bun --init # --rm
docker cp $(pwd)/package.json hono-dockerized:/app/package.json
docker start hono-dockerized
sleep 3s
docker exec -it hono-dockerized sh -c "bun install && bun run dev"
