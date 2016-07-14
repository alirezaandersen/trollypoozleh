import chai from 'chai';
import Level from '../lib/level';
import $ from "jquery";
const expect = chai.expect;


describe('level', function () {
  after(function() {
    $('.game-table').remove();
  });

  describe('levels', function () {
    context("set number of columns, rows and invalid clicks for different levels", function () {
      context('levelOne', function () {
        it('creates 3 columns and rows and invalid color red', function () {
          const level = new Level();

          const level1 = level.levelOne();

          expect(level1.columns).to.eql(3);
          expect(level1.rows).to.eql(3);
          expect(level1.invalidClicks).to.eql(['highlighted-red']);
        });
      });

      context('levelTwo', function () {
        it('creates 4 columns and rows and 2 invalid colors', function () {
          const level = new Level();

          const level2 = level.levelTwo();

          expect(level2.columns).to.eql(4);
          expect(level2.rows).to.eql(4);
          expect(level2.invalidClicks).to.eql(['highlighted-red',
                                               'highlighted-blue']);
        });
      });

      context('levelThree', function () {
        it('creates 5 columns and rows and 3 invalid colorw', function () {
          const level = new Level();

          const level3 = level.levelThree();

          expect(level3.columns).to.eql(5);
          expect(level3.rows).to.eql(5);
          expect(level3.invalidClicks).to.eql(['highlighted-red',
                                               'highlighted-blue',
                                               'highlighted-purple']);
        });
      });

      context('levelFive', function () {
        it('creates 8 columns and rows and 3 invalid colors', function () {
          const level = new Level();

          const level4 = level.levelFour();

          expect(level4.columns).to.eql(8);
          expect(level4.rows).to.eql(8);
          expect(level4.invalidClicks).to.eql(['highlighted-red',
                                               'highlighted-blue',
                                               'highlighted-purple',
                                               'highlighted-orange']);
        });
      });

      context('levelFour', function () {
        it('creates 10 columns and rows and 4 invalid colors', function () {
          const level = new Level(5);

          const level5 = level.levelFive();

          expect(level5.columns).to.eql(10);
          expect(level5.rows).to.eql(10);
          expect(level5.invalidClicks).to.eql(['highlighted-red',
                                               'highlighted-blue',
                                               'highlighted-purple',
                                               'highlighted-orange',
                                               'highlighted-yellow']);
        });
      });
    });
  });

  describe('levelSelector', function () {
    context("selects settings for current level", function () {
      context('level 1', function () {
        it('creates 3 columns and rows and invalid color red', function () {
          const level = new Level(1);

          level.levelSelector();

          expect(level.data).to.eql(level.levelOne());
        });
      });

      context('level 2', function () {
        it('creates 4 columns and rows and 2 invalid colors', function () {
          const level = new Level(2);

          level.levelSelector();

          expect(level.data).to.eql(level.levelTwo());
        });
      });

      context('level 3', function () {
        it('creates 5 columns and rows and 3 invalid colorw', function () {
          const level = new Level(3);

          level.levelSelector();

          expect(level.data).to.eql(level.levelThree());
        });
      });

      context('level 4', function () {
        it('creates 8 columns and rows and 3 invalid colors', function () {
          const level = new Level(4);

          level.levelSelector();

          expect(level.data).to.eql(level.levelFour());
        });
      });

      context('level 5', function () {
        it('creates 10 columns and rows and 4 invalid colors', function () {
          const level = new Level(5);

          level.levelSelector();

          expect(level.data).to.eql(level.levelFive());
        });
      });
    });
  });
});
