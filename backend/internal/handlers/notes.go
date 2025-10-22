package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"oncenote-backend/internal/models"
	"oncenote-backend/internal/storage"
)

func CreateNote(c *fiber.Ctx) error {
	var note models.Note
	if err := json.Unmarshal(c.Body(), &note); err != nil {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request"})
	}

	note.ID = uuid.New().String()
	err := storage.RedisClient.Set(storage.Ctx, note.ID, note.Content, 10*time.Minute).Err()
	if err != nil {
		log.Printf("Failed to save note: %v", err)
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to store note"})
	}

	return c.JSON(fiber.Map{"id": note.ID})
}

func GetNoteByID(c *fiber.Ctx) error {
	id := c.Params("id")
	content, err := storage.RedisClient.Get(storage.Ctx, id).Result()
	if err != nil {
		return c.Status(http.StatusNotFound).JSON(fiber.Map{"error": "Note not found or expired"})
	}

	storage.RedisClient.Del(storage.Ctx, id) // apaga após leitura
	return c.JSON(fiber.Map{"content": content})
}
