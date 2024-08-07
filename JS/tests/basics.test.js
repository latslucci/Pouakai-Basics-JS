// basics.test.js

const {
    myName,
    age,
    isStudent,
    favoriteColor,
    greeting,
    myUndefined,
    myFavColor,
  } = require('../basics');
  
  test('myName is defined and is a string', () => {
    expect(typeof myName).toBe('string');
  });
  
  test('age is defined and is a number', () => {
    expect(typeof age).toBe('number');
  });
  
  test('isStudent is defined and is a boolean', () => {
    expect(typeof isStudent).toBe('boolean');
  });
  
  test('favoriteColor is defined and is undefined. If you have passed this before but are no longer passing it, it is becasue you have redefined it for Question 8. it is okay to mark this as correct if so', () => {
    expect(favoriteColor).toBeUndefined();
  });
  
  test('greeting is defined and is "Hello, world!"', () => {
    expect(greeting).toBe("Hello, world!");
  });
  
  test('myUndefined is defined and is undefined', () => {
    expect(myUndefined).toBeUndefined();
  });
  
  test('myFavColor is defined and is a string', () => {
    expect(typeof myFavColor).toBe('string');
  });
  
  test('favoriteColor is equal to myFavColor', () => {
    expect(favoriteColor).toBe(myFavColor);
  });