import { test, expect } from '@playwright/test';

test('contact form submits successfully and shows confirmation', async ({ page }) => {
  await page.goto('/contact');

  await page.getByLabel('Name').fill('Playwright Test');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Message').fill('This is an automated smoke test submission.');

  await page.getByRole('button', { name: /Send Message/i }).click();

  await expect(page.getByText(/Message sent successfully/i)).toBeVisible({ timeout: 10_000 });
});

test('contact form requires name, email, and message before submit', async ({ page }) => {
  await page.goto('/contact');
  const submitButton = page.getByRole('button', { name: /Send Message/i });
  await submitButton.click();

  // Native HTML5 required validation should block submission —
  // success message must not appear.
  await expect(page.getByText(/Message sent successfully/i)).not.toBeVisible();
});
