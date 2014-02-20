
var invisible = require('is-invisible');
var assert = require('assert');
var show = require('show');
var hide = require('hide');

describe('element inside parent', function(){
  var parent;
  var child;

  before(function(){
    parent = document.createElement('div');
    child = document.createElement('p');
    parent.appendChild(child);
  });

  it('is invisible when parent is hidden', function() {
    hide(parent);
    assert(invisible(child) === true);
  });

  it('is visible when parent is visible', function() {
    show(parent);
    assert(invisible(child) === false);
  });

  it('is visible when shown', function() {
    show(child);
    assert(invisible(child) === false);
  });
});
