/* global describe,it */

const dotgit = require('./')()

require('chai').should()

describe('dotgitignore', () => {
  describe('ignore', () => {
    it('should return true for ignored files', () => {
      dotgit.ignore('.DS_Store').should.equal(true)
    })

    it('should return false for files that are not ignored', () => {
      dotgit.ignore('README.md').should.equal(false)
    })
  })
})
