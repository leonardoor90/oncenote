package routes

import (
	"github.com/gofiber/fiber/v2"
	"oncenote-backend/internal/handlers"
)

func SetupRoutes(app *fiber.App) {
	// Health check
	app.Get("/health", handlers.HealthCheck)

	// Rotas da API
	api := app.Group("/api")
	api.Post("/notes", handlers.CreateNote)
	api.Get("/notes/:id", handlers.GetNoteByID)
}
