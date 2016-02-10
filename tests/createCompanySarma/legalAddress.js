// -- check legal address --

var user = require('../../credentials/userCredentials.js');
var site = require('../../credentials/projectConstants.js');
module.exports = {
    //'@disabled': true,
    tags: ['create company'],
    beforeEach: function (client) {
        client
                .url(site.url)
                .waitForElementVisible('body', 1000)
                .assert.visible('#auth-form')
                .setValue('input#login', user.login)
                .setValue('input#password', user.password)
                .click('input[type=submit]')
                .waitForElementVisible('#taskbar', 10000)
                .url(site.url + '/clients.php?tab=4#ui-tabs-4')
                .pause(5000)
                .click('#nodoubles_confirmation');
    },
    "check legal address": function (client) {
        var randomValue = new Date().getTime();
        var phone = '79617' + Math.floor(100000 + Math.random() * 900000);
        client
                .setValue('#cname', randomValue)
                .click('#directionid')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER) // hit enter
                .click('#ownerid')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER)
                .click('div#ui-accordion-accordion-panel-1 select#address-level-1')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER)
                .setValue('#phone_0', phone)
        
                .click('div#ur_address select#ur_address-level-1')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER)
                .pause(100000)
                .click('.clientsubmit')
                .pause(1000)
                .verify.cssProperty('#alert', "display", "block", "only first level selected")
                .keys(client.keys.ENTER)
                .pause(2000)

                .click('div#ui-accordion-accordion-panel-2 select#ur_address-level-2')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER)
                .click('.clientsubmit')
                .pause(1000)
                .verify.cssProperty('#alert', "display", "block", "only second level selected")
                .keys(client.keys.ENTER)
                .pause(2000)

                .click('div#ui-accordion-accordion-panel-2 select#ur_address-level-3')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER)
                .click('.clientsubmit')
                .pause(1000)
                .verify.cssProperty('#alert', "display", "block", "street and home are eampty")
                .keys(client.keys.ENTER)
                .pause(2000)
                
                
                .click('div#ui-accordion-accordion-panel-2 select#ur_address-level-1')
                .keys(client.Keys.UP_ARROW) // hit arrow down
                .keys(client.keys.ENTER)
                .setValue('div#ui-accordion-accordion-panel-2 p.ci_addr input[type=text]', 'Elm Street, 13')
                .click('.clientsubmit')
                .pause(1000)
                .verify.cssProperty('#alert', "display", "block", "first level address not selected")
                .keys(client.keys.ENTER)
                .pause(2000)

                .end();
    }
}