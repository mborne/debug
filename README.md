# mborne/debug

A sample application to illustrate some Docker and Kubernetes features (auto-restarts, memory limits,...)

## Parameters

| Name          | Description                                                         | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| `DEBUG_PORT`  | Listening port                                                      | `3000`  |
| `DEBUG_COLOR` | A color to illustrates env vars handling and blue/green deployments | `null`  |

## Usage

### Usage with docker

```bash
# start on http://localhost:3000
docker compose up -d --build
```

### Local usage

```bash
# install dependencies
npm install
# build front
npm run build
# start on http://localhost:3000
npm run start
```

## Advanced usage

### /api/bug/crash - Force API crash to test auto-restart

```bash
curl -X POST http://localhost:3000/api/bug/crash
```

### /api/bug/memory-leak - Simulate memory leak

```bash
while true; do curl -X POST -sS http://localhost:3000/api/bug/memory-leak ; echo; sleep 1; done
```

## License

[MIT](LICENSE)
