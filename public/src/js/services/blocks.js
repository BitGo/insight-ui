'use strict';

angular.module('insight.blocks')
  .factory('Block',
    function($resource) {
    return $resource(window.apiPrefix + '/block/:blockHash', {
      blockHash: '@blockHash'
    }, {
      get: {
        method: 'GET',
        interceptor: {
          response: function (res) {
            return res.data;
          },
          responseError: function (res) {
            if (res.status === 404) {
              return res;
            }
          }
        }
      }
    });
  })
  .factory('Blocks',
    function($resource) {
      return $resource(window.apiPrefix + '/blocks');
  })
  .factory('LatestBlocks',
    function($resource) {
      return $resource(window.apiPrefix + '/blocks/latest', {}, { get:  { method:'GET', timeout: 60000 } });
    })
  .factory('BlockByHeight',
    function($resource) {
      return $resource(window.apiPrefix + '/block-index/:blockHeight');
  });
