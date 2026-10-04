# UP-FANS

bili_fans 平台产品代码仓库。Nuxt4 (SSR) + FastAPI + MySQL。

> 开发规范、技术选型依据、架构纪律见工作区 `../技术选型-定案.md`（正式版将拷贝进 docs/）。

## 本地开发

```bash
# 终端1：后端（先起）
cd backend
python -m venv .venv                    # 首次
.venv/Scripts/activate                 # Windows；Linux/macOS: source .venv/bin/activate
pip install -r requirements.txt        # 首次
uvicorn app.main:app --port 8000 --reload

# 终端2：前端
cd frontend
npm install                             # 首次
npm run dev
```

打开 http://localhost:3000 —— 首页会显示 `/api/healthz` 探针结果（经 Nitro 反代到 FastAPI）。

## 架构纪律

- 所有 B 站取数必须经 `backend/app/services/sync.py`（全站唯一出口 + 令牌桶），不得直调 `services/bili/`
- 数据库/表结构在产品需求定稿前**保持空白**（models/ 仅为占位）
- 用户 B 站凭证加密落库，密钥走环境变量；任何凭证/状态文件不入 git
