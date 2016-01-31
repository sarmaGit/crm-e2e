module.exports = {
  'example' : function (client) {
    client
      .url('http://bash.im/abyssbest')
      .waitForElementVisible('body', 3000)
      .assert.title('Лучшее Бездны — Цитатник Рунета')
      .click('span[class=arr]')
      .pause(1000)
      .assert.containsText('div.text',
        'Смешно слышать призывы ограждать детей от мата. Учитывая что дети матерятся больше любого взрослого. И только позврослев приходит понимание когда надо держать язык за зубами, а когда нет.')
      .end();
  }
};
