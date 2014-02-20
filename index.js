var parents = require('parents');
var some = require('some');

function individual(el) {
  return el.style.display === 'none' || el.style.visibility === 'hidden';
}

function nested(el) {
  return some(parents(el), function(ancestor){
    return individual(ancestor);
  });
}

module.exports = nested;
module.exports.individual = individual;
