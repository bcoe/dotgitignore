/* global describe,it */
const path = require('path')
require('chai').should()

describe('dotgitignore (basic)', () => {
  const basic = require('..')({
    cwd: path.join(__dirname, './fixtures/basic')
  })

  describe('ignore', () => {
    it('should return true for ignored files', () => {
      basic.ignore('.DS_Store').should.equal(true)
    })

    it('should return false for files that are not ignored', () => {
      basic.ignore('README.md').should.equal(false)
    })

    it('should return false for comments', () => {
      basic.ignore('package.json').should.equal(false)
    })

    it('should return false for matched negated lines', () => {
      basic.ignore('lib').should.equal(false)
    })
  })
})

/**
 * @see https://github.com/bcoe/dotgitignore/issues/6
 */
describe('bcoe/dotgitignore#6', () => {
  const partial = require('..')({
    cwd: path.join(__dirname, './fixtures/partial-match')
  })

  describe('ignore', () => {
    it('should return true for ignored files', () => {
      partial.ignore('partial-filename').should.equal(true)
    })

    it('should return false for files that are not ignored', () => {
      partial.ignore('not-partial-filename').should.equal(false)
    })

    it('should return false for files that are not ignored', () => {
      partial.ignore('foo-path-bar').should.equal(false)
    })
  })
})
