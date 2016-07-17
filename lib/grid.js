"use strict";
import Cell from './cell';

class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cellArray = [];
  }

  updateGridDimensions(levelData){
    if(levelData){
      this.cellArray = [];
      this.columns = levelData.columns;
      this.rows = levelData.rows;
    }
  }

  buildGrid(levelData) {
    this.updateGridDimensions(levelData);
    let i = 0;
    const grid = document.createElement('table');
    grid.className = 'game-table';

    for (let r = 0; r < this.rows; ++r){
      let tr = grid.appendChild(document.createElement('tr'));
      for (let c = 0; c < this.columns; ++c) {
        let cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;
        let cell_data = new Cell(i);
        this.cellArray.push(cell_data);
        }
    }
    document.body.appendChild(grid);
  }
}

module.exports = Grid;
