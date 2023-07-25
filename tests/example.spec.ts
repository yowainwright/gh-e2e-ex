import { test, expect } from '@playwright/test';

test('basic repository test', async ({ page }) => {
  await page.goto('https://github.com/yowainwright/gh-e2e-ex/');
  const readmeTitle = page.locator('.markdown-body h1').first();
  await expect(readmeTitle).toContainText('Github E2E Example');
});
