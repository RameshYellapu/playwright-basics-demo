// Demo Test Spec
import { test, expect } from '@playwright/test';

test('Demo Test', async ({ page, isMobile }) => {
    // Arrange
    await page.goto('https://playwright.dev')
    // Act
    if (isMobile)
        await page.click('[aria-label="Navigation bar toggle"]')
    await page.click('a:visible:has-text("Docs")')
    // Assertion
    expect(page.url()).toBe('https://playwright.dev/docs/intro')
});
