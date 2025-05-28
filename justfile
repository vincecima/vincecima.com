build:
    bun run eleventy

clean:
    rm -rf public/*

install:
    bun install

serve:
    DEBUG=Eleventy* bun run eleventy --serve
