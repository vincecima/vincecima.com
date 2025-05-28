import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import dayjs from "dayjs";


export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.setLayoutsDirectory("_layouts");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.addPassthroughCopy("./site/public/bundle.css");
    eleventyConfig.setOutputDirectory("output");
    eleventyConfig.addBundle("css");

    eleventyConfig.addFilter('formatDate', (date, format) => dayjs(date).format(format));

    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
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
