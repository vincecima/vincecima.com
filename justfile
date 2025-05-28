build:
    bun run eleventy

clean:
    rm -rf output/*

install:
    bun install

serve:
    DEBUG=Eleventy* bun run eleventy --serve
