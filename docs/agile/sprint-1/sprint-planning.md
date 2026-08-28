# Sprint 1 — Sprint Planning

> **Dự án:** Code Snippet & Tech Notes Vault
> **Quy trình:** Scrum
> **Sprint số:** 1 / 2
> **Thời gian:** 17/08/2026 (Thứ Hai) → 28/08/2026 (Thứ Sáu)
> **Buổi họp Sprint Planning:** 17/08/2026 lúc 09:00

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
| 17/08/2026 | Thứ Hai | Khởi tạo dự án Vite + React, cài đặt dependencies (PrismJS, Lucide React) | — |
| 18/08/2026 | Thứ Ba | Xây dựng `useLocalStorage` custom hook và cấu trúc dữ liệu Snippet | US01 |
| 19/08/2026 | Thứ Tư | Xây dựng `SnippetForm.jsx` — Form thêm mới snippet với dropdown ngôn ngữ | US01 |
| 20/08/2026 | Thứ Năm | Tích hợp PrismJS vào `SnippetCard.jsx`, kiểm thử render đúng màu theo ngôn ngữ | US02 |
| 21/08/2026 | Thứ Sáu | Thêm nút Copy 1-click vào SnippetCard, test clipboard API | US03 |
| 24/08/2026 | Thứ Hai | Review và sửa lỗi, kiểm thử tích hợp toàn bộ US01+US02+US03 | — |
| 25/08/2026 | Thứ Ba | Hoàn thiện CSS Dark Mode, đảm bảo responsive trên mobile | US02 |
| 26/08/2026 | Thứ Tư | Kiểm thử lần cuối, `npm run build` production | — |
| 27/08/2026 | Thứ Năm | Buffer — sửa lỗi phát sinh nếu có | — |
| 28/08/2026 | Thứ Sáu | Sprint Review + Sprint Retrospective | — |

---

## ✅ Tiêu chí Hoàn thành (Definition of Done)

- [x] Tính năng hoạt động ổn định trên Chrome và Edge
- [x] Code không có lỗi trong Developer Console (F12)
- [x] Giao diện hiển thị đúng trên desktop (≥ 1024px) và mobile (≤ 768px)
- [x] Dữ liệu snippet được lưu và đọc lại đúng từ LocalStorage
- [x] `npm run build` thoát exit code 0