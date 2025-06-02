# Mac 價格比較網站

## 專案概述
 
## 技術架構
- **前端技術**: HTML5, CSS3, Vanilla JavaScript
- **圖表庫**: Chart.js
- **數據解析**: 使用自定義的 JavaScript 函數進行數據解析和處理
- **本地存儲**: localStorage 用於數據持久化

## 文件結構
```
mac-price-compare
├── src
│   ├── index.html          # 主 HTML 文件
│   ├── js
│   │   ├── main.js         # 入口 JavaScript 文件
│   │   ├── parser.js       # 數據解析功能
│   │   ├── database.js      # 本地數據管理
│   │   ├── charts.js       # 圖表渲染
│   │   ├── clipboard.js     # 剪貼簿監控
│   │   └── utils.js        # 工具函數
│   ├── css
│   │   └── style.css       # 應用樣式
│   └── assets
│       └── fonts/          # 字體文件
├── package.json            # npm 配置文件
└── README.md               # 專案文檔
```

## 安裝與使用
1. **克隆專案**
   ```bash
   git clone https://github.com/yourusername/mac-price-compare.git
   cd mac-price-compare
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動應用**
   - 打開 `src/index.html` 文件於瀏覽器中查看應用。

## 功能特性
- 支援多種數據輸入方式（URL、文件上傳、剪貼簿監控）
- 自動解析產品價格和規格
- 提供多維度的視覺化分析
- 本地數據存儲與管理

## 貢獻
歡迎任何形式的貢獻！請提交問題或拉取請求。

## 授權
本專案採用 MIT 授權。詳情請參見 LICENSE 文件。