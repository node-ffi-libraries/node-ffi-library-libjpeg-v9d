/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.2
 * - git commit v2.0.1-1-g2b4030d on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "jmorecfg.h"
 * - SHA256: a285400f387a81873e69af2f994af29063383b8c9925e797e7e40fa6d065dcc6
 *
 * Generator options:
 * - Library: null
 * - Single file: true
 * - Prefixes: []
 * - Compiler arguments: []
 */

const FFI = require("ffi-napi");
const ref = require("ref-napi");
const ArrayType = require("ref-array-di")(ref);
const Struct = require("ref-struct-di")(ref);
const Union = require("ref-union-di")(ref);

const constants = {
  boolean: {
    FALSE: 0,
    TRUE: 1,
    0: "FALSE",
    1: "TRUE",
  },
};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix.
const types = {};

const js_uchar = ref.types.uchar;

types["js_uchar"] = js_uchar;

const functions = new FFI.Library(null, {});

module.exports = {
  constants,
  types,
  functions,
};
