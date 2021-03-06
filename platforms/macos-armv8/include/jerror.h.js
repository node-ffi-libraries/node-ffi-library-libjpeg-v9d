/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.2
 * - git commit v2.0.1-1-g2b4030d on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "jerror.h"
 * - SHA256: 7cda61a9413f996ace004b3523381170905be368b8e56067e33f15f178c96319
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
  J_MESSAGE_CODE: {
    JMSG_NOMESSAGE: 0,
    JERR_BAD_ALIGN_TYPE: 1,
    JERR_BAD_ALLOC_CHUNK: 2,
    JERR_BAD_BUFFER_MODE: 3,
    JERR_BAD_COMPONENT_ID: 4,
    JERR_BAD_CROP_SPEC: 5,
    JERR_BAD_DCT_COEF: 6,
    JERR_BAD_DCTSIZE: 7,
    JERR_BAD_DROP_SAMPLING: 8,
    JERR_BAD_HUFF_TABLE: 9,
    JERR_BAD_IN_COLORSPACE: 10,
    JERR_BAD_J_COLORSPACE: 11,
    JERR_BAD_LENGTH: 12,
    JERR_BAD_LIB_VERSION: 13,
    JERR_BAD_MCU_SIZE: 14,
    JERR_BAD_POOL_ID: 15,
    JERR_BAD_PRECISION: 16,
    JERR_BAD_PROGRESSION: 17,
    JERR_BAD_PROG_SCRIPT: 18,
    JERR_BAD_SAMPLING: 19,
    JERR_BAD_SCAN_SCRIPT: 20,
    JERR_BAD_STATE: 21,
    JERR_BAD_STRUCT_SIZE: 22,
    JERR_BAD_VIRTUAL_ACCESS: 23,
    JERR_BUFFER_SIZE: 24,
    JERR_CANT_SUSPEND: 25,
    JERR_CCIR601_NOTIMPL: 26,
    JERR_COMPONENT_COUNT: 27,
    JERR_CONVERSION_NOTIMPL: 28,
    JERR_DAC_INDEX: 29,
    JERR_DAC_VALUE: 30,
    JERR_DHT_INDEX: 31,
    JERR_DQT_INDEX: 32,
    JERR_EMPTY_IMAGE: 33,
    JERR_EMS_READ: 34,
    JERR_EMS_WRITE: 35,
    JERR_EOI_EXPECTED: 36,
    JERR_FILE_READ: 37,
    JERR_FILE_WRITE: 38,
    JERR_FRACT_SAMPLE_NOTIMPL: 39,
    JERR_HUFF_CLEN_OUTOFBOUNDS: 40,
    JERR_HUFF_MISSING_CODE: 41,
    JERR_IMAGE_TOO_BIG: 42,
    JERR_INPUT_EMPTY: 43,
    JERR_INPUT_EOF: 44,
    JERR_MISMATCHED_QUANT_TABLE: 45,
    JERR_MISSING_DATA: 46,
    JERR_MODE_CHANGE: 47,
    JERR_NOTIMPL: 48,
    JERR_NOT_COMPILED: 49,
    JERR_NO_ARITH_TABLE: 50,
    JERR_NO_BACKING_STORE: 51,
    JERR_NO_HUFF_TABLE: 52,
    JERR_NO_IMAGE: 53,
    JERR_NO_QUANT_TABLE: 54,
    JERR_NO_SOI: 55,
    JERR_OUT_OF_MEMORY: 56,
    JERR_QUANT_COMPONENTS: 57,
    JERR_QUANT_FEW_COLORS: 58,
    JERR_QUANT_MANY_COLORS: 59,
    JERR_SOF_BEFORE: 60,
    JERR_SOF_DUPLICATE: 61,
    JERR_SOF_NO_SOS: 62,
    JERR_SOF_UNSUPPORTED: 63,
    JERR_SOI_DUPLICATE: 64,
    JERR_TFILE_CREATE: 65,
    JERR_TFILE_READ: 66,
    JERR_TFILE_SEEK: 67,
    JERR_TFILE_WRITE: 68,
    JERR_TOO_LITTLE_DATA: 69,
    JERR_UNKNOWN_MARKER: 70,
    JERR_VIRTUAL_BUG: 71,
    JERR_WIDTH_OVERFLOW: 72,
    JERR_XMS_READ: 73,
    JERR_XMS_WRITE: 74,
    JMSG_COPYRIGHT: 75,
    JMSG_VERSION: 76,
    JTRC_16BIT_TABLES: 77,
    JTRC_ADOBE: 78,
    JTRC_APP0: 79,
    JTRC_APP14: 80,
    JTRC_DAC: 81,
    JTRC_DHT: 82,
    JTRC_DQT: 83,
    JTRC_DRI: 84,
    JTRC_EMS_CLOSE: 85,
    JTRC_EMS_OPEN: 86,
    JTRC_EOI: 87,
    JTRC_HUFFBITS: 88,
    JTRC_JFIF: 89,
    JTRC_JFIF_BADTHUMBNAILSIZE: 90,
    JTRC_JFIF_EXTENSION: 91,
    JTRC_JFIF_THUMBNAIL: 92,
    JTRC_MISC_MARKER: 93,
    JTRC_PARMLESS_MARKER: 94,
    JTRC_QUANTVALS: 95,
    JTRC_QUANT_3_NCOLORS: 96,
    JTRC_QUANT_NCOLORS: 97,
    JTRC_QUANT_SELECTED: 98,
    JTRC_RECOVERY_ACTION: 99,
    JTRC_RST: 100,
    JTRC_SMOOTH_NOTIMPL: 101,
    JTRC_SOF: 102,
    JTRC_SOF_COMPONENT: 103,
    JTRC_SOI: 104,
    JTRC_SOS: 105,
    JTRC_SOS_COMPONENT: 106,
    JTRC_SOS_PARAMS: 107,
    JTRC_TFILE_CLOSE: 108,
    JTRC_TFILE_OPEN: 109,
    JTRC_THUMB_JPEG: 110,
    JTRC_THUMB_PALETTE: 111,
    JTRC_THUMB_RGB: 112,
    JTRC_UNKNOWN_IDS: 113,
    JTRC_XMS_CLOSE: 114,
    JTRC_XMS_OPEN: 115,
    JWRN_ADOBE_XFORM: 116,
    JWRN_ARITH_BAD_CODE: 117,
    JWRN_BOGUS_PROGRESSION: 118,
    JWRN_EXTRANEOUS_DATA: 119,
    JWRN_HIT_MARKER: 120,
    JWRN_HUFF_BAD_CODE: 121,
    JWRN_JFIF_MAJOR: 122,
    JWRN_JPEG_EOF: 123,
    JWRN_MUST_RESYNC: 124,
    JWRN_NOT_SEQUENTIAL: 125,
    JWRN_TOO_MUCH_DATA: 126,
    JMSG_LASTMSGCODE: 127,
    0: "JMSG_NOMESSAGE",
    1: "JERR_BAD_ALIGN_TYPE",
    2: "JERR_BAD_ALLOC_CHUNK",
    3: "JERR_BAD_BUFFER_MODE",
    4: "JERR_BAD_COMPONENT_ID",
    5: "JERR_BAD_CROP_SPEC",
    6: "JERR_BAD_DCT_COEF",
    7: "JERR_BAD_DCTSIZE",
    8: "JERR_BAD_DROP_SAMPLING",
    9: "JERR_BAD_HUFF_TABLE",
    10: "JERR_BAD_IN_COLORSPACE",
    11: "JERR_BAD_J_COLORSPACE",
    12: "JERR_BAD_LENGTH",
    13: "JERR_BAD_LIB_VERSION",
    14: "JERR_BAD_MCU_SIZE",
    15: "JERR_BAD_POOL_ID",
    16: "JERR_BAD_PRECISION",
    17: "JERR_BAD_PROGRESSION",
    18: "JERR_BAD_PROG_SCRIPT",
    19: "JERR_BAD_SAMPLING",
    20: "JERR_BAD_SCAN_SCRIPT",
    21: "JERR_BAD_STATE",
    22: "JERR_BAD_STRUCT_SIZE",
    23: "JERR_BAD_VIRTUAL_ACCESS",
    24: "JERR_BUFFER_SIZE",
    25: "JERR_CANT_SUSPEND",
    26: "JERR_CCIR601_NOTIMPL",
    27: "JERR_COMPONENT_COUNT",
    28: "JERR_CONVERSION_NOTIMPL",
    29: "JERR_DAC_INDEX",
    30: "JERR_DAC_VALUE",
    31: "JERR_DHT_INDEX",
    32: "JERR_DQT_INDEX",
    33: "JERR_EMPTY_IMAGE",
    34: "JERR_EMS_READ",
    35: "JERR_EMS_WRITE",
    36: "JERR_EOI_EXPECTED",
    37: "JERR_FILE_READ",
    38: "JERR_FILE_WRITE",
    39: "JERR_FRACT_SAMPLE_NOTIMPL",
    40: "JERR_HUFF_CLEN_OUTOFBOUNDS",
    41: "JERR_HUFF_MISSING_CODE",
    42: "JERR_IMAGE_TOO_BIG",
    43: "JERR_INPUT_EMPTY",
    44: "JERR_INPUT_EOF",
    45: "JERR_MISMATCHED_QUANT_TABLE",
    46: "JERR_MISSING_DATA",
    47: "JERR_MODE_CHANGE",
    48: "JERR_NOTIMPL",
    49: "JERR_NOT_COMPILED",
    50: "JERR_NO_ARITH_TABLE",
    51: "JERR_NO_BACKING_STORE",
    52: "JERR_NO_HUFF_TABLE",
    53: "JERR_NO_IMAGE",
    54: "JERR_NO_QUANT_TABLE",
    55: "JERR_NO_SOI",
    56: "JERR_OUT_OF_MEMORY",
    57: "JERR_QUANT_COMPONENTS",
    58: "JERR_QUANT_FEW_COLORS",
    59: "JERR_QUANT_MANY_COLORS",
    60: "JERR_SOF_BEFORE",
    61: "JERR_SOF_DUPLICATE",
    62: "JERR_SOF_NO_SOS",
    63: "JERR_SOF_UNSUPPORTED",
    64: "JERR_SOI_DUPLICATE",
    65: "JERR_TFILE_CREATE",
    66: "JERR_TFILE_READ",
    67: "JERR_TFILE_SEEK",
    68: "JERR_TFILE_WRITE",
    69: "JERR_TOO_LITTLE_DATA",
    70: "JERR_UNKNOWN_MARKER",
    71: "JERR_VIRTUAL_BUG",
    72: "JERR_WIDTH_OVERFLOW",
    73: "JERR_XMS_READ",
    74: "JERR_XMS_WRITE",
    75: "JMSG_COPYRIGHT",
    76: "JMSG_VERSION",
    77: "JTRC_16BIT_TABLES",
    78: "JTRC_ADOBE",
    79: "JTRC_APP0",
    80: "JTRC_APP14",
    81: "JTRC_DAC",
    82: "JTRC_DHT",
    83: "JTRC_DQT",
    84: "JTRC_DRI",
    85: "JTRC_EMS_CLOSE",
    86: "JTRC_EMS_OPEN",
    87: "JTRC_EOI",
    88: "JTRC_HUFFBITS",
    89: "JTRC_JFIF",
    90: "JTRC_JFIF_BADTHUMBNAILSIZE",
    91: "JTRC_JFIF_EXTENSION",
    92: "JTRC_JFIF_THUMBNAIL",
    93: "JTRC_MISC_MARKER",
    94: "JTRC_PARMLESS_MARKER",
    95: "JTRC_QUANTVALS",
    96: "JTRC_QUANT_3_NCOLORS",
    97: "JTRC_QUANT_NCOLORS",
    98: "JTRC_QUANT_SELECTED",
    99: "JTRC_RECOVERY_ACTION",
    100: "JTRC_RST",
    101: "JTRC_SMOOTH_NOTIMPL",
    102: "JTRC_SOF",
    103: "JTRC_SOF_COMPONENT",
    104: "JTRC_SOI",
    105: "JTRC_SOS",
    106: "JTRC_SOS_COMPONENT",
    107: "JTRC_SOS_PARAMS",
    108: "JTRC_TFILE_CLOSE",
    109: "JTRC_TFILE_OPEN",
    110: "JTRC_THUMB_JPEG",
    111: "JTRC_THUMB_PALETTE",
    112: "JTRC_THUMB_RGB",
    113: "JTRC_UNKNOWN_IDS",
    114: "JTRC_XMS_CLOSE",
    115: "JTRC_XMS_OPEN",
    116: "JWRN_ADOBE_XFORM",
    117: "JWRN_ARITH_BAD_CODE",
    118: "JWRN_BOGUS_PROGRESSION",
    119: "JWRN_EXTRANEOUS_DATA",
    120: "JWRN_HIT_MARKER",
    121: "JWRN_HUFF_BAD_CODE",
    122: "JWRN_JFIF_MAJOR",
    123: "JWRN_JPEG_EOF",
    124: "JWRN_MUST_RESYNC",
    125: "JWRN_NOT_SEQUENTIAL",
    126: "JWRN_TOO_MUCH_DATA",
    127: "JMSG_LASTMSGCODE",
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
