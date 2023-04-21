import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aws.amazon.com/what-is/');
  await page.goto('https://aws.amazon.com/what-is/?faq-hub-cards.sort-by=item.additionalFields.sortDate&faq-hub-cards.sort-order=desc&awsf.tech-category=*all');
  await page.getByRole('link', { name: 'What is data preparation?' }).click();
});
