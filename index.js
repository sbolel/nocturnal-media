'use strict'

const src = [
  'app.js',
  'assets/js/form.js'
]

const scripts = (() => {
  const app = []
  const dist = []
  for (let i in src) {
    app.push(`./app/src/${src[i]}`)
    dist.push(`./app/dist/${src[i]}`)
  }
  return {app, dist}
})()

module.exports = {
  app: scripts.app,
  dist: scripts.dist,
  vendor: [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/fancybox-plus/dist/jquery.fancybox-plus.js',
    './node_modules/jquery.backstretch/jquery.backstretch.js',
    './app/assets/js/bootstrap-nav.js',
    './node_modules/angular/angular.js',
    './node_modules/angular-sanitize/angular-aria.js',
    './node_modules/angular-animate/angular-animate.js',
    './node_modules/angular-sanitize/angular-sanitize.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js'
  ],
  styles: [
    './node_modules/fancybox-plus/css/jquery.fancybox-plus.css'
  ]
}
