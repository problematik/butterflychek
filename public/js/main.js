class Picker {
    constructor(el, options = {
        initialValue: 3,
        valueSetterElement: null
    }) {
        this.VALUE_CHANGED = 'VALUE_CHANGED';

        // null is valid value
        options.initialValue = options.hasOwnProperty('initialValue') ? options.initialValue : 3;
        options.valueSetterElement = options.valueSetterElement || null;

        this.el = $(el);

        if(options.valueSetterElement === null) {
            options.valueSetterElement = el;
        }

        this.setter = $(options.valueSetterElement);

        this.value = options.initialValue;

        this.el.find('.item').on('click', this.setValue.bind(this));

        this.setterElementAddValueClass();
    }

    setValue(e) {
        this.setterElementRemoveValueClass();
        this.value = $(e.currentTarget).data('value');
        this.setterElementAddValueClass();

        this.el.emit(this.VALUE_CHANGED);
    }

    on(event, callback) {
        this.el.on(event, callback);
    }

    setterElementRemoveValueClass() {
        this.setter.removeClass(`is-${this.value}`);
    }

    setterElementAddValueClass() {
        if(this.value !== null) {
            this.setter.addClass(`is-${this.value}`);
        }
    }
}

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

        this.picker = new Picker($('.overall .items-wrapper'), {
            valueSetterElement: this.el,
            initialValue: this.score
        });

        this.picker.on(this.picker.VALUE_CHANGED, () => {
            this.score = this.picker.value;
            this.selected();
        });
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
}

    }
    setParentScore() {
        this.el.addClass(`is-${this.score}`);
    }
}

new Overall();