const tap = require('tap')

const lib = require('./lib')

tap.test('getUrlStatus', async (t) => {
	t.equal(await lib.getUrlStatus('https://google.com'), 200)
	t.equal(await lib.getUrlStatus('https://nonexistent.example'), 0)
	t.end()
})

tap.test('getAggregateStatus', (t) => {
	t.equal(lib.getAggregateStatus([]), 200)
	t.equal(lib.getAggregateStatus([200, 200]), 200)
	t.equal(lib.getAggregateStatus([200, 0]), 503)
	t.equal(lib.getAggregateStatus([200, 404]), 503)
	t.equal(lib.getAggregateStatus([200, 500]), 503)
	t.equal(lib.getAggregateStatus([200, 503]), 503)
	t.end()
})
