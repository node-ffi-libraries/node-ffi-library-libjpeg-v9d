var FFI = require("ffi-napi"),
  ref = require("ref-napi"),
  ArrayType = require("ref-array-di")(ref),
  Struct = require("ref-struct-di")(ref),
  Union = require("ref-union-di")(ref);

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  "": {
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
};

var j_compress_ptr = (exports.j_compress_ptr = voidPtr);
var j_compress_ptrPtr = (exports.j_compress_ptrPtr = ref.refType(
  j_compress_ptr
));
var j_decompress_ptr = (exports.j_decompress_ptr = voidPtr);
var j_decompress_ptrPtr = (exports.j_decompress_ptrPtr = ref.refType(
  j_decompress_ptr
));
var JQUANT_TBL = (exports.JQUANT_TBL = Struct({
  quantval: ArrayType(ref.types.ushort, 64),
  sent_table: ref.types.uchar,
}));
var JQUANT_TBLPtr = (exports.JQUANT_TBLPtr = ref.refType(JQUANT_TBL));
var j_common_ptr = (exports.j_common_ptr = voidPtr);
var j_common_ptrPtr = (exports.j_common_ptrPtr = ref.refType(j_common_ptr));
var JHUFF_TBL = (exports.JHUFF_TBL = Struct({
  bits: ArrayType(ref.types.uchar, 17),
  huffval: ArrayType(ref.types.uchar, 256),
  sent_table: ref.types.uchar,
}));
var JHUFF_TBLPtr = (exports.JHUFF_TBLPtr = ref.refType(JHUFF_TBL));
var JSAMPARRAY = (exports.JSAMPARRAY = voidPtr);
var JSAMPARRAYPtr = (exports.JSAMPARRAYPtr = ref.refType(JSAMPARRAY));
var JSAMPIMAGE = (exports.JSAMPIMAGE = voidPtr);
var JSAMPIMAGEPtr = (exports.JSAMPIMAGEPtr = ref.refType(JSAMPIMAGE));
var JOCTET = (exports.JOCTET = voidPtr);
var JOCTETPtr = (exports.JOCTETPtr = ref.refType(JOCTET));
var jpeg_marker_parser_method = (exports.jpeg_marker_parser_method = FFI.Function(
  ref.types.uchar,
  [voidPtr]
));
var jpeg_marker_parser_methodPtr = (exports.jpeg_marker_parser_methodPtr = ref.refType(
  jpeg_marker_parser_method
));
var jvirt_barray_ptr = (exports.jvirt_barray_ptr = voidPtr);
var jvirt_barray_ptrPtr = (exports.jvirt_barray_ptrPtr = ref.refType(
  jvirt_barray_ptr
));

exports.functions = new FFI.Library(null, {
  jpeg_std_error: [voidPtr, [voidPtr]],
  jpeg_CreateCompress: [
    ref.types.void,
    [j_compress_ptr, ref.types.int32, ref.types.int32],
  ],
  jpeg_CreateDecompress: [
    ref.types.void,
    [j_decompress_ptr, ref.types.int32, ref.types.int32],
  ],
  jpeg_destroy_compress: [ref.types.void, [j_compress_ptr]],
  jpeg_destroy_decompress: [ref.types.void, [j_decompress_ptr]],
  jpeg_stdio_dest: [
    ref.types.void,
    [j_compress_ptr, ref.refType(ref.types.int32)],
  ],
  jpeg_stdio_src: [
    ref.types.void,
    [j_decompress_ptr, ref.refType(ref.types.int32)],
  ],
  jpeg_mem_dest: [
    ref.types.void,
    [j_compress_ptr, voidPtr, ref.refType(ref.types.int32)],
  ],
  jpeg_mem_src: [
    ref.types.void,
    [j_decompress_ptr, ref.refType(ref.types.uchar), ref.types.int32],
  ],
  jpeg_set_defaults: [ref.types.void, [j_compress_ptr]],
  jpeg_set_colorspace: [ref.types.void, [j_compress_ptr, ref.types.uint32]],
  jpeg_default_colorspace: [ref.types.void, [j_compress_ptr]],
  jpeg_set_quality: [
    ref.types.void,
    [j_compress_ptr, ref.types.int32, ref.types.uchar],
  ],
  jpeg_set_linear_quality: [
    ref.types.void,
    [j_compress_ptr, ref.types.int32, ref.types.uchar],
  ],
  jpeg_default_qtables: [ref.types.void, [j_compress_ptr, ref.types.uchar]],
  jpeg_add_quant_table: [
    ref.types.void,
    [
      j_compress_ptr,
      ref.types.int32,
      ref.refType(ref.types.uint32),
      ref.types.int32,
      ref.types.uchar,
    ],
  ],
  jpeg_quality_scaling: [ref.types.int32, [ref.types.int32]],
  jpeg_simple_progression: [ref.types.void, [j_compress_ptr]],
  jpeg_suppress_tables: [ref.types.void, [j_compress_ptr, ref.types.uchar]],
  jpeg_alloc_quant_table: [JQUANT_TBLPtr, [j_common_ptr]],
  jpeg_alloc_huff_table: [JHUFF_TBLPtr, [j_common_ptr]],
  jpeg_std_huff_table: [
    JHUFF_TBLPtr,
    [j_common_ptr, ref.types.uchar, ref.types.int32],
  ],
  jpeg_start_compress: [ref.types.void, [j_compress_ptr, ref.types.uchar]],
  jpeg_write_scanlines: [
    ref.types.uint32,
    [j_compress_ptr, JSAMPARRAY, ref.types.uint32],
  ],
  jpeg_finish_compress: [ref.types.void, [j_compress_ptr]],
  jpeg_calc_jpeg_dimensions: [ref.types.void, [j_compress_ptr]],
  jpeg_write_raw_data: [
    ref.types.uint32,
    [j_compress_ptr, JSAMPIMAGE, ref.types.uint32],
  ],
  jpeg_write_marker: [
    ref.types.void,
    [j_compress_ptr, ref.types.int32, JOCTET, ref.types.uint32],
  ],
  jpeg_write_m_header: [
    ref.types.void,
    [j_compress_ptr, ref.types.int32, ref.types.uint32],
  ],
  jpeg_write_m_byte: [ref.types.void, [j_compress_ptr, ref.types.int32]],
  jpeg_write_tables: [ref.types.void, [j_compress_ptr]],
  jpeg_read_header: [ref.types.int32, [j_decompress_ptr, ref.types.uchar]],
  jpeg_start_decompress: [ref.types.uchar, [j_decompress_ptr]],
  jpeg_read_scanlines: [
    ref.types.uint32,
    [j_decompress_ptr, JSAMPARRAY, ref.types.uint32],
  ],
  jpeg_finish_decompress: [ref.types.uchar, [j_decompress_ptr]],
  jpeg_read_raw_data: [
    ref.types.uint32,
    [j_decompress_ptr, JSAMPIMAGE, ref.types.uint32],
  ],
  jpeg_has_multiple_scans: [ref.types.uchar, [j_decompress_ptr]],
  jpeg_start_output: [ref.types.uchar, [j_decompress_ptr, ref.types.int32]],
  jpeg_finish_output: [ref.types.uchar, [j_decompress_ptr]],
  jpeg_input_complete: [ref.types.uchar, [j_decompress_ptr]],
  jpeg_new_colormap: [ref.types.void, [j_decompress_ptr]],
  jpeg_consume_input: [ref.types.int32, [j_decompress_ptr]],
  jpeg_core_output_dimensions: [ref.types.void, [j_decompress_ptr]],
  jpeg_calc_output_dimensions: [ref.types.void, [j_decompress_ptr]],
  jpeg_save_markers: [
    ref.types.void,
    [j_decompress_ptr, ref.types.int32, ref.types.uint32],
  ],
  jpeg_set_marker_processor: [
    ref.types.void,
    [j_decompress_ptr, ref.types.int32, jpeg_marker_parser_method],
  ],
  jpeg_read_coefficients: [jvirt_barray_ptr, [j_decompress_ptr]],
  jpeg_write_coefficients: [
    ref.types.void,
    [j_compress_ptr, jvirt_barray_ptrPtr],
  ],
  jpeg_copy_critical_parameters: [
    ref.types.void,
    [j_decompress_ptr, j_compress_ptr],
  ],
  jpeg_abort_compress: [ref.types.void, [j_compress_ptr]],
  jpeg_abort_decompress: [ref.types.void, [j_decompress_ptr]],
  jpeg_abort: [ref.types.void, [j_common_ptr]],
  jpeg_destroy: [ref.types.void, [j_common_ptr]],
  jpeg_resync_to_restart: [
    ref.types.uchar,
    [j_decompress_ptr, ref.types.int32],
  ],
});
