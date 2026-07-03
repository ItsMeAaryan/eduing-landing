import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', title: /EDUING/i },
  { path: '/about', title: /About/i },
  { path: '/contact', title: /Contact/i },
  { path: '/features', title: /Features/i },
  { path: '/privacy', title: /Privacy/i },
  { path: '/terms', title: /Terms/i },
  { path: '/trademark', title: /Trademark/i },
];

for (const route of routes) {
  test(`${route.path} loads successfully`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(route.title);
  });
}

test('404 page renders for unknown routes', async ({ page }) => {
  const response = await page.goto('/this-route-does-not-exist');
  expect(response?.status()).toBe(404);
});
