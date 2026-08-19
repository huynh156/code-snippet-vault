# Sprint 1 — Sprint Review

> **Dự án:** Code Snippet & Tech Notes Vault
> **Sprint số:** 1 / 2
> **Ngày tổ chức Sprint Review:** Thứ Sáu, 24/07/2026 lúc 14:00
> **Địa điểm:** Phòng học / Trực tuyến (Google Meet) — ĐH Nguyễn Tất Thành

---

## 👥 Thành phần tham dự

| Vai trò | Người tham gia | MSSV |
| :--- | :--- | :--- |
| Người trình bày (PO + Dev) | Trần Tuấn Huynh | 2000005479 |
| Giảng viên hướng dẫn (Stakeholder) | Giảng viên bộ môn Agile/Scrum | — |

---

## 🎯 Sprint Goal Recap

> **Mục tiêu Sprint 1:** "Hoàn thiện bộ tính năng MVP cốt lõi: tạo, lưu trữ, xem với tô màu cú pháp và copy 1-click."

**Kết quả:** ✅ **ĐẠT ĐƯỢC HOÀN TOÀN** — 10/10 Story Points hoàn thành.

---

## ✅ Tính năng đã hoàn thành (Increment Sprint 1)

### US01 — Tạo Snippet Mới
**Story:** Là người dùng, tôi muốn tạo đoạn code mới để lưu trữ vào kho code cá nhân.

**Kết quả demo:**
- Form tạo snippet hoạt động với đầy đủ các trường: Tiêu đề, Ngôn ngữ (dropdown chọn JS/Python/C++/Java/SQL/CSS/JSON), Nội dung Code (textarea), Mô tả ngắn.
- Dữ liệu được lưu ngay vào LocalStorage sau khi bấm "Thêm Snippet".
- Tải lại trang → snippet vẫn hiển thị đúng.

**Acceptance Criteria:**
- [x] Form có đủ 4 trường nhập liệu (title, language, code, description)
- [x] Snippet xuất hiện ngay trên danh sách sau khi submit
- [x] Dữ liệu được lưu vào LocalStorage — còn lại sau khi tải lại trang

### US02 — Syntax Highlighting
**Story:** Là người dùng, tôi muốn xem code với tô màu cú pháp để dễ đọc.

**Kết quả demo:**
- Code JavaScript hiển thị đúng màu sắc theo cú pháp (keywords màu tím, strings màu xanh lá, comments màu xám).
- Hỗ trợ các ngôn ngữ lập trình: JavaScript, TypeScript, Python, C++/C, Java, SQL, CSS, JSON.
- Màu sắc phù hợp cả ở chế độ Dark Mode và Light Mode.

**Acceptance Criteria:**
- [x] PrismJS render đúng màu cho các ngôn ngữ được hỗ trợ
- [x] Code block có max-height với scroll khi đoạn code dài
- [x] Giao diện responsive — hiển thị đúng trên mobile

### US03 — Copy 1-Click
**Story:** Là người dùng, tôi muốn nút Copy 1-click để sao chép code vào clipboard.

**Kết quả demo:**
- Nút "Copy" hiển thị ở góc trên phải mỗi code block.
- Bấm nút → icon đổi sang Checkmark ✓ + badge "Đã chép!" trong 2 giây.
- Nội dung code được sao chép đúng vào clipboard, dán vào VS Code không bị mất ký tự.
- Toast notification xuất hiện ở góc dưới màn hình xác nhận thao tác.

**Acceptance Criteria:**
- [x] `navigator.clipboard.writeText()` gọi thành công trên Chrome và Edge
- [x] Feedback trực quan sau khi copy (icon đổi + toast)
- [x] Không có lỗi khi copy snippet có ký tự đặc biệt

---

## ❌ Tính năng chưa hoàn thành trong Sprint 1

> **Không có.** Tất cả 3 User Stories (US01, US02, US03) với tổng 10 Story Points đã hoàn thành đúng hạn.

---

## 💬 Phản hồi từ Giảng viên (Stakeholder Feedback)

| Phản hồi | Loại | Hành động |
| :--- | :---: | :--- |
| "Giao diện Dark Mode trông rất chuyên nghiệp, giống IDE thật" | ✅ Tích cực | Tiếp tục phát huy |
| "Cần có tính năng tìm kiếm và phân loại để sử dụng thực tế được" | 💡 Góp ý | Đã có trong kế hoạch Sprint 2 (US04, US05) |
| "Story Point ước lượng hợp lý, 5 SP cho Syntax Highlighting là đúng" | ✅ Tích cực | Ghi nhận phương pháp ước lượng |
| "Nên duy trì ghi chép Daily Standup chi tiết hơn" | 💡 Góp ý | Áp dụng cải tiến trong Sprint 2 |

---

## 📊 Burndown Chart Sprint 1

```
Story Points còn lại (Y) theo Ngày làm việc (X):

10 │▓▓▓▓▓▓▓▓
 8 │        ▓▓▓▓
 6 │            ▓▓▓▓
 5 │                ▓▓
 3 │                  ▓▓
 0 │                    ▓▓
   └────────────────────────── Ngày (Tháng 07/2026)
     13  14  15  16  17  20  21  22  23  24
```

**Nhận xét:** Đường burndown diễn ra đều đặn theo từng ngày làm việc (13/07 → 24/07/2026). Sinh viên Trần Tuấn Huynh duy trì tiến độ ổn định.

---

## 🚀 Sprint 1 Increment

> **Bản sản phẩm chạy được (Increment) cuối Sprint 1:**
> - Ứng dụng Web SPA tại `localhost:5173` hoạt động hoàn chỉnh với 3 tính năng MVP.
> - Production build (`dist/`) ổn định, bundle: 261KB (gzip 82KB).
> - 5 đoạn code mẫu được nạp sẵn (React Hook, SQL, C++, Python, CSS).

---

## 📅 Bước tiếp theo

- **Sprint 2 bắt đầu:** Thứ Hai, 27/07/2026
- **Mục tiêu Sprint 2:** Tra cứu nâng cao (Filter + Search), Chỉnh sửa/Xóa và sao lưu dữ liệu (Export/Import JSON)
