# Code Snippet & Tech Notes Vault

> Ứng dụng web lưu trữ và tra cứu đoạn code cá nhân — được xây dựng theo quy trình Scrum trong khuôn khổ môn học tại Trường Đại học Nguyễn Tất Thành.

---

## 📌 Thông tin sinh viên & Đề tài

| Mục | Chi tiết |
| :--- | :--- |
| **Họ và tên sinh viên** | **Trần Tuấn Huynh** |
| **Mã số sinh viên (MSSV)** | **2000005479** |
| **Môn học** | Phát triển phần mềm theo quy trình Agile/Scrum |
| **Trường** | Trường Đại học Nguyễn Tất Thành (NTTU) |
| **Quy trình áp dụng** | **Scrum** (Trần Tuấn Huynh đảm nhận đầy đủ: PO, SM, Dev, Tester) |
| **Thời gian thực hiện** | 13/07/2026 – 07/08/2026 (2 Sprint / 4 tuần) |

---

## 👥 Scrum Team & Phân công Chức danh

| Chức danh Scrum | Người đảm nhiệm | MSSV | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **Product Owner (PO)** | Trần Tuấn Huynh | 2000005479 | Quản lý Product Backlog, định nghĩa User Story & Acceptance Criteria |
| **Scrum Master (SM)** | Trần Tuấn Huynh | 2000005479 | Tổ chức các sự kiện Scrum, điều phối tiến độ, giải quyết blocker |
| **Developer (Dev)** | Trần Tuấn Huynh | 2000005479 | Phát triển mã nguồn Frontend React, tối ưu UI/UX và logic lưu trữ |
| **Tester (QA)** | Trần Tuấn Huynh | 2000005479 | Kiểm thử chức năng, kiểm thử đa trình duyệt, đối soát DoD |

---

## 📖 Mô tả dự án

**Code Snippet & Tech Notes Vault** là một ứng dụng web Single Page Application (SPA) giúp lập trình viên lưu trữ, tổ chức và tra cứu nhanh các đoạn code thường dùng. Ứng dụng hoạt động hoàn toàn trên trình duyệt, không cần server backend — dữ liệu được đồng bộ và lưu trữ an toàn trong Browser LocalStorage.

### 🌟 Tính năng chính

| Tính năng | Mô tả |
| :--- | :--- |
| **Tạo & Lưu Snippet** | Nhập tiêu đề, chọn ngôn ngữ lập trình, dán code và thêm mô tả ngắn |
| **Syntax Highlighting** | Tô màu cú pháp tự động theo ngôn ngữ nhờ PrismJS (JS, Python, C++, Java, SQL, CSS...) |
| **Copy 1-Click** | Sao chép toàn bộ code vào clipboard chỉ bằng 1 nút bấm |
| **Tags & Phân loại** | Gán thẻ phân loại tùy ý (`#react`, `#sql`, `#algorithm`, `#hooks`...) |
| **Tìm kiếm Real-time** | Lọc theo từ khóa, ngôn ngữ và tag đồng thời — cập nhật tức thì qua `useMemo` |
| **Chỉnh sửa & Xóa** | Sửa hoặc xóa snippet bất kỳ lúc nào với modal form và hộp thoại xác nhận |
| **Export / Import JSON** | Sao lưu toàn bộ kho code ra file `.json` và khôi phục lại dễ dàng |
| **Dark / Light Mode** | Chuyển đổi giao diện sáng/tối, lưu tùy chọn vào LocalStorage |

---

## 🎯 Mục tiêu học tập môn Agile/Scrum

Dự án này được thực hiện trong khuôn khổ môn học **Agile/Scrum** tại Trường Đại học Nguyễn Tất Thành, nhằm rèn luyện và áp dụng:

- Quy trình **Scrum** chuẩn với việc thực thi đầy đủ các chức danh Product Owner, Scrum Master, Developer và Tester
- Quản lý **Product Backlog** với 7 User Stories và ước lượng Story Points theo Fibonacci
- Tổ chức 2 **Sprint** (mỗi Sprint 2 tuần / 10 ngày làm việc) với đầy đủ 4 sự kiện Scrum: Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective
- Cải tiến liên tục qua từng Sprint dựa trên **Sprint Retrospective (KPT)**
- Sử dụng **GitHub** làm nền tảng quản lý mã nguồn, Issue templates và Pull Request templates

---

## 💻 Công nghệ sử dụng

