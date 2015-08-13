'use strict';

var _ = require('lodash');

var city_data = {
    "Hamburg": {population: 1.698},
    "Strasbourg": {population: 0.272},
    "Rome": {population: 2.753},
    "Dublin": {population: 0.528}
}

var add_size = function(col) {
    _.forEach(col, function(item) {

        var pop = item.population;
        if (pop > 1.0)
        {
            item.size = 'big';
        }

        else if (pop < 1.0 && pop > 0.5)
        {
            item.size = 'med';
        }

        else if(pop < 0.5)
        {
            item.size = "small";
        }
    })
    return col;
};

city_data = add_size(city_data);

console.log(city_data);
module.exports = add_size;
