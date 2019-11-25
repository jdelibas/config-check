'use strict'

// Test modules
const test = require('ava')
const proxyquire = require('proxyquire')

test.beforeEach(t => {
  t.context.process = {
    env: {}
  }
  t.context.config = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load('./../src/index.js', {
      process: t.context.process
    })
})

test('should return value', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = 'abcd'
  const expected = 'abcd'
  // Act
  const result = t.context.config('SOME_ENV_VAR').exec()
  // Assert
  t.is(result, expected)
})

test('should not overwrite with default value', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = 'abcd'
  const expected = 'abcd'
  // Act
  const result = t.context.config('SOME_ENV_VAR')
    .default('some default value')
    .exec()
  // Assert
  t.is(result, expected)
})

test('should apply default value', t => {
  // Arrange
  const expected = 'some default value'
  // Act
  const result = t.context.config('SOME_ENV_VAR')
    .default('some default value')
    .exec()
  // Assert
  t.is(result, expected)
})

test('should throw if required and doesnt exist', t => {
  // Arrange
  // Assert
  t.throws(function () {
    // Act
    t.context.config('SOME_ENV_VAR')
      .required()
      .exec()
  })
})

test('should return value when required', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = 'abcd'
  const expected = 'abcd'
  // Act
  const result = t.context.config('SOME_ENV_VAR')
    .required()
    .exec()
  // Assert
  t.is(result, expected)
})

test('should throw if value is not a number', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = 'abcd'
  // Assert
  t.throws(function () {
    // Act
    t.context.config('SOME_ENV_VAR')
      .int()
      .exec()
  })
})

test('should parse string as int', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = '2'
  const expected = 2
  // Act
  const result = t.context.config('SOME_ENV_VAR')
    .int()
    .exec()
  // Assert
  t.is(result, expected)
})

test('should parse string as float', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = '2.2'
  const expected = 2.2
  // Act
  const result = t.context.config('SOME_ENV_VAR')
    .float()
    .exec()
  // Assert
  t.is(result, expected)
})

test('should convert string to array', t => {
  // Arrange
  t.context.process.env.SOME_ENV_VAR = 'a,b,c,d'
  const expected = ['a', 'b', 'c', 'd']
  // Act
  const result = t.context.config('SOME_ENV_VAR')
    .list()
    .exec()
  // Assert
  t.deepEqual(result, expected)
})
