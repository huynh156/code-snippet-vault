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
| **Thời gian thực hiện** | 17/08/2026 – 05/09/2026 (2 Sprint) |

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

## 🚀 Cài đặt và chạy ứng dụng

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

## 📑 Danh mục Tài liệu Agile

| Tài liệu | Mô tả | Đường dẫn |
| :--- | :--- | :--- |
| **Product Backlog** | 7 User Stories, Story Points, phân bổ Sprint | [docs/agile/product-backlog.md](./docs/agile/product-backlog.md) |
| **Sprint 1 — Planning** | Mục tiêu Sprint 1, Sprint Backlog US01–US03 | [docs/agile/sprint-1/sprint-planning.md](./docs/agile/sprint-1/sprint-planning.md) |
| **Sprint 1 — Daily Standups** | Nhật ký làm việc (17/08 – 28/08/2026) | [docs/agile/sprint-1/daily-standups.md](./docs/agile/sprint-1/daily-standups.md) |
| **Sprint 1 — Review** | Biên bản demo cuối Sprint 1 (10 SP Hoàn thành) | [docs/agile/sprint-1/sprint-review.md](./docs/agile/sprint-1/sprint-review.md) |
| **Sprint 1 — Retrospective** | Rút kinh nghiệm Sprint 1 (Keep / Problem / Try) | [docs/agile/sprint-1/sprint-retro.md](./docs/agile/sprint-1/sprint-retro.md) |
| **Sprint 2 — Planning** | Mục tiêu Sprint 2, cải tiến từ Sprint 1 | [docs/agile/sprint-2/sprint-planning.md](./docs/agile/sprint-2/sprint-planning.md) |
| **Sprint 2 — Daily Standups** | Nhật ký làm việc (31/08 – 05/09/2026) | [docs/agile/sprint-2/daily-standups.md](./docs/agile/sprint-2/daily-standups.md) |
| **Sprint 2 — Review** | Biên bản demo Sprint 2 & Tổng kết 23 SP (100%) | [docs/agile/sprint-2/sprint-review.md](./docs/agile/sprint-2/sprint-review.md) |
| **Sprint 2 — Retrospective** | Đánh giá cải tiến & bài học kinh nghiệm | [docs/agile/sprint-2/sprint-retro.md](./docs/agile/sprint-2/sprint-retro.md) |
| **Kiến trúc hệ thống** | Sơ đồ Mermaid component và luồng dữ liệu | [docs/architecture/component-diagram.md](./docs/architecture/component-diagram.md) |

---

*Sinh viên thực hiện: **Trần Tuấn Huynh** (MSSV: **2000005479**) — Trường Đại học Nguyễn Tất Thành*