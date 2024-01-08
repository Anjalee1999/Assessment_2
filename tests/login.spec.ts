const{test,expect}=require("@playwright/test")

test("Valid Login", async function({page}){

    await page.goto("https://onlinelibrary.wiley.com/")

    await page.locator("input[name='username']").type("anjaleekapukotuwa@gmail.com")

    await page.locator("input[name='password']").type("Saahk@19992026")

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://onlinelibrary.wiley.com/?logout=true");



})