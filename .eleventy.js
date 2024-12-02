import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.setOutputDirectory("public")
    eleventyConfig.addBundle("css");

    eleventyConfig.addPlugin(feedPlugin, {
        type: "json",
        outputPath: "feed.json",
        collection: {
            name: "posts"
        },
        metadata: {
            base: "https://vincecima.com",
            language: "en",
            title: "vincecima.com",
            author: {
                name: "Vince Cima",
            }
        }
    });
    eleventyConfig.addPlugin(feedPlugin, {
        collection: {
            name: "posts"
        },
        metadata: {
            base: "https://vincecima.com",
            language: "en",
            title: "vincecima.com",
            author: {
                name: "Vince Cima",
            }
        }
    });
};
