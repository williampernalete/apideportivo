# Node.js REST API Deportivo

API para consultar resultados Deportivos.
Esta api esta en proceso de desarrollo y poco a poco estare realizando commit a la medida que se vayan terminando
los respectivos Endpoint
Falta mucha documentacion y modificaciones asi que pido disculpa de antemano.

## Endpoints

- [Login](#login)
- [User](#user)

### Login

| EndoPoint                      | Description                                    | Meth | Auth | HTTPS | CORS |
| ------------------------------ | ---------------------------------------------- | ---- | ---- | ----- | ---- |
| [Login]({URL_BASE}/api/login/) | Permite iniciar sesion con username y password | POST | No   | Yes   | No   |

**[⬆ Back to Index](#Endpoints)**

### User

| EndoPoint                    | Description                      | Meth | Auth | HTTPS | CORS |
| ---------------------------- | -------------------------------- | ---- | ---- | ----- | ---- |
| [User]({URL_BASE}/api/user/) | Obtiene los usuarios registrados | GET  | No   | Yes   | No   |
| [User]({URL_BASE}/api/user/) | Permite grabar un usuario        | POST | No   | Yes   | No   |

## Usage

```
npm install
npm run dev
```