| Công nghệ | Phiên bản | Vai trò |
| :--- | :---: | :--- |
| [Vite](https://vitejs.dev/) | 5.4.11 | Build tool & Dev server tốc độ cao |
| [React](https://react.dev/) | 19.x | Thư viện UI xây dựng Single Page Application |
| [PrismJS](https://prismjs.com/) | 1.x | Syntax Highlighting tô màu cú pháp đa ngôn ngữ |
| [Lucide React](https://lucide.dev/) | Latest | Bộ icon vector SVG |
| Browser LocalStorage | — | Cơ chế lưu trữ dữ liệu offline-first |
| JavaScript (ES6+) | — | Ngôn ngữ phát triển |

---

## 🚀 Cài đặt và chạy ứng dụng

### Yêu cầu hệ thống

- **Node.js** >= 18.0.0 (khuyến nghị v20 LTS trở lên)
- **npm** >= 9.0.0

### Các bước khởi chạy

```bash
# 1. Clone repository về máy
git clone https://github.com/huynh156/code-snippet-vault.git
cd code-snippet-vault

# 2. Cài đặt các dependencies
npm install

# 3. Chạy ứng dụng ở chế độ Development
npm run dev
```

Mở trình duyệt và truy cập: **`http://localhost:5173`**

### Build Production

```bash
# Build ứng dụng ra thư mục dist/
npm run build

# Xem thử bản build production trên local
npm run preview
```

---

## 📂 Cấu trúc thư mục

```
modest-lovelace/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── user-story.md         # Template tạo Issue dạng User Story
│   │   └── bug-report.md         # Template báo cáo lỗi
│   └── PULL_REQUEST_TEMPLATE.md  # Checklist khi tạo Pull Request
│
├── docs/
│   ├── agile/
│   │   ├── product-backlog.md    # Danh sách 7 User Stories (23 SP)
│   │   ├── sprint-1/             # Sprint 1 (13/07/2026 → 24/07/2026)
│   │   │   ├── sprint-planning.md
│   │   │   ├── daily-standups.md
│   │   │   ├── sprint-review.md
│   │   │   └── sprint-retro.md
│   │   └── sprint-2/             # Sprint 2 (27/07/2026 → 07/08/2026)
│   │       ├── sprint-planning.md
│   │       ├── daily-standups.md
│   │       ├── sprint-review.md
│   │       └── sprint-retro.md
│   └── architecture/
│       └── component-diagram.md  # Kiến trúc component & luồng dữ liệu
│
├── src/
│   ├── components/               # React Components
│   │   ├── Header.jsx            # Header, Dark/Light mode, Export/Import
│   │   ├── Sidebar.jsx           # Danh mục, lọc ngôn ngữ, Tag Cloud
│   │   ├── SearchBar.jsx         # Thanh tìm kiếm và sắp xếp
│   │   ├── SnippetCard.jsx       # Card hiển thị code + tô màu + copy
│   │   ├── SnippetForm.jsx       # Form thêm mới / chỉnh sửa snippet
│   │   └── Toast.jsx             # Thông báo nổi (Toast notifications)
│   ├── hooks/
│   │   └── useLocalStorage.js    # Custom Hook đồng bộ State ↔ LocalStorage
│   ├── data/
│   │   └── initialSnippets.js    # Dữ liệu code mẫu khởi tạo
│   ├── App.jsx                   # Root component kết nối toàn bộ logic
│   ├── index.css                 # CSS variables & responsive styling
│   └── main.jsx                  # React entry point
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 📑 Danh mục Tài liệu Agile

| Tài liệu | Mô tả | Đường dẫn |
| :--- | :--- | :--- |
| **Product Backlog** | 7 User Stories, Story Points, phân bổ Sprint | [docs/agile/product-backlog.md](./docs/agile/product-backlog.md) |
| **Sprint 1 — Planning** | Mục tiêu Sprint 1, Sprint Backlog US01–US03 | [docs/agile/sprint-1/sprint-planning.md](./docs/agile/sprint-1/sprint-planning.md) |
| **Sprint 1 — Daily Standups** | Nhật ký 10 ngày làm việc (13/07 – 24/07/2026) | [docs/agile/sprint-1/daily-standups.md](./docs/agile/sprint-1/daily-standups.md) |
| **Sprint 1 — Review** | Biên bản demo cuối Sprint 1 (10 SP Hoàn thành) | [docs/agile/sprint-1/sprint-review.md](./docs/agile/sprint-1/sprint-review.md) |
| **Sprint 1 — Retrospective** | Rút kinh nghiệm Sprint 1 (Keep / Problem / Try) | [docs/agile/sprint-1/sprint-retro.md](./docs/agile/sprint-1/sprint-retro.md) |
| **Sprint 2 — Planning** | Mục tiêu Sprint 2, cải tiến từ Sprint 1 | [docs/agile/sprint-2/sprint-planning.md](./docs/agile/sprint-2/sprint-planning.md) |
| **Sprint 2 — Daily Standups** | Nhật ký 10 ngày làm việc (27/07 – 07/08/2026) | [docs/agile/sprint-2/daily-standups.md](./docs/agile/sprint-2/daily-standups.md) |
| **Sprint 2 — Review** | Biên bản demo Sprint 2 & Tổng kết 23 SP (100%) | [docs/agile/sprint-2/sprint-review.md](./docs/agile/sprint-2/sprint-review.md) |
| **Sprint 2 — Retrospective** | Đánh giá cải tiến & bài học kinh nghiệm | [docs/agile/sprint-2/sprint-retro.md](./docs/agile/sprint-2/sprint-retro.md) |
| **Kiến trúc hệ thống** | Sơ đồ Mermaid component và luồng dữ liệu | [docs/architecture/component-diagram.md](./docs/architecture/component-diagram.md) |

---

*Sinh viên thực hiện: **Trần Tuấn Huynh** (MSSV: **2000005479**) — Trường Đại học Nguyễn Tất Thành*
