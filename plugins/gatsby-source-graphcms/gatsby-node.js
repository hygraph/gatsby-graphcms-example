'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlRequest = require('graphql-request');

var _ramda = require('ramda');

var _util = require('./util');

var _constants = require('./constants');

var _faultyKeywords = require('./faulty-keywords');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sourceNodes = (() => {
  var _ref = (0, _asyncToGenerator3.default)(function* ({ boundActionCreators, reporter }, { endpoint, token, query }) {
    if (query) {
      const createNode = boundActionCreators.createNode;


      const clientOptions = {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined
        }
      };

      const client = new _graphqlRequest.GraphQLClient(endpoint, clientOptions);

      const userQueryResult = yield client.request(query);

      // Keywords workaround
      if ((0, _faultyKeywords.checkForFaultyFields)(userQueryResult)) {
        reporter.panic(`gatsby-source-graphcms: ${_faultyKeywords.keywordsError}`);
      }

      if (_constants.DEBUG_MODE) {
        const jsonUserQueryResult = (0, _stringify2.default)(userQueryResult, undefined, 2);
        console.log(`\ngatsby-source-graphcms: GraphQL query results: ${jsonUserQueryResult}`);
      }
      (0, _ramda.forEachObjIndexed)((0, _util.createNodes)(createNode, reporter), userQueryResult);
    } else {
      reporter.panic(`gatsby-source-graphcms: you need to provide a GraphQL query in the plugin 'query' parameter`);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();