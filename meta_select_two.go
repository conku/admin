package admin

import "html/template"

// SelectOneConfig meta configuration used for select one
type SelectTwoConfig struct {
	Collection               interface{} // []string, [][]string, func(interface{}, *qor.Context) [][]string, func(interface{}, *admin.Context) [][]string
	Placeholder              string
	AllowBlank               bool
	DefaultCreating          bool
	SelectionTemplate        string
	SelectMode               string // select, select_async, bottom_sheet
	Select2ResultTemplate    template.JS
	Select2SelectionTemplate template.JS
	RemoteDataResource       *Resource
	RemoteDataHasImage       bool
	ForSerializedObject      bool
	PrimaryField             string
	metaConfig
	getCollection func(interface{}, *Context) [][]string
}
