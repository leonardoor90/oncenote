package handlers

import "github.com/gofiber/fiber/v2"

// HealthCheck retorna 200 OK
func HealthCheck(c *fiber.Ctx) error {
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "ok",
	})
}
