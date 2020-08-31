package admin_test

import (
	"fmt"
	"testing"

	"github.com/conku/admin"
	. "github.com/conku/admin/tests/dummy"
	"github.com/conku/qor"
)

// Template helpers test

func TestUrlForAdmin(t *testing.T) {
	context := &admin.Context{Admin: Admin}

	rootLink := context.URLFor(Admin)

	if rootLink != "/admin" {
		t.Error("Admin link not generated by URLFor")
	}
}

func TestUrlForResource(t *testing.T) {
	context := &admin.Context{Admin: Admin}
	user := Admin.GetResource("User")

	userLink := context.URLFor(user)

	if userLink != "/admin/users" {
		t.Error("resource link not generated by URLFor")
	}
}

func TestUrlForResourceName(t *testing.T) {
	user := &User{Name: "test"}
	db.Create(&user)

	context := &admin.Context{Admin: Admin, Context: &qor.Context{}}
	context.SetDB(db)

	userLink := context.URLFor(user)

	if userLink != "/admin/users/"+fmt.Sprintf("%v", user.ID) {
		t.Error("resource link not generated by URLFor")
	}
}

func TestPagination(t *testing.T) {
	context := &admin.Context{Admin: Admin}
	context.Resource = &admin.Resource{Config: &admin.Config{PageCount: 10}}
	context.Searcher = &admin.Searcher{Context: context}

	// Test no pagination if total result count is less than PageCount
	for _, count := range []int{8, 10} {
		context.Searcher.Pagination.Total = count
		if context.Pagination() != nil {
			t.Error(fmt.Sprintf("Don't display pagination if only has one page (%v)", count))
		}
	}

	context.Searcher.Pagination.CurrentPage = 3
	if context.Pagination() == nil {
		t.Error("Should show pagination for page without records")
	}

	// Test current page 1
	context.Searcher.Pagination.Total = 1000
	context.Searcher.Pagination.Pages = 10
	context.Searcher.Pagination.CurrentPage = 1
	pages := context.Pagination().Pages

	if !pages[0].Current {
		t.Error("first page not set as current page")
	}

	if !pages[len(pages)-2].IsNext && pages[len(pages)-2].Page != 2 {
		t.Error("Should have next page arrow")
	}

	// +1 for "Next page" link which is a "Page" too
	// +1 for "Last page"
	if len(pages) != 8+1+1 {
		t.Error("visible pages in current context beyond the bound of VISIBLE_PAGE_COUNT")
	}

	// Test current page 8 => the length between start and end less than MAX_VISIBLE_PAGES
	context.Searcher.Pagination.Pages = 10
	context.Searcher.Pagination.CurrentPage = 8
	pages = context.Pagination().Pages

	if !pages[7].Current {
		t.Error("visible previous pages count incorrect")
	}

	if !pages[1].IsPrevious && pages[1].Page != 7 {
		t.Error("Should have previous page arrow")
	}

	// +1 for "Prev"
	// +1 for "First page"
	if len(pages) != 8+1+1 {
		t.Error("visible pages in current context beyond the bound of VISIBLE_PAGE_COUNT")
	}

	// Test current page at last
	context.Searcher.Pagination.Pages = 10
	context.Searcher.Pagination.CurrentPage = 10
	pages = context.Pagination().Pages

	if !pages[len(pages)-1].Current {
		t.Error("last page is not the current page")
	}

	if len(pages) != 8+2 {
		t.Error("visible pages count is incorrect")
	}

	// Test current page at last but total page count less than VISIBLE_PAGE_COUNT
	context.Searcher.Pagination.Pages = 5
	context.Searcher.Pagination.CurrentPage = 5
	pages = context.Pagination().Pages

	if len(pages) != 5 {
		t.Error("incorrect pages count")
	}
}
