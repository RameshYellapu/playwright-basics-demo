// Playwright Config
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: 'tests',
    testIgnore: '*wip/*',
    timeout: 30000,
    retries: 1,
    workers: 2,
    use: {
        baseURL: 'https://playwright.dev',
        screenshot: 'only-on-failure',
        video: 'off',
        trace: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'iphone',
            use: {...devices['iPhone 12 Pro'],},
        }
    ],
};
export default config;