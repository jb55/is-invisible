
var hidden = require('is-invisible');
var assert = require('assert');
var show = require('show');
var hide = require('hide');
var invisible = require('invisible');
var visible = require('visible');

function reset(el){
  el.style.display = "block";
  el.style.visibility = "";
}

describe('element inside parent', function(){
  var parent;
  var child;

  before(function(){
    parent = document.createElement('div');
    child = document.createElement('p');
    parent.appendChild(child);
  });

  beforeEach(function(){
    reset(parent);
    reset(child);
  });

  it('is invisible when parent is hidden', function() {
    hide(parent);
    assert(hidden(child) === true);
  });

  it('is visible when parent is shown', function() {
    show(parent);
    assert(hidden(child) === false);
  });

  it('is visible when shown', function() {
    show(child);
    assert(hidden(child) === false);
  });

  it('is invisible when parent is invisible', function() {
    invisible(parent);
    assert(hidden(child) === true);
  });

  it('is visible when parent is visible', function() {
    visible(parent);
    assert(hidden(child) === false);
  });

  it('is visible when visible', function() {
    visible(child);
    assert(hidden(child) === false);
  });

  it('is invisible when invisible', function() {
    invisible(child);
    assert(hidden(child) === true);
  });
});
