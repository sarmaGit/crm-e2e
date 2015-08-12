// -- test for checking company creation --

var user = require('./../credentials/userCredentials.js');
var site = require('./../credentials/projectConstants.js');
var stamp = {};
var image_cb = function(image_url){
  stamp.src =   image_url;
};
module.exports = {
    tags: ['test bills'],
    beforeEach: function (client) {
        client
                .url(site.url)
                .waitForElementVisible('body', 1000)
                .assert.visible('#auth-form')
                .setValue('input#login', user.login)
                .setValue('input#password', user.password)
                .click('input[type=submit]')
                .waitForElementVisible('#taskbar', 10000)
                .url(site.url + '/payments.php?create_date_from=11.07.2010&create_date_to=11.08.2015')
                .waitForElementVisible('#sp_1_jqPayments_all_toppager', 10000)
                //.click('#gs_ur_face')
                ;
    },
    // --KRASNODAR--
    "IP Sorokin Krasnodar html&stamp stamp image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_11"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("div>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
    "IP Sorokin Krasnodar html&stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_11"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
     "IP Sorokin Krasnodar html without stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_11"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
    // --LIPETSK--
        "IP Sorokin Lipetsk html&stamp stamp image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_15"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("div>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
    "IP Sorokin Lipetsk html&stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_15"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
     "IP Sorokin Lipetsk html without stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_15"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },    
    // --TOLKOVAIA REKLAMA --
    "TOLKOVAIA REKLAMA html&stamp stamp image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_12"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("div>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
    "TOLKOVAIA REKLAMA html&stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_12"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
     "TOLKOVAIA REKLAMA html without stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_12"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
    // --GOLOVKO --    
    "GOLOVKO html&stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_14"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
     "GOLOVKO html without stamp logo image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_14"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("td>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    },
    // --Prihodnik Sorokin (has no logo) --
    "Prihodnik Sorokin html&stamp stamp image": function (client) {
        var client_id;
        var logo;        
        
        client
                .click('#gs_ur_face')
                .click('#gs_ur_face option[value="_7"]')
                .keys(client.Keys.ENTER)
                .execute(function (cssSelector) {
                    var values = [];
                    $(cssSelector).each(function () {
                        values.push($(this).text());
                        //console.log(values);
                    });
                    return values;
                }, ['.payment_id'], function (result) {                    
                    client_id = result.value[0];
                    client.url(site.url+'/payment_blank.php?pid='+client_id+'&type=html&stamp=1');
                })
                .waitForElementVisible(".body_table",1000)
                .getAttribute("div>img", "src", function(result){
                    client.url(result.value);                    
                })
                .waitForElementVisible("img", 1000)                
                .end();
    } 
};