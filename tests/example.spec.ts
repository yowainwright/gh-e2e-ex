import { test, expect } from '@playwright/test';

const pullRequest = process.env.PULL_REQUEST_NUMBER || undefined

test('basic repository test', async ({ page }) => {
  await page.goto('https://github.com/yowainwright/gh-e2e-ex/');
  const readmeTitle = page.locator('.markdown-body h1').first();
  await expect(readmeTitle).toContainText('Github E2E Example');
});

test('basic PR test', async ({ page }) => {
  const url = pullRequest ?
    `https://github.com/yowainwright/gh-e2e-ex/pull/${pullRequest}` :
    'https://github.com/yowainwright/gh-e2e-ex/pulls'
  await page.goto(url);
  await expect(page).toHaveURL(url);
  const firstHeader = page.getByText('Created Pull Request Example');
  await expect(firstHeader).toBeDefined();
})
