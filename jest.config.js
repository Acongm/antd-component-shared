module. exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/packages'],
  testMatch:  [
    '**/__tests__/**/*.test.{ts,tsx}',
    '**/*. test.{ts,tsx}',
  ],
  moduleNameMapper: {
    '^@my-lib/components$': '<rootDir>/packages/components/src',
    '^@my-lib/components/(. *)$': '<rootDir>/packages/components/src/$1',
    '^@my-lib/hooks$': '<rootDir>/packages/hooks/src',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!packages/*/src/**/*. d.ts',
    '!packages/*/src/**/index.ts',
    '!packages/*/src/**/*.stories.tsx',
    '! packages/*/src/test-utils/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters:  ['text', 'lcov', 'html'],
  transform: {
    '^.+\\.tsx?$':  [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
};