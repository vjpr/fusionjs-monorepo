module.exports = {
  hooks: {
    readPackage,
    afterAllResolved,
  },
}

function afterAllResolved(shr, context) {
  //context.log(`Resolved ${Object.keys(shr.packages).length} packages`)
  return shr
}

function readPackage(pkg) {
  //console.log(pkg.name)
  // ---
  //if (pkg.name === 'foo') {
  //  pkg.dependencies['bar'] = '*'
  //}
  //if (pkg.dependencies && pkg.dependencies['args']) {
  //  const workspaceRoot = process.env.PNPM_WORKSPACE_ROOT
  //  const newPkgPath = require('path').join(workspaceRoot, 'packages/args')
  //  // If its a subdep, this relative path won't be correct.
  //  //const newPkgPathRel = require('path').relative(process.cwd(), newPkgPath)
  //  console.log('args', newPkgPath)
  //  pkg.dependencies['args'] = `link:${newPkgPath}`
  //  console.log(pkg)
  //}
  // ---
  return pkg
}
