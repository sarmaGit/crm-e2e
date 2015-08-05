// -- test for checking company transfer functionality--

var user = require('./../credentials/userCredentials.js');
var site = require('./../credentials/projectConstants.js');
module.exports = {
    tags: ['transfer'],
    beforeEach: function (client) {
        client
                .url(site.url)
                .waitForElementVisible('body', 1000)
                .assert.visible('#auth-form')
                .setValue('input#login', user.login)
                .setValue('input#password', user.password)
                .click('input[type=submit]')
                .waitForElementVisible('#taskbar', 10000)
                .url(site.url+'/company.php?cid='+site.transfer_cid+'#ui-tabs-3')
                .pause(1000)
                .click('.action_transfer_extra');                                
    },
    "check transfer dialog": function(client){
        client
                .pause(500)
                .assert.visible("#addservice-form")
                .end();
    }
};