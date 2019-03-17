const getphone = require('../src/modulos/number');

const number = '5512997868266';

it('Number', async () => {
  expect.assertions(1);
  const data = await getphone(number);
  return expect(data.number).toEqual(number);
});

it('Type', async () => {
  expect.assertions(1);
  const data = await getphone(number);
  return expect(data.type).toEqual('Mobile');
});

it('Country code', async () => {
  expect.assertions(1);
  const data = await getphone(number);
  return expect(data.contrycode).toEqual('55');
});