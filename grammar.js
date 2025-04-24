/**
 * @file Grammar for Podman Quadlet
 * @author atchman <atchman@hotmail.de>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "quadlet",

  extra: $ => [
    $.comment,
  ],

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => seq(
      optional($.new_blank),
      repeat($.comment),
      optional($.new_blank),
    )
    
    new_blank: $ => optional(
      /\n,
    )

    comment: $ => seq(
      repeat1(";"),
      repeat1("#"),
    )
  }
});
