import { expect, test } from 'vitest'
import { add } from './main.js'

test('adds 1,2,3 to equal 6', () => {
  expect(add("1,2,3")).toBe(6)
})

test('add 1,2 to equal 3', () => {
  expect(add("1,2")).toBe(3)
})

test('empty string returns 0', () => {
  expect(add("")).toBe(0)
})

test('add 10,30 to equal 40', () => {
  expect(add("10,30")).toBe(40)
})

test('add 1\n2,3 to equal 6', () => { 
  expect(add("1\n2,3")).toBe(6)
})





