const findUp = require('find-up')
const fs = require('fs')
const ignore = require('./lib/dotignore')
const gitignoreFilename = '.gitignore'

class DotGitignore {
  constructor (opts) {
    const gitignorePath = findUp.sync(gitignoreFilename, opts)
    const content = gitignorePath ? fs.readFileSync(gitignorePath, 'utf8') : ''
    this.matcher = ignore.createMatcher(content)
  }
  ignore (name) {
    return this.matcher.shouldIgnore(name)
  }
}

let dotgitignore = null
module.exports = function (opts) {
  if (!dotgitignore) {
    dotgitignore = new DotGitignore(opts)
  }
  return dotgitignore
}
