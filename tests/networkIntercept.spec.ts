// __tests__/interaction.spec.ts

import { test, expect } from '@playwright/test';


test.describe('Intercepting Network request', () => {
 

    test('Blocking images on webpage', async ({page}) => {
        await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await page.goto('https://playwright.dev/');
        await page.pause();
    });

   
});
