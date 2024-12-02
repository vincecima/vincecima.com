export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.setOutputDirectory("public")
    eleventyConfig.addBundle("css");
};
