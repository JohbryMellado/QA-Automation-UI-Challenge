// ============================
// README.md
// ============================

# QA Automation UI Challenge – WebdriverIO (JavaScript)

## Requisitos
- Node.js >= 16
- npm
- Google Chrome instalado

## Instalación
```bash
npm install
```

## Ejecutar las pruebas
```bash
npm test
```

## Estructura del proyecto
```
├── pageobjects/
│   ├── login.page.js
│   ├── products.page.js
│   └── cart.page.js
├── test/
│   ├── login.test.js
│   └── cart.test.js
├── package.json
├── wdio.conf.js
└── README.md
```

## Desafío
1. Completar o mejorar los tests existentes.
2. Aplicar buenas prácticas de automatización.
3. Opcional: Integrar con Allure para generar reportes.

## Instrucciones de la prueba

### 1️⃣ Automatizar el flujo de login
- Ingresar al sitio
- Completar usuario y contraseña
- Validar que accede correctamente al dashboard (Products page)
- Cerrar sesión y validarlo

### 2️⃣ Agregar 2 productos al carrito
- Elegir dos productos distintos
- Ir al carrito (ícono arriba a la derecha)
- Validar que estén los productos correctos en el carrito

### 🔁 Bonus (si hay tiempo)
- Remover uno de los productos
- Validar que solo quede uno en el carrito

¡Buena suerte! 🍀