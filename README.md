# MCP Hello World Server

Este es un servidor MCP (Model Context Protocol) de ejemplo que demuestra cómo crear herramientas personalizadas que pueden ser utilizadas por LLMs como Claude.

## 🚀 ¿Qué es MCP?

El Model Context Protocol (MCP) es un protocolo estandarizado creado por Anthropic que permite a los modelos de lenguaje (LLMs) interactuar con herramientas externas y fuentes de datos de manera consistente.

## 📋 Herramientas Disponibles

Este servidor incluye dos herramientas de ejemplo:

1. **say_hello**: Devuelve un saludo personalizado
   - Parámetros: `name` (string)
   
2. **calculate_sum**: Calcula la suma de dos números
   - Parámetros: `a` (number), `b` (number)

## 🛠️ Instalación

```bash
npm install
```

## ▶️ Uso

### Ejecutar el servidor directamente:

```bash
npm start
```

o

```bash
node index.js
```

## 🔧 Configuración con Claude Desktop

Para usar este servidor MCP con Claude Desktop, agrega la siguiente configuración a tu archivo de configuración de Claude:

### macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "mcp-hello-world": {
      "command": "node",
      "args": ["/ruta/completa/a/tu/proyecto/index.js"]
    }
  }
}
```

Reemplaza `/ruta/completa/a/tu/proyecto/` con la ruta real donde está tu proyecto.

## 📝 Estructura del Código

El servidor MCP implementa:

- **ListToolsRequestSchema**: Define las herramientas disponibles
- **CallToolRequestSchema**: Maneja la ejecución de las herramientas
- **StdioServerTransport**: Comunicación estándar con el cliente MCP

## 🎯 Próximos Pasos

Puedes expandir este servidor agregando más herramientas:

1. Integración con APIs externas
2. Acceso a bases de datos
3. Operaciones de archivos
4. Cálculos complejos
5. Y mucho más...

## 📚 Recursos

- [Documentación oficial de MCP](https://modelcontextprotocol.io/)
- [SDK de MCP para Node.js](https://github.com/modelcontextprotocol/typescript-sdk)
- [Ejemplos de servidores MCP](https://github.com/modelcontextprotocol)

## 📄 Licencia

ISC
