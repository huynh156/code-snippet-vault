# Sprint 2 — Sprint Review

> **Dự án:** Code Snippet & Tech Notes Vault
> **Sprint số:** 2 / 2 (Sprint cuối)
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Ngày tổ chức Sprint Review:** Thứ Sáu, 07/08/2026 lúc 14:00
> **Địa điểm:** Phòng học / Trực tuyến (Google Meet) — ĐH Nguyễn Tất Thành

---

## 👥 Thành phần tham dự

| Vai trò | Người tham gia | MSSV |
| :--- | :--- | :--- |
| Người trình bày (PO + Dev) | Trần Tuấn Huynh | 2000005479 |
| Giảng viên hướng dẫn (Stakeholder) | Giảng viên bộ môn Agile/Scrum | — |

---

## 🎯 Sprint Goal Recap

> **Mục tiêu Sprint 2:** "Nâng cấp Code Vault lên sản phẩm hoàn chỉnh với phân loại Tags, tìm kiếm tức thì, chỉnh sửa/xóa và sao lưu JSON."

**Kết quả:** ✅ **ĐẠT ĐƯỢC HOÀN TOÀN** — 13/13 Story Points hoàn thành.

---

## ✅ Tính năng đã hoàn thành (Increment Sprint 2)

### US04 — Gán Tags Phân loại
**Story:** Là người dùng, tôi muốn gán Tags phân loại vào mỗi đoạn code.

**Kết quả demo:**
- Form tạo/sửa snippet có thêm field Tags (nhập dạng `react, hooks, frontend` cách nhau bằng dấu phẩy).
- Tags hiển thị dưới mỗi SnippetCard dạng Pills có màu sắc.
- Bấm vào Tag Pill → Sidebar tự động lọc chỉ hiện snippet có tag đó.
- Sidebar có Tag Cloud thống kê số lượng snippet theo từng tag.

**Acceptance Criteria:**
- [x] Tags được lưu dưới dạng array trong LocalStorage
- [x] Tag Pill click-to-filter hoạt động đúng
- [x] Sidebar Tag Cloud hiển thị đúng số lượng snippet mỗi tag

### US05 — Tìm kiếm & Lọc Real-time
**Story:** Là người dùng, tôi muốn tìm kiếm tức thì theo từ khóa và lọc theo Tag/Ngôn ngữ.

**Kết quả demo:**
- Gõ từ khóa vào SearchBar → danh sách cập nhật ngay (không có độ trễ nhờ `useMemo`).
- Tìm kiếm theo: tiêu đề snippet, nội dung code, mô tả, và tên tags.
- Có thể kết hợp: Search + lọc Ngôn ngữ + lọc Tag cùng lúc.
- Hiển thị Empty State khi không có kết quả, có nút "Đặt lại bộ lọc".
- Dropdown sort: Mới nhất / Cũ nhất / Tên A-Z.

**Acceptance Criteria:**
- [x] Filter hoạt động real-time (không cần Enter)
- [x] 4 điều kiện filter có thể kết hợp đồng thời
- [x] Empty State hiển thị đúng khi không có kết quả
- [x] Nút reset filter hoạt động

### US06 — Chỉnh sửa & Xóa Snippet
**Story:** Là người dùng, tôi muốn chỉnh sửa và xóa đoạn code.

**Kết quả demo:**
- Nút Edit (bút chì) mở lại Modal Form với dữ liệu snippet điền sẵn.
- Lưu → snippet được cập nhật ngay trên giao diện và trong LocalStorage.
- Nút Delete (thùng rác) hiện Confirm Dialog "Bạn có chắc muốn xóa...?".
- Xác nhận xóa → snippet biến mất, Toast thông báo "Đã xóa đoạn code".

**Acceptance Criteria:**
- [x] Form Edit pre-fill đúng tất cả fields (title, language, code, description, tags)
- [x] Confirm Dialog hiện trước khi xóa (tránh xóa nhầm)
- [x] LocalStorage được cập nhật đúng sau Edit và Delete

### US07 — Export / Import JSON
**Story:** Là người dùng, tôi muốn Export/Import dữ liệu dạng JSON để sao lưu.

**Kết quả demo:**
- Nút "Export" ở Header → tải về file `code_vault_backup_2026-08-07.json`.
- File JSON chứa đúng toàn bộ snippets, có thể mở đọc bằng VS Code.
- Nút "Import" → chọn file JSON từ máy tính → dữ liệu được nạp ngay vào ứng dụng.
- Xử lý lỗi nếu file không phải JSON hợp lệ → Toast thông báo lỗi.

**Acceptance Criteria:**
- [x] File JSON export tải về đúng tên file có ngày tháng
- [x] Import JSON thay thế đúng toàn bộ dữ liệu hiện tại
- [x] Xử lý lỗi khi file JSON sai format

---

## 🏆 Tổng kết toàn dự án

| Chỉ số | Sprint 1 (13/07 – 24/07) | Sprint 2 (27/07 – 07/08) | Tổng cộng |
| :--- | :---: | :---: | :---: |
| Story Points cam kết | 10 SP | 13 SP | **23 SP** |
| Hoàn thành | 10 SP | 13 SP | **23 SP** |
| Velocity | 100% | 100% | **100%** |
| Blockers phát sinh | 1 | 1 | 2 |
| Blockers giải quyết | 1/1 | 1/1 | 2/2 |

---

## 💬 Phản hồi từ Giảng viên — Sprint Review Cuối

| Phản hồi | Loại | Ghi nhận |
| :--- | :---: | :--- |
| "Tính năng Export/Import JSON rất thực tế, không chỉ là đồ án học thuật" | ✅ Tích cực | Ghi nhận |
| "Real-time filter kết hợp 4 điều kiện cùng lúc — ấn tượng về kỹ thuật" | ✅ Tích cực | Ghi nhận |
| "Daily Standup Sprint 2 chi tiết hơn Sprint 1 rõ rệt — cải tiến được thực thi" | ✅ Tích cực | Áp dụng cải tiến Retro thành công |
| "Cần có hướng phát triển rõ ràng hơn cho Future Sprints" | 💡 Góp ý | Ghi nhận vào Retrospective cuối |

---

## 📊 Burndown Chart Sprint 2

```
Story Points còn lại (Y) theo Ngày làm việc (X):

13 │▓▓▓▓▓▓▓▓
11 │        ▓▓▓▓
 8 │            ▓▓▓▓
 6 │                ▓▓
 3 │                  ▓▓
 0 │                    ▓▓
   └────────────────────────── Ngày (Tháng 07 – 08/2026)
     27  28  29  30  31  03  04  05  06  07
```

---

## 🚀 Final Increment

> **Sản phẩm hoàn chỉnh cuối dự án:**
> - Web App hoạt động đầy đủ 7 tính năng (23 Story Points)
> - Production build: `npm run build` ✅ exit code 0
> - Bundle: 261KB minified / 82KB gzip
> - Hỗ trợ các ngôn ngữ lập trình với Syntax Highlighting
> - Responsive: Desktop + Mobile
> - Dark Mode + Light Mode có lưu preference
> - Data persistence: LocalStorage (offline-first)
