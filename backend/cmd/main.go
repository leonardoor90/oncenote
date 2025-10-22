package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"oncenote-backend/internal/storage"
	"oncenote-backend/internal/routes"
)

func main() {
	// Carrega variáveis do .env
	err := godotenv.Load()
	if err != nil {
		log.Println("⚠️  No .env file found, using system environment variables")
	}

	// Conecta ao Redis
	storage.ConnectRedis()

	// Cria app Fiber
	app := fiber.New()

	// ✅ Middleware de CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", // permite qualquer origem (para dev)
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET,POST,OPTIONS",
	}))

	// Configura rotas
	routes.SetupRoutes(app)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("🚀 Server running on port %s\n", port)
	app.Listen(":" + port)
}
