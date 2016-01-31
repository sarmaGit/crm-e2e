module.exports = {
  'bash' : function (client) {
    client
      .url('http://bash.im/abyssbest')
      .waitForElementVisible('body', 3000)
      .assert.title('Лучшее Бездны — Цитатник Рунета')
      .assert.visible('#text')
	  .setValue('#text', 'кинематограф')
	  .click('button[type=submit]')
	  .pause(3000)
	  .assert.containsText('h3.search-results',
        'Результаты')
      .end();
  }
};
