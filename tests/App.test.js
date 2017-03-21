/* global fixture test */

import { Selector } from 'testcafe'

fixture('App')
  .page('http://localhost:8080')

test('Example test', async t => {
  const welcomeMsg = await Selector('.hello h1')()
  await t.expect(welcomeMsg.innerText).eql('Welcome to Your Vue.js App')
})
