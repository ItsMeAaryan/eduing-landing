import { test, expect } from '@playwright/test';

test('Get started CTA is visible without scrolling (regression: was hidden until scroll>80px)', async ({ page }) => {
  await page.goto('/');
  const cta = page.getByRole('link', { name: /Get started/i });
  await expect(cta).toBeVisible();
});

test('nav Features link navigates to the dedicated /features page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'Features' }).click();
  await expect(page).toHaveURL(/\/features/);
});

test('nav About link navigates correctly', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/\/about/);
});

test('footer has no dead "#" placeholder links', async ({ page }) => {
  await page.goto('/');
  const footerLinks = page.locator('footer a');
  const count = await footerLinks.count();
  for (let i = 0; i < count; i++) {
    const href = await footerLinks.nth(i).getAttribute('href');
    expect(href).not.toBe('#');
  }
});
