# 業務人脈追蹤 — Vercel 部署說明

## 部署步驟（約 5 分鐘）

### 第一步：上傳到 GitHub
1. 登入 [github.com](https://github.com)，點右上角 **+** → **New repository**
2. 取名（例如 `notion-crm`），選 Private，按 **Create repository**
3. 把這個資料夾裡的所有檔案上傳（拖曳到頁面即可）

### 第二步：部署到 Vercel
1. 登入 [vercel.com](https://vercel.com)，用 GitHub 帳號登入
2. 點 **Add New Project** → 選你剛建的 GitHub repo
3. **Framework Preset** 選 **Other**
4. **Root Directory** 保持預設
5. 點 **Environment Variables**，新增：
   - Name: `NOTION_TOKEN`
   - Value: `你的 Notion Integration Token`（`secret_xxx...`）
6. 按 **Deploy**，等約 1 分鐘

### 第三步：設定完成
- Vercel 會給你一個網址（例如 `notion-crm.vercel.app`）
- 第一次打開輸入 Database ID，之後會記住
- 分享這個網址給主管，主管直接開就能看

## 手機加到桌面（當 App 用）
- **iPhone**：Safari 打開網址 → 分享 → 加入主畫面
- **Android**：Chrome 打開網址 → 右上角選單 → 新增至主畫面

## Notion 資料庫欄位設定
資料庫需有以下欄位（名稱要一樣）：

| 欄位名稱 | 類型 |
|---------|------|
| 姓名 | Title |
| 公司 | Text |
| 職稱 | Text |
| Line / IG | Text |
| 電話 | Phone |
| 跟進狀態 | Select（選項：剛認識、已加聯絡、第一次聊天、持續跟進、準備報價、成交、暫停）|
| 認識場合 | Text |
| 備註 | Text |

## Token 安全說明
Token 存在 Vercel 環境變數，不會出現在網頁原始碼中，主管看不到。
