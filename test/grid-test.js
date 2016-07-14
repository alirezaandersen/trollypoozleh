import chai from "chai";
import Grid from '../lib/grid';
import $ from "jquery";
const expect = chai.expect;

describe('grid', function () {
  after(function() {
    $('.game-table').remove();
  });

  it('has columns and rows', function () {
    const grid = new Grid({});

    expect(grid).to.have.property('columns');
    expect(grid).to.have.property('rows');
    expect(grid).to.have.property('cellArray');
  });

  it('has the right number of columns and rows', function () {
    const grid = new Grid({
      columns: 3,
      rows: 3
    });

    grid.buildGrid();

    expect($('tr').length).to.eql(3);
    expect($('td').length).to.eql(9);
  });

  it('adds number of cells to array', function () {
    const grid = new Grid({
      columns: 5,
      rows: 5
    });
    grid.buildGrid();

    expect(grid.cellArray).to.be.an.instanceof(Array);
    expect(grid.cellArray.length).to.equal(25);
  });

  context('updateGridDimensions', function () {
    xit('builds the grid according to level settings', function () {
      const grid = new Grid({
        // columns: 3,
        // rows: 3
      });

      grid.buildGrid();

      expect(grid.columns).to.eql(3);
      expect(grid.rows).to.eql(3);

      const levelData = grid.updateGridDimensions({ columns: 5, rows: 5, invalidClicks: ['highlighted-red', 'highlighted-blue']});
      grid.buildGrid(levelData);
      expect(grid.columns).to.eql(5);
      expect(grid.rows).to.eql(5);
    });
  });
});
