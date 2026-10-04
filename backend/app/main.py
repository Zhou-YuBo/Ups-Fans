from fastapi import FastAPI

app = FastAPI(title="UP-FANS API", version="0.1.0")


@app.get("/healthz")
def healthz():
    """存活探针：Nuxt 反代与 Nginx 都指向这里"""
    return {"status": "ok", "service": "up-fans-api"}
