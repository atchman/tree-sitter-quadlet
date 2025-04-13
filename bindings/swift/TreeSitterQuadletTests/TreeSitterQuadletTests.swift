import XCTest
import SwiftTreeSitter
import TreeSitterQuadlet

final class TreeSitterQuadletTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_quadlet())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Quadlet grammar")
    }
}
