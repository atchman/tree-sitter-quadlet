package tree_sitter_quadlet_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_quadlet "github.com/atchman/tree-sitter-quadlet/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_quadlet.Language())
	if language == nil {
		t.Errorf("Error loading Quadlet grammar")
	}
}
