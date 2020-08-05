/// <reference path="./codecept.steps.d.ts" />

Feature('Check IKEA stock');

Scenario('Check Emeryville and Palo Alto', async (I) => {
  I.amOnPage('https://www.ikea.com/us/en/p/sektion-base-cabinet-frame-white-90265388/');
  I.click(locate('.range-revamp-stockcheck__store-link').as('Check stock'));
  I.click('Change store');
  I.click(locate('.range-revamp-change-store__store--upper').at(6).as('Emeryville store'));
  I.click('Select this store');
  let message = await I.grabTextFrom(locate('.range-revamp-store-info__section-text').as('Status'));
  I.say(message);
  I.click('Change store');
  I.click(locate('.range-revamp-change-store__store--upper').at(7).as('Palo Alto store'));
  I.click('Select this store');
  message = await I.grabTextFrom(locate('.range-revamp-store-info__section-text').as('Status'));
  I.say(message);
});
