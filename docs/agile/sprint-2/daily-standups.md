# Sprint 2 — Daily Standups

> **Dự án:** Code Snippet & Tech Notes Vault
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Sprint 2:** 31/08/2026 (Thứ Hai) → 05/09/2026 (Thứ Bảy)
> **Cải tiến so với Sprint 1:** Ghi chép chi tiết hơn — tối thiểu 4-5 dòng mỗi ngày với kết quả cụ thể.

---

## 📅 Ngày 1 — Thứ Hai, 31/08/2026
- **Hôm qua:** Nghỉ cuối tuần (29–30/08). Xem lại Retro Sprint 1.
- **Hôm nay:** Sprint Planning Sprint 2, thiết kế Sidebar component với 3 phần: Danh mục (All/Favorites), Ngôn ngữ, Tag Cloud.
- **Blockers:** Không có.
- **Kết quả:** Hoàn thành skeleton Sidebar.jsx, lift state lên App.jsx.

---

## 📅 Ngày 2 — Thứ Ba, 01/09/2026
- **Hôm qua:** Hoàn thành Sidebar skeleton.
- **Hôm nay:** Thêm tính năng nhập Tag vào SnippetForm.jsx dạng comma-separated và xây dựng Tag Cloud trong Sidebar.
- **Blockers:** Không có.
- **Kết quả:** US04 Done ✅. Tag Cloud hiển thị đúng, click-to-filter hoạt động chuẩn.

---

## 📅 Ngày 3 — Thứ Tư, 02/09/2026
- **Hôm qua:** US04 (Tags) Done.
- **Hôm nay:** Xây dựng SearchBar.jsx component và tích hợp logic filter 4 điều kiện trong App.jsx.
- **Blockers:** Khi kết hợp 4 filter, render trực tiếp làm giật lag nhẹ.
- **Giải quyết:** Bọc filteredSnippets trong `useMemo` với Chained Filter.
- **Kết quả:** US05 Done ✅. Tìm kiếm real-time mượt mà 60fps.

---

## 📅 Ngày 4 — Thứ Năm, 03/09/2026
- **Hôm qua:** US05 (Search & Filter) Done.
- **Hôm nay:** Thêm nút Edit (mở lại modal điền sẵn) và Delete (hộp thoại confirm dialog).
- **Blockers:** Không có.
- **Kết quả:** US06 Done ✅. Edit và Delete hoạt động chính xác kèm Toast.

---

## 📅 Ngày 5 — Thứ Sáu, 04/09/2026
- **Hôm qua:** US06 (Edit/Delete) Done.
- **Hôm nay:** Lập trình Export JSON qua Blob URL và Import JSON qua FileReader API.
- **Blockers:** Không có.
- **Kết quả:** US07 Done ✅. Export & Import JSON sao lưu dữ liệu hoàn hảo.

---

## 📅 Ngày 6 — Thứ Bảy, 05/09/2026
- **Hôm qua:** Hoàn thành toàn bộ 7 User Stories.
- **Hôm nay:** Hoàn thiện giao diện Dark/Light mode, kiểm tra responsive, build production `npm run build` và tổ chức Sprint Review + Retro cuối dự án.
- **Blockers:** Không có.
- **Kết quả:** Sprint 2 kết thúc thành công. Velocity: 13 SP / 13 SP = 100% 🎉. Tổng dự án: 23 SP / 23 SP = 100% 🏆.