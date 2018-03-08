'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keywordsError = exports.checkForFaultyFields = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const keywords = [`length`];

const getAllObjKeys = obj => {
  const all = [];
  const getObjKeys = obj => (0, _keys2.default)(obj).forEach(key => {
    if (obj[key] instanceof Object) {
      getObjKeys(obj[key]);
    }
    all.push(key);
  });
  getObjKeys(obj);

  return all;
};

const checkForKeyword = key => keywords.includes(key);

// Checking if the query we pass in config has any of the faulty fields
const checkForFaultyFields = exports.checkForFaultyFields = userQueryResult => {
  const allKeys = getAllObjKeys(userQueryResult);
  const faultyFields = (0, _ramda.filter)(checkForKeyword, allKeys);

  return faultyFields.length;
};

const keywordsError = exports.keywordsError = `Found unaliased reserved field with a name matching one of [ ${keywords} ]. Build failed! Please refer to the caveats in the gatsby-source-graphcms README for a solution: https://github.com/GraphCMS/gatsby-source-graphcms#length-must-be-aliased`;