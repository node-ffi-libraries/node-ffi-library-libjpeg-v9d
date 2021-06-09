/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.2
 * - git commit v2.0.1-1-g2b4030d on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "jpeglib.h"
 * - SHA256: b44f7903491fe1a385a6cc63cbbc567d9cb76240a06e251b30513bc9bbba99e7
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
  J_COLOR_SPACE: {
    JCS_UNKNOWN: 0,
    JCS_GRAYSCALE: 1,
    JCS_RGB: 2,
    JCS_YCbCr: 3,
    JCS_CMYK: 4,
    JCS_YCCK: 5,
    JCS_BG_RGB: 6,
    JCS_BG_YCC: 7,
    0: "JCS_UNKNOWN",
    1: "JCS_GRAYSCALE",
    2: "JCS_RGB",
    3: "JCS_YCbCr",
    4: "JCS_CMYK",
    5: "JCS_YCCK",
    6: "JCS_BG_RGB",
    7: "JCS_BG_YCC",
  },
  J_COLOR_TRANSFORM: {
    JCT_NONE: 0,
    JCT_SUBTRACT_GREEN: 1,
    0: "JCT_NONE",
    1: "JCT_SUBTRACT_GREEN",
  },
  J_DCT_METHOD: {
    JDCT_ISLOW: 0,
    JDCT_IFAST: 1,
    JDCT_FLOAT: 2,
    0: "JDCT_ISLOW",
    1: "JDCT_IFAST",
    2: "JDCT_FLOAT",
  },
  J_DITHER_MODE: {
    JDITHER_NONE: 0,
    JDITHER_ORDERED: 1,
    JDITHER_FS: 2,
    0: "JDITHER_NONE",
    1: "JDITHER_ORDERED",
    2: "JDITHER_FS",
  },
};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix.
const types = {};

const js_uchar = ref.types.uchar;
const js_void = ref.types.void;
const js_voidPointer = ref.refType(js_void);
const jpeg_error_mgr = js_voidPointer;
const jpeg_compress_struct = js_voidPointer;
const j_compress_ptr = jpeg_compress_struct;
const js_int32 = ref.types.int32;
const jpeg_decompress_struct = js_voidPointer;
const j_decompress_ptr = jpeg_decompress_struct;
const js_int32Pointer = ref.refType(js_int32);
const js_ucharPointer = ref.refType(js_uchar);
const js_uint32 = ref.types.uint32;
const J_COLOR_SPACE = js_uint32;
const boolean = js_uchar;
const js_uint32Pointer = ref.refType(js_uint32);
const js_ushort = ref.types.ushort;
const UINT16 = js_ushort;
const UINT16_array_64 = ArrayType(UINT16, 64);
const JQUANT_TBL = Struct({
  quantval: UINT16_array_64,
  sent_table: boolean,
});
const JQUANT_TBLPointer = ref.refType(JQUANT_TBL);
const jpeg_memory_mgr = js_voidPointer;
const jpeg_progress_mgr = js_voidPointer;
const jpeg_common_struct = Struct({
  jpeg_error_mgr: jpeg_error_mgr,
  err: jpeg_error_mgr,
  jpeg_memory_mgr: jpeg_memory_mgr,
  mem: jpeg_memory_mgr,
  jpeg_progress_mgr: jpeg_progress_mgr,
  progress: jpeg_progress_mgr,
  client_data: js_voidPointer,
  is_decompressor: boolean,
  global_state: js_int32,
});
const j_common_ptr = jpeg_common_struct;
const UINT8 = js_uchar;
const UINT8_array_17 = ArrayType(UINT8, 17);
const UINT8_array_256 = ArrayType(UINT8, 256);
const JHUFF_TBL = Struct({
  bits: UINT8_array_17,
  huffval: UINT8_array_256,
  sent_table: boolean,
});
const JHUFF_TBLPointer = ref.refType(JHUFF_TBL);
const JDIMENSION = js_uint32;
const JSAMPLE = js_uchar;
const JSAMPLEPointer = ref.refType(JSAMPLE);
const JSAMPROW = JSAMPLEPointer;
const JSAMPROWPointer = ref.refType(JSAMPROW);
const JSAMPARRAY = JSAMPROWPointer;
const JSAMPARRAYPointer = ref.refType(JSAMPARRAY);
const JSAMPIMAGE = JSAMPARRAYPointer;
const JOCTET = js_uchar;
const JOCTETPointer = ref.refType(JOCTET);
const jpeg_marker_parser_method = FFI.Function(ref.types.uchar, [
  jpeg_decompress_struct,
]);
const jvirt_barray_control = js_voidPointer;
const jvirt_barray_ptr = jvirt_barray_control;
const jvirt_barray_ptrPointer = ref.refType(jvirt_barray_ptr);

types["JDIMENSION"] = JDIMENSION;
types["JHUFF_TBL"] = JHUFF_TBL;
types["JHUFF_TBLPointer"] = JHUFF_TBLPointer;
types["JOCTET"] = JOCTET;
types["JOCTETPointer"] = JOCTETPointer;
types["JQUANT_TBL"] = JQUANT_TBL;
types["JQUANT_TBLPointer"] = JQUANT_TBLPointer;
types["JSAMPARRAY"] = JSAMPARRAY;
types["JSAMPARRAYPointer"] = JSAMPARRAYPointer;
types["JSAMPIMAGE"] = JSAMPIMAGE;
types["JSAMPLE"] = JSAMPLE;
types["JSAMPLEPointer"] = JSAMPLEPointer;
types["JSAMPROW"] = JSAMPROW;
types["JSAMPROWPointer"] = JSAMPROWPointer;
types["J_COLOR_SPACE"] = J_COLOR_SPACE;
types["UINT16"] = UINT16;
types["UINT16_array_64"] = UINT16_array_64;
types["UINT8"] = UINT8;
types["UINT8_array_17"] = UINT8_array_17;
types["UINT8_array_256"] = UINT8_array_256;
types["boolean"] = boolean;
types["j_common_ptr"] = j_common_ptr;
types["j_compress_ptr"] = j_compress_ptr;
types["j_decompress_ptr"] = j_decompress_ptr;
types["jpeg_common_struct"] = jpeg_common_struct;
types["jpeg_compress_struct"] = jpeg_compress_struct;
types["jpeg_decompress_struct"] = jpeg_decompress_struct;
types["jpeg_error_mgr"] = jpeg_error_mgr;
types["jpeg_marker_parser_method"] = jpeg_marker_parser_method;
types["jpeg_memory_mgr"] = jpeg_memory_mgr;
types["jpeg_progress_mgr"] = jpeg_progress_mgr;
types["js_int32"] = js_int32;
types["js_int32Pointer"] = js_int32Pointer;
types["js_uchar"] = js_uchar;
types["js_ucharPointer"] = js_ucharPointer;
types["js_uint32"] = js_uint32;
types["js_uint32Pointer"] = js_uint32Pointer;
types["js_ushort"] = js_ushort;
types["js_void"] = js_void;
types["js_voidPointer"] = js_voidPointer;
types["jvirt_barray_control"] = jvirt_barray_control;
types["jvirt_barray_ptr"] = jvirt_barray_ptr;
types["jvirt_barray_ptrPointer"] = jvirt_barray_ptrPointer;

const functions = new FFI.Library(null, {
  jpeg_CreateCompress: [js_void, [j_compress_ptr, js_int32, js_int32]],
  jpeg_CreateDecompress: [js_void, [j_decompress_ptr, js_int32, js_int32]],
  jpeg_abort: [js_void, [j_common_ptr]],
  jpeg_abort_compress: [js_void, [j_compress_ptr]],
  jpeg_abort_decompress: [js_void, [j_decompress_ptr]],
  jpeg_add_quant_table: [
    js_void,
    [j_compress_ptr, js_int32, js_uint32Pointer, js_int32, boolean],
  ],
  jpeg_alloc_huff_table: [JHUFF_TBLPointer, [j_common_ptr]],
  jpeg_alloc_quant_table: [JQUANT_TBLPointer, [j_common_ptr]],
  jpeg_calc_jpeg_dimensions: [js_void, [j_compress_ptr]],
  jpeg_calc_output_dimensions: [js_void, [j_decompress_ptr]],
  jpeg_consume_input: [js_int32, [j_decompress_ptr]],
  jpeg_copy_critical_parameters: [js_void, [j_decompress_ptr, j_compress_ptr]],
  jpeg_core_output_dimensions: [js_void, [j_decompress_ptr]],
  jpeg_default_colorspace: [js_void, [j_compress_ptr]],
  jpeg_default_qtables: [js_void, [j_compress_ptr, boolean]],
  jpeg_destroy: [js_void, [j_common_ptr]],
  jpeg_destroy_compress: [js_void, [j_compress_ptr]],
  jpeg_destroy_decompress: [js_void, [j_decompress_ptr]],
  jpeg_finish_compress: [js_void, [j_compress_ptr]],
  jpeg_finish_decompress: [boolean, [j_decompress_ptr]],
  jpeg_finish_output: [boolean, [j_decompress_ptr]],
  jpeg_has_multiple_scans: [boolean, [j_decompress_ptr]],
  jpeg_input_complete: [boolean, [j_decompress_ptr]],
  jpeg_mem_dest: [js_void, [j_compress_ptr, js_ucharPointer, js_int32Pointer]],
  jpeg_mem_src: [js_void, [j_decompress_ptr, js_ucharPointer, js_int32]],
  jpeg_new_colormap: [js_void, [j_decompress_ptr]],
  jpeg_quality_scaling: [js_int32, [js_int32]],
  jpeg_read_coefficients: [jvirt_barray_ptrPointer, [j_decompress_ptr]],
  jpeg_read_header: [js_int32, [j_decompress_ptr, boolean]],
  jpeg_read_raw_data: [JDIMENSION, [j_decompress_ptr, JSAMPIMAGE, JDIMENSION]],
  jpeg_read_scanlines: [JDIMENSION, [j_decompress_ptr, JSAMPARRAY, JDIMENSION]],
  jpeg_resync_to_restart: [boolean, [j_decompress_ptr, js_int32]],
  jpeg_save_markers: [js_void, [j_decompress_ptr, js_int32, js_uint32]],
  jpeg_set_colorspace: [js_void, [j_compress_ptr, J_COLOR_SPACE]],
  jpeg_set_defaults: [js_void, [j_compress_ptr]],
  jpeg_set_linear_quality: [js_void, [j_compress_ptr, js_int32, boolean]],
  jpeg_set_marker_processor: [
    js_void,
    [j_decompress_ptr, js_int32, jpeg_marker_parser_method],
  ],
  jpeg_set_quality: [js_void, [j_compress_ptr, js_int32, boolean]],
  jpeg_simple_progression: [js_void, [j_compress_ptr]],
  jpeg_start_compress: [js_void, [j_compress_ptr, boolean]],
  jpeg_start_decompress: [boolean, [j_decompress_ptr]],
  jpeg_start_output: [boolean, [j_decompress_ptr, js_int32]],
  jpeg_std_error: [jpeg_error_mgr, [jpeg_error_mgr]],
  jpeg_std_huff_table: [JHUFF_TBLPointer, [j_common_ptr, boolean, js_int32]],
  jpeg_stdio_dest: [js_void, [j_compress_ptr, js_int32Pointer]],
  jpeg_stdio_src: [js_void, [j_decompress_ptr, js_int32Pointer]],
  jpeg_suppress_tables: [js_void, [j_compress_ptr, boolean]],
  jpeg_write_coefficients: [js_void, [j_compress_ptr, jvirt_barray_ptrPointer]],
  jpeg_write_m_byte: [js_void, [j_compress_ptr, js_int32]],
  jpeg_write_m_header: [js_void, [j_compress_ptr, js_int32, js_uint32]],
  jpeg_write_marker: [
    js_void,
    [j_compress_ptr, js_int32, JOCTETPointer, js_uint32],
  ],
  jpeg_write_raw_data: [JDIMENSION, [j_compress_ptr, JSAMPIMAGE, JDIMENSION]],
  jpeg_write_scanlines: [JDIMENSION, [j_compress_ptr, JSAMPARRAY, JDIMENSION]],
  jpeg_write_tables: [js_void, [j_compress_ptr]],
});

module.exports = {
  constants,
  types,
  functions,
};
