/**
 * @file Grammar for Podman Quadlet
 * @author atchman <atchman@hotmail.de>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "quadlet",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
