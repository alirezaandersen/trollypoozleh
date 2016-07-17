import chai from "chai";
import Cell from '../lib/cell';
const expect = chai.expect;

describe('cell', function () {
  it('has id', function () {
    const cell = new Cell({});
    expect(cell).to.have.property('id');
  });
});
