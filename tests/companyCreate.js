// -- test for checking company creation --

var user = require('./../credentials/userCredentials.js');
var site = require('./../credentials/projectConstants.js');
module.exports = {
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
                .url(site.url+'/clients.php?tab=4#ui-tabs-4')
                .pause(1000)
                .click('#nodoubles_confirmation');                
    },
    "check company name requiring": function(client){
        client
                .setValue('#cname', '')
                .click('.clientsubmit')
                .assert.attributeContains('#cname', 'class', 'error')
                .assert.containsText('label[for=cname]', 'Необходимо указать название(не менее 6 символов)')
                .end();
    },
    "check company type of activity": function(client){
        client
                .click('.clientsubmit')                
                .assert.attributeContains('#directionid', 'class', 'error')
                .end();
    },
    
    "check valid company creation": function(client){
        //console.log(client.Keys);
        var randomValue = new Date().getTime();
        var phone = '79617'+ Math.floor(100000 + Math.random() * 900000);
        client
                .setValue('#cname', randomValue)
                .click('#directionid')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER) // hit enter
                .click('#ownerid')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER) // hit enter
                .click('#country_id')
                .keys(client.Keys.DOWN_ARROW) // hit arrow down
                .keys(client.keys.ENTER) // hit enter
                .pause(500)
                .click('input[name="addr"]')
                .click('#region_id')
                .pause(500)
                .keys(client.Keys.UP_ARROW) // hit arrow up
                .keys(client.keys.ENTER) // hit enter
                .click('#cname')                
                .pause(500)
                .click('#cityid')
                .keys(client.Keys.UP_ARROW) // hit arrow up
                .keys(client.keys.ENTER) // hit enter
                .setValue('input[name="addr"]', randomValue)
                .setValue('#phone_0', phone)
                .click('.clientsubmit')
                .pause(1000)
                .assert.containsText('.ci_name',randomValue)
                .pause(1000)
                .end();
    }    
};