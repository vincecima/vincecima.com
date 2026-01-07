build:
    bun run eleventy

clean:
    rm -rf output/*

code:
    code --profile vincecima.com vincecima.com.code-workspace

install:
    bun install

serve:
    DEBUG=Eleventy* bun run eleventy --serve
