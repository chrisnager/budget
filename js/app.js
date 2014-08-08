(function () {
    var app = angular.module('budget', []);

    app.controller('BudgetController', function() {
        this.entries = chunks;

        this.getTotal = function(){
            var total = 0;

            for ( var i = 0; i < this.entries.length; i++ ) {
                var entry = this.entries[i];

                total += (parseFloat( entry.amount ));
            }

            return total;
        }
    });

    var chunks = [
        {
            name: 'Salary',
            description: 'This accounts for two pay periods per month.',
            income: true,
            amount: '100'
        },
        {
            name: 'Rent',
            amount: '1000000'
        },
        {
            name: 'Travel',
            description: 'Planes, trains, and automobiles.',
            amount: '80.25'
        },
        {
            name: 'Groceries',
            description: 'Ya gotta eat',
            amount: '20.5'
        },
        {
            name: 'Medical',
            amount: '95.75'
        },
        {
            name: 'Fun',
            description: 'Going out and stuff',
            amount: '105.25'
        }
    ]
})();
