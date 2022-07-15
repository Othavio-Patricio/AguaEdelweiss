const { describe } = require('yargs');
const headerChangeWhenScroll = require('../src/headerChangeWhenScroll');

describe('Testing if header is changing when scrolling', () => {
  const header = document.getElementById('header');
  const innerHeader = document.getElementById('inner-header');
  const navText1 = document.getElementsByClassName('nav-text')[0];
  const navText2= document.getElementsByClassName('nav-text')[1];
  test('Test to see if when scrolling down header heigth decrease', () => {
    expect
  });
});
