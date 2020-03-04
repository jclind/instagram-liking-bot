const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless : true});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher', {waitUntil: 'networkidle2'});
    await page.waitFor(1000);
    const instagramUsernameInput = await page.$('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input');
    await instagramUsernameInput.type('r.programminghumor');
    const instagramPasswordInput = await page.$('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input');
    await instagramPasswordInput.type('Cubepro2002');
    const instagramSignInButton = await page.$('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(4) > button')
    await page.waitFor(1000);
    instagramSignInButton.click();
    await page.waitFor(5000);
    await page.goto('https://www.instagram.com/explore/tags/programmingmemes/', {waitUntil: 'networkidle2'});
    await page.waitFor(3000);
    const firstHashtagPost = await page.$('._9AhH0');
    firstHashtagPost.click();
    await page.waitFor(1000);

    
})();
