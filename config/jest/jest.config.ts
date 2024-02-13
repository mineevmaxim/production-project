export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    modulePaths: [
        '<rootDir>src',
    ],
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleDirectories: [
        'node_modules',
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    /* eslint-disable */
    "include": [
        './config/jest/setupTests.ts',
    ],
    moduleNameMapper: {
        '\\s?css$': 'identity-obj-proxy',
    }
};
