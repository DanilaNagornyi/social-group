// eslint-disable-next-line import/no-import-module-exports
import { WebpackConfiguration } from 'webpack-cli';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {
        autodocs: true,
    },
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: WebpackConfiguration) => {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        return config;
    },
};
