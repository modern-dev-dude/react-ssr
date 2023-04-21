/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { test, expect } from '@playwright/test';

test('finds hydrated content', async ({ page }) => {
  await page.goto('https://aws.amazon.com/what-is/?faq-hub-cards.sort-by=item.additionalFields.sortDate&faq-hub-cards.sort-order=desc&awsf.tech-category=*all');
  await page.getByRole('link', { name: 'What is data preparation?' }).click();
  const slotHtml = page.locator('.eb-faq');
 

  console.log("slotHtml", slotHtml);
  const hyd = await slotHtml.getAttribute("data-eb-hydrated")
  console.log("hyd", hyd)
  expect(hyd).toEqual("done")
});


