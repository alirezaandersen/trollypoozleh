import chai from 'chai';
import Game from '../lib/game';
import $ from "jquery";
const expect = chai.expect;

describe('game', function () {
  after(function() {
    $('.game-table').remove();
  });

  context('start', function () {
    it('starts the game', function () {
      const game = new Game(2, 2);

      game.start();

      expect($('.game-table').length).to.equal(1);
      expect(game.clicks).to.equal(1);
      expect(game.interval > 0).to.equal(true);
    });

    it('starts click event handlers', function () {
      const game = new Game(2, 2);

      game.start();
      $('.game-table td').first().trigger('click');

      expect(game.clicks).to.equal(2);
    });
  });

  describe('handleOutcome', function () {
    context('when outcome is won', function () {
      it('adds a new game level', function () {
        const game = new Game(2, 2);
        const outcome = "win";
        game.start();
        expect(game.currentLevel).to.equal(1);
        expect($('#winGameModal').is(":visible")).to.equal(false);
        game.handleOutcome(outcome);

        expect(game.currentLevel).to.equal(2);
        // expect($('#winGameModal').is(":visible")).to.equal(true);
      });
    });

    context('when outcome is lost', function () {
      it('resets the current game level', function (done) {
        this.timeout(0); // check on duration of this function
        const game = new Game(2, 2);
        const outcome = "lost";
        game.start();
        expect(game.currentLevel).to.equal(1);
        expect($('#winGameModal').is(":visible")).to.equal(false);
        game.handleOutcome(outcome);

        expect(game.currentLevel).to.equal(1);
        done();
        // expect($('#winGameModal').is(":visible")).to.equal(true);
      });
    });
  });

  context('playAgain', function () {
    it('resets lives to 3 lives', function () {
      const game = new Game(2, 2);

      game.start();

      expect(game.lives.length).to.equal(3);

      game.lives.length = 1;
      game.playAgain();

      expect(game.lives.length).to.equal(3);

    });

    context('from current level or level 1', function () {
      xit('when user decides for current level', function () {
        const game = new Game(2, 2);

        game.start();

        game.currentLevel = 2;
        game.lives.length = 0;

        game.playAgain();
        // $('button#close1').trigger('click');

        expect(game.currentLevel).to.equal(2);
      });

      xit('when user decides for current level', function () {
        const game = new Game(2, 2);

        game.start();

        game.currentLevel = 3;
        game.lives.length = 0;

        game.playAgain();
        // $('button#close1').trigger('click');

        expect(game.currentLevel).to.equal(1);
      });
    });
  });

  context('end', function () {
    it("resets the game's state", function () {
      const game = new Game(2, 2);
      game.start();
      $('.game-table td').first().trigger('click', 'td');

      game.end();

      expect($('.game-table').length).to.equal(0);
      expect(game.clicks).to.equal(1);
    });

    it('clears click event handlers', function () {
      const game = new Game(2, 2);
      expect(game.clicks).to.equal(1);

      game.start();
      $('.game-table td').first().trigger('click');

      expect(game.clicks).to.equal(2);

      game.end();
      $('.game-table td').first().trigger('click');

      expect(game.clicks).to.equal(1);
    });
  });
});
