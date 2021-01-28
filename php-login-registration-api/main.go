package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/polds/imgbase64"
	_ "github.com/polds/imgbase64"
)

func uploadFile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Println("File Upload Endpoint Hit")
	r.ParseMultipartForm(10 << 20)
	file, handler, err := r.FormFile("imagefile")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	tempFile, err := ioutil.TempFile("./react-proj/public/images", "image-*.png")
	if err != nil {
		fmt.Println(err)
	}
	defer tempFile.Close()
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	}
	tempFile.Write(fileBytes)
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2)/mysqlp")
	if err != nil {
		panic(err.Error())
	}
	insert, err := db.Prepare("INSERT into image (name,email) VALUES (?,?)")
	if err != nil {
		panic(err.Error())
	}
	filename := tempFile.Name()[25:]
	insert.Exec(filename, r.FormValue("email"))
	defer db.Close()
	img, err := imgbase64.FromLocal(filename)
	fmt.Println(img)
	var data string
	data = filename
	response, err := json.Marshal(data)
	if err != nil {
		panic(err.Error())
	}
}
func setupRoutes() {
	http.HandleFunc("/upload", uploadFile)

	http.ListenAndServe(":8090", nil)
}
func main() {
	fmt.Println("Hello World")
	setupRoutes()
}
