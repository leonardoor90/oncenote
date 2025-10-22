# Etapa 1: build
FROM golang:1.23 AS builder
WORKDIR /app

# Copia dependências e baixa os módulos
COPY go.mod go.sum ./
RUN go mod download

# Copia o restante do código e builda
COPY . .
RUN go build -o server ./cmd/main.go

# Etapa 2: imagem final leve
FROM gcr.io/distroless/base-debian12
WORKDIR /app

# Copia o binário compilado
COPY --from=builder /app/server .

# Porta padrão do Cloud Run
ENV PORT=8080

# Comando de execução
CMD ["./server"]
