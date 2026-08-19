# Sprint 1 — Sprint Planning

> **Dự án:** Code Snippet & Tech Notes Vault
> **Quy trình:** Scrum
> **Sprint số:** 1 / 2
> **Thời gian:** 13/07/2026 (Thứ Hai) → 24/07/2026 (Thứ Sáu)
> **Buổi họp Sprint Planning:** 13/07/2026 lúc 09:00

---

## 👥 Scrum Team & Phân công Chức danh

| Chức danh Scrum | Người đảm nhiệm | MSSV | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **Product Owner (PO)** | Trần Tuấn Huynh | 2000005479 | Xác định Sprint Goal, lựa chọn User Story từ Product Backlog, duyệt DoD |
| **Scrum Master (SM)** | Trần Tuấn Huynh | 2000005479 | Điều phối buổi Sprint Planning, theo dõi tiến độ, gỡ bỏ blocker |
| **Developer (Dev)** | Trần Tuấn Huynh | 2000005479 | Khởi tạo dự án, lập trình Frontend React, tích hợp thư viện PrismJS |
| **Tester (QA)** | Trần Tuấn Huynh | 2000005479 | Thiết kế kịch bản test, kiểm thử chức năng và cross-browser |

> **Ghi chú:** Toàn bộ các chức danh trong Scrum Team (Product Owner, Scrum Master, Developer, Tester) do sinh viên **Trần Tuấn Huynh** trực tiếp đảm nhiệm và thực thi đầy đủ theo quy trình Scrum.

---

## 🎯 Sprint Goal (Mục tiêu Sprint 1)

> **"Hoàn thiện bộ tính năng MVP cốt lõi của ứng dụng Code Vault: người dùng có thể tạo, lưu trữ, xem với tô màu cú pháp và sao chép đoạn code chỉ bằng 1 nút bấm."**

Sau Sprint 1, ứng dụng phải có khả năng hoạt động như một kho lưu trữ code cơ bản chạy được trên trình duyệt mà không cần server.

---

## 📋 Sprint Backlog

> Danh sách các User Story được kéo vào Sprint 1 từ Product Backlog:

| Mã US | Mô tả | Story Points | Người thực hiện | Trạng thái |
| :---: | :--- | :---: | :---: | :---: |
| US01 | Tạo snippet mới (title, language, code, description) | 3 SP | Trần Tuấn Huynh | ✅ Done |
| US02 | Xem code với tô màu cú pháp (PrismJS Syntax Highlighting) | 5 SP | Trần Tuấn Huynh | ✅ Done |
| US03 | Nút Copy 1-click sao chép code vào clipboard | 2 SP | Trần Tuấn Huynh | ✅ Done |

**Tổng Story Points Sprint 1:** `10 SP`

---

## 🗓️ Kế hoạch thực hiện chi tiết

| Ngày | Thứ | Công việc dự kiến | US liên quan |
| :---: | :--- | :--- | :---: |
| 13/07/2026 | Thứ Hai | Khởi tạo dự án Vite + React, cài đặt dependencies (PrismJS, Lucide React) | — |
| 14/07/2026 | Thứ Ba | Xây dựng `useLocalStorage` custom hook và cấu trúc dữ liệu Snippet | US01 |
| 15/07/2026 | Thứ Tư | Xây dựng `SnippetForm.jsx` — Form thêm mới snippet với dropdown ngôn ngữ | US01 |
| 16/07/2026 | Thứ Năm | Tích hợp PrismJS vào `SnippetCard.jsx`, kiểm thử render đúng màu theo ngôn ngữ | US02 |
| 17/07/2026 | Thứ Sáu | Thêm nút Copy 1-click vào SnippetCard, test clipboard API | US03 |
| 20/07/2026 | Thứ Hai | Review và sửa lỗi, kiểm thử tích hợp toàn bộ US01+US02+US03 | — |
| 21/07/2026 | Thứ Ba | Hoàn thiện CSS Dark Mode, đảm bảo responsive trên mobile | US02 |
| 22/07/2026 | Thứ Tư | Kiểm thử lần cuối, `npm run build` production | — |
| 23/07/2026 | Thứ Năm | Buffer — sửa lỗi phát sinh nếu có | — |
| 24/07/2026 | Thứ Sáu | Sprint Review + Sprint Retrospective | — |

---

## ✅ Tiêu chí Hoàn thành (Definition of Done)

Một User Story trong Sprint 1 được coi là **Done** khi:

- [x] Tính năng hoạt động ổn định trên Chrome và Edge
- [x] Code không có lỗi trong Developer Console (F12)
- [x] Giao diện hiển thị đúng trên desktop (≥ 1024px) và mobile (≤ 768px)
- [x] Dữ liệu snippet được lưu và đọc lại đúng từ LocalStorage
- [x] `npm run build` thoát exit code 0

---

## 🔧 Công cụ và Môi trường

- **Thực hiện:** Trần Tuấn Huynh (MSSV: 2000005479)
- **Quy trình:** Scrum
- **IDE:** Visual Studio Code
- **Framework:** Vite 5.4 + React 19
- **Thư viện:** PrismJS (syntax highlighting), Lucide React (icons)
- **Lưu trữ:** Browser LocalStorage
- **Quản lý Backlog:** Trello / GitHub Projects
- **Version Control:** Git / GitHub
