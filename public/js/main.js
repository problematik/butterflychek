class Overall {
    constructor() {
        this.el = $('.overall .scores');

        this.score = (() => {
            let score = document.location.search.match(/v=(\d)/);

            score = score === null ? 3 : parseInt(score[1], 10);

            return score > 5 ? 3 : score < 0 ? 3 : score;
        })();

        this.state = 'selected';

        this.el.find('.state span').on('click', this.selecting.bind(this));
        this.el.find('.state svg').on('click', this.selecting.bind(this));

        this.el.find('.items span').on('click', this.selectScore.bind(this));
        this.setParentScore();
    }
    selectScore(e) {
        this.clearParentScore();
        this.score = $(e.currentTarget).data('score');
        this.setParentScore();
        this.selected();
    }
    selected() {
        this.toggleSelectionClasses();
    }
    selecting() {
        this.toggleSelectionClasses();
    }
    toggleSelectionClasses() {
        this.el.toggleClass('selected selecting');
    }

    clearParentScore() {
        this.el.removeClass(`is-${this.score}`);
    }
    setParentScore() {
        this.el.addClass(`is-${this.score}`);
    }
}

new Overall();
