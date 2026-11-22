# NTUH SDM v4 — 安全預備版（未部署）

## 已實作
- 病人填答頁與 PTMC 醫師 eligibility 複核頁分離
- 醫師端三方案討論紀錄、複核狀態與醫師備註
- API 範例：OIDC JWT 驗證、clinician/admin RBAC、PostgreSQL、Fernet 應用層加密、HMAC 個案索引、append-only 複核與 audit log
- 未配置安全環境變數時 API 拒絕啟動；前端不會把資料存在 localStorage

## 上線前必要工作（尚未完成）
1. 由院方核定 OIDC/SSO，並配置 OIDC_ISSUER、OIDC_AUDIENCE、OIDC_JWKS_URL；需加入正式病人入口授權機制（目前 submit 需 OIDC token）。
2. 配置 PostgreSQL DATABASE_URL、SDM_FERNET_KEY、SDM_HASH_KEY；由秘密管理系統保存，啟用資料庫儲存加密及 TLS。
3. 前端目前沒有 OIDC 登入流程／bearer token 取得介面，需接院方身份系統才能提交與複核。
4. 正式環境應配置個案層級授權、審計防竄改、備份還原、保留/刪除政策、資料匯出授權、速率限制、CSRF/CORS/安全標頭、金鑰輪替、滲透測試及臨床規則審查。
5. 本版 PDF/Excel 匯出尚未接上安全後端，請勿以瀏覽器直接下載敏感個案資料。
6. 正式部署前須完成院內資安、個資及 IRB/品質改善目的之審核；不得使用真實病人資料測試。

## 開發環境
`pip install -r backend/requirements.txt`
建立 PostgreSQL 資料庫，執行 `backend/schema.sql`。
提供必要環境變數後執行 `uvicorn backend.app:app --reload`。
前端須透過同源 HTTPS reverse proxy 提供，並將 `/api` 導向 FastAPI。
此專案為可延伸的 staging 程式碼，不代表完成院內資安驗收。