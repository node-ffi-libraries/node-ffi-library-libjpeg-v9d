/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.2
 * - git commit v2.0.1-1-g2b4030d on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "jpegint.h"
 * - SHA256: 7b1cd21b44674d6cdff9b55ba2f1e1acfb7098184a2a6cb629bbcdfc8740ec9f
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
  J_BUF_MODE: {
    JBUF_PASS_THRU: 0,
    JBUF_SAVE_SOURCE: 1,
    JBUF_CRANK_DEST: 2,
    JBUF_SAVE_AND_PASS: 3,
    0: "JBUF_PASS_THRU",
    1: "JBUF_SAVE_SOURCE",
    2: "JBUF_CRANK_DEST",
    3: "JBUF_SAVE_AND_PASS",
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
