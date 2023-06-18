package main

import (
	"fmt"

	"github.com/conku/admin"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	"gorm.io/gorm"
)

// Create a GORM-backend model
type User struct {
	gorm.Model
	Name string
}

// Create another GORM-backend model
type Product struct {
	gorm.Model
	Name        string
	Description string
}

func main() {
	DB, _ := gorm.Open("sqlite3", "demo.db")
	DB.AutoMigrate(&User{}, &Product{})

	qorPrefix := "/admin"
	// Initialize Qor Admin.
	Admin := admin.New(&admin.AdminConfig{DB: DB})

	// Allow to use Admin to manage User, Product
	Admin.AddResource(&User{})
	Admin.AddResource(&Product{})

	// Create a qor handler and convert it to an iris one with `iris.FromStd`.
	mux := Admin.NewServeMux(qorPrefix)
	handler := gin.WrapH(mux)

	r := gin.Default()

	// Mount routes for "/admin" and "/admin/:xxx/..."
	r.Any(qorPrefix, handler)
	r.Any(qorPrefix+"/{p:path}", handler)
	r.Run(fmt.Sprintf(":%d", 8900))

	// Initialize Iris.
	//app := iris.New()
	// Mount routes for "/admin" and "/admin/:xxx/..."
	//app.Any(qorPrefix, handler)
	//app.Any(qorPrefix+"/{p:path}", handler)

	// Start the server.
	// Navigate at: http://localhost:9000/admin.
	//app.Listen(":9000")
}
