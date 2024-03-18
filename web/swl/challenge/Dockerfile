FROM oven/bun:1

COPY package.json bun.lockb .
RUN bun install --frozen-lockfile --production

COPY tsconfig.json tsconfig.json
COPY src src

CMD ["bun", "run", "src/index.tsx"]
