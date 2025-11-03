#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Crear instancia del servidor MCP
const server = new Server(
  {
    name: "my-ec2-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Handler para listar las herramientas disponibles
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "say_hello",
        description: "Devuelve un saludo personalizado con el nombre proporcionado",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "El nombre de la persona a saludar",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "calculate_sum",
        description: "Calcula la suma de dos números",
        inputSchema: {
          type: "object",
          properties: {
            a: {
              type: "number",
              description: "El primer número",
            },
            b: {
              type: "number",
              description: "El segundo número",
            },
          },
          required: ["a", "b"],
        },
      },
    ],
  };
});

// Handler para ejecutar las herramientas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "say_hello": {
      const userName = args.name;
      return {
        content: [
          {
            type: "text",
            text: `¡Hola ${userName}! 👋 Saludo desde mi servidor MCP personalizado.`,
          },
        ],
      };
    }

    case "calculate_sum": {
      const { a, b } = args;
      const result = a + b;
      return {
        content: [
          {
            type: "text",
            text: `La suma de ${a} + ${b} = ${result}`,
          },
        ],
      };
    }

    default:
      throw new Error(`Herramienta desconocida: ${name}`);
  }
});

// Iniciar el servidor con transporte stdio
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("🚀 MCP server ejecutándose...");
}

main().catch((error) => {
  console.error("Error al iniciar el servidor:", error);
  process.exit(1);
});
