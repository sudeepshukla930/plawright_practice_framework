import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/swaglabsPages/loginPage';

test('login setup', async ({page}) => {

    const login = new loginPage(page);
    

    await login.goToLoginPage();

    await login.enterCredential();
    
    await login.loginButtonClicked();
   
   await login.assertLogin();

   


   await page.context().storageState({ path: 'authStore/auth.json' });

   
});