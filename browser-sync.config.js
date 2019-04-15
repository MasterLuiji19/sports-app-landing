/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
// eslint-disable-next-line no-undef
module.exports = {
  'ui': {
    'port': 3001
  },
  'files': false,
  'watchEvents': [
    'change'
  ],
  'watch': true,
  'ignore': [],
  'single': false,
  'watchOptions': {
    'ignoreInitial': true
  },
  'server': {
    baseDir: 'src'
  },
  'proxy': false,
  'port': 9000,
  'middleware': false,
  'serveStatic': [],
  'ghostMode': {
    'clicks': false,
    'scroll': false,
    'location': false,
    'forms': {
      'submit': false,
      'inputs': false,
      'toggles': false
    }
  },
  'logLevel': 'info',
  'logPrefix': 'Browsersync',
  'logConnections': false,
  'logFileChanges': true,
  'logSnippet': true,
  'rewriteRules': [],
  'open': 'local',
  'browser': 'default',
  'cors': false,
  'xip': false,
  'hostnameSuffix': false,
  'reloadOnRestart': false,
  'notify': true,
  'scrollProportionally': true,
  'scrollThrottle': 0,
  'scrollRestoreTechnique': 'window.name',
  'scrollElements': [],
  'scrollElementMapping': [],
  'reloadDelay': 0,
  'reloadDebounce': 500,
  'reloadThrottle': 0,
  'plugins': [],
  'injectChanges': true,
  'startPath': null,
  'minify': true,
  'host': null,
  'localOnly': false,
  'codeSync': true,
  'timestamps': true,
  'clientEvents': [
    'scroll',
    'scroll:element',
    'input:text',
    'input:toggles',
    'form:submit',
    'form:reset',
    'click'
  ],
  'socket': {
    'socketIoOptions': {
      'log': false
    },
    'socketIoClientConfig': {
      'reconnectionAttempts': 50
    },
    'path': '/browser-sync/socket.io',
    'clientPath': '/browser-sync',
    'namespace': '/browser-sync',
    'clients': {
      'heartbeatTimeout': 5000
    }
  },
  'tagNames': {
    'less': 'link',
    'scss': 'link',
    'css': 'link',
    'jpg': 'img',
    'jpeg': 'img',
    'png': 'img',
    'svg': 'img',
    'gif': 'img',
    'js': 'script'
  },
  'tunnel': true,
  'injectNotification': false
};
