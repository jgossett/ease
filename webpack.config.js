const AUTOPREFIXER_PLUGIN_NAME = "autoprefixer";
const TAILWIND_PLUGIN_NAME = "tailwindcss"
const TAILWIND_CONFIGURATION_PATH = "./tailwind.config.js";
const INDEX_NOT_FOUND = -1;

const addTailwindConfiguration = (webpackConfiguration) => {
  const tailwindConfiguration = loadTailwindConfiguration();
  if(!tailwindConfiguration){
    console.error('Could not find Tailwind configuration file.', { tailwindConfiguration });
    return webpackConfiguration;
  }

  for (const rule of webpackConfiguration.module.rules) {
    // Skip rules without uses.
    if (!rule.use || 0 === rule.use.length ) {
      continue;
    }

    // Find all the PostCSS rule uses.
    const postcssRuleUses = rule.use.filter(_ => _.options && _.options.postcssOptions)

    for (const postcssRuleUse of postcssRuleUses) {
      const postcssOptionsGeneratorSnapshot = postcssRuleUse.options.postcssOptions;

      // Decorate postcssOptions generator function. Replaces with a function that inserts the Tailwind plugin before
      // Autoprefixer plugin.
      postcssRuleUse.options.postcssOptions = (loader) => {
        const postCssOptions = postcssOptionsGeneratorSnapshot(loader);
        const autoprefixerOptionsIndex = postCssOptions.plugins.findIndex(
          _ => _.postcssPlugin && _.postcssPlugin.toLowerCase() === AUTOPREFIXER_PLUGIN_NAME
        );

        if(autoprefixerOptionsIndex === INDEX_NOT_FOUND){
          console.error(`Could not found ${AUTOPREFIXER_PLUGIN_NAME} in the postcss loader.`);
          return postCssOptions;
        }

        postCssOptions.plugins.splice(autoprefixerOptionsIndex, 0, [TAILWIND_PLUGIN_NAME, tailwindConfiguration]);
        return postCssOptions;
      };
    }
  }

  return webpackConfiguration;
}

const loadTailwindConfiguration = () => {
  return require(TAILWIND_CONFIGURATION_PATH);
}

module.exports = (webpackConfiguration) => addTailwindConfiguration(webpackConfiguration)
