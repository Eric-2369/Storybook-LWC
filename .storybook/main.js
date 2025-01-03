import LwcWebpackPlugin from 'lwc-webpack-plugin';
import remarkGfm from 'remark-gfm';

export default {
    stories: ['../stories/*.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        }
    ],
    framework: {
        name: '@storybook/web-components-webpack5',
        options: {}
    },
    webpackFinal: async (config) => {
        config.plugins.push(new LwcWebpackPlugin());

        config.module.rules = config.module.rules.filter(
            (rule) => String(rule.test) !== String(/\.css$/)
        );

        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: [/node_modules\/lightning-base-components/, /src\/modules/]
        });

        return config;
    }
};
