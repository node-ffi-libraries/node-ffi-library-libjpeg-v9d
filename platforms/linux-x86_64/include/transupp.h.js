/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.1
 * - git commit v2.0.1-1-g9e27804 on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "transupp.h"
 * - SHA256: 49735957158bad336124cda9f00d9986f4a3d461d9d40614dd82c83a1c4c1d6d
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
  JCOPY_OPTION: {
    JCOPYOPT_NONE: 0,
    JCOPYOPT_COMMENTS: 1,
    JCOPYOPT_ALL: 2,
    0: "JCOPYOPT_NONE",
    1: "JCOPYOPT_COMMENTS",
    2: "JCOPYOPT_ALL",
  },
  JCROP_CODE: {
    JCROP_UNSET: 0,
    JCROP_POS: 1,
    JCROP_NEG: 2,
    JCROP_FORCE: 3,
    JCROP_REFLECT: 4,
    0: "JCROP_UNSET",
    1: "JCROP_POS",
    2: "JCROP_NEG",
    3: "JCROP_FORCE",
    4: "JCROP_REFLECT",
  },
  JXFORM_CODE: {
    JXFORM_NONE: 0,
    JXFORM_FLIP_H: 1,
    JXFORM_FLIP_V: 2,
    JXFORM_TRANSPOSE: 3,
    JXFORM_TRANSVERSE: 4,
    JXFORM_ROT_90: 5,
    JXFORM_ROT_180: 6,
    JXFORM_ROT_270: 7,
    JXFORM_WIPE: 8,
    JXFORM_DROP: 9,
    0: "JXFORM_NONE",
    1: "JXFORM_FLIP_H",
    2: "JXFORM_FLIP_V",
    3: "JXFORM_TRANSPOSE",
    4: "JXFORM_TRANSVERSE",
    5: "JXFORM_ROT_90",
    6: "JXFORM_ROT_180",
    7: "JXFORM_ROT_270",
    8: "JXFORM_WIPE",
    9: "JXFORM_DROP",
  },
};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix, but also under the "types" object to be able to reference them recursively.
const types = {};

const js_uchar = ref.types.uchar;

types["js_uchar"] = js_uchar;

const functions = new FFI.Library(null, {});

module.exports = {
  constants,
  types,
  functions,
};
