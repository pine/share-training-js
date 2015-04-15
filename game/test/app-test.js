module.exports = {
  before: function (){
    console.log('Running:  before')
  },
  
  after: function (browser){
    console.log('Running:  after')
    browser.end();
  },
  
  'should show index': function (browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 1000)
      .assert.title('エイトクイーン');
  },
  
  'put queens': function (browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('table', 1000)
      
      // 1st
      .click('tr:nth-child(7) td')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(7) td', 'queen')
      .assert.cssClassPresent('tr:nth-child(7) td:nth-child(2)', 'disable')
      .assert.cssClassPresent('tr:nth-child(6) td', 'disable')
      .assert.cssClassPresent('tr:nth-child(6) td:nth-child(2)', 'disable')
      .assert.cssClassPresent('tr:nth-child(8) td:nth-child(2)', 'disable')
      
      // 2nd
      .click('tr:nth-child(5) td:nth-child(2)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(5) td:nth-child(2)', 'queen')
      
      // 3rd
      .click('tr:nth-child(3) td:nth-child(3)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(3) td:nth-child(3)', 'queen')
      
      // 4th
      .click('tr:nth-child(1) td:nth-child(4)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(1) td:nth-child(4)', 'queen')
      
      // 5th
      .click('tr:nth-child(6) td:nth-child(5)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(6) td:nth-child(5)', 'queen')
      
      // 6th
      .click('tr:nth-child(8) td:nth-child(6)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(8) td:nth-child(6)', 'queen')
      
      // 7th
      .click('tr:nth-child(2) td:nth-child(7)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(2) td:nth-child(7)', 'queen')
      
      // 8th
      .click('tr:nth-child(4) td:nth-child(8)')
      .pause(10)
      .assert.cssClassPresent('tr:nth-child(4) td:nth-child(8)', 'queen');
  }
};