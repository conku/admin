package main

import (
	"fmt"

	"github.com/conku/admin"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
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

	dsn := "host=localhost user=postgres password=ishgishg dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	//DB, _ := gorm.Open("postgres", "postgres")
	db.AutoMigrate(&User{}, &Product{})

	qorPrefix := "/admin"
	// Initialize Qor Admin.
	Admin := admin.New(&admin.AdminConfig{DB: db})

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
