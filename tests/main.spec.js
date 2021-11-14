/* eslint-disable no-undef */
describe('Main', () => {
  // roda uma vez, antes do bloco
  before(() => { console.log('before'); });

  // roda uma vez, depois do bloco
  after(() => { console.log('after'); });

  // roda todas as vezes, antes do cada bloco
  beforeEach(() => { console.log('beforeEach'); });

  // roda todas as vezes, depois do cada bloco
  afterEach(() => { console.log('afterEach'); });

  it('test 1', () => { console.log('test1'); });

  it('test 2', () => { console.log('test2'); });
});
