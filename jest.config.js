module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(jpg|gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
    },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    setupFiles: [
        '<rootDir>/jest.setup.js'
    ],
    moduleFileExtensions: [
        'js',
        'json',
        'jsx'
    ],
    testRegex: '\/test\/.*\\.js$',
    transformIgnorePatterns: [
        '/node_modules/(?!test-component).+\\.js$'
    ]
}
