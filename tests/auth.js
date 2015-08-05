// -- test for checking authorization--

var user = require('./../credentials/userCredentials.js');
var site = require('./../credentials/projectConstants.js');

module.exports = {
    tags: ['auth'],
    'Authorization test with correct credentials' : function(client){
        client
                .url(site.url)
                .waitForElementVisible('body', 1000)
                .assert.visible('#auth-form')
                .setValue('input#login', user.login)
                .setValue('input#password', user.password)
                .click('input[type=submit]')
                .waitForElementVisible('#taskbar', 10000)
                .end()
    },
    'Authorization test with wrong credentials' : function(client){
        client
                .url(site.url)
                .waitForElementVisible('body', 1000)
                .assert.visible('#auth-form')
                .setValue('input#login', 'wrong_nickname')
                .setValue('input#password', 'wrong_password')
                .click('input[type=submit]')
                .assert.containsText('#error-container', 'Неверная пара логин/пароль')
                .end()
    },
    'Authorization test with banned credentials' : function(client){
        client
                .url(site.url)
                .waitForElementVisible('body', 1000)
                .assert.visible('#auth-form')
                .setValue('input#login', 'k.ulitskaya@payperprofits.com')
                .setValue('input#password', 'testtest')
                .click('input[type=submit]')
                .assert.containsText('#error-container', 'Неверная пара логин/пароль')
                .end()
    }
};