# Sprint 2 — Sprint Planning

> **Dự án:** Code Snippet & Tech Notes Vault
> **Quy trình:** Scrum
> **Sprint số:** 2 / 2
> **Thời gian:** 27/07/2026 (Thứ Hai) → 07/08/2026 (Thứ Sáu)
> **Buổi họp Sprint Planning:** 27/07/2026 lúc 09:00

---

## 👥 Scrum Team & Phân công Chức danh

| Chức danh Scrum | Người đảm nhiệm | MSSV | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **Product Owner (PO)** | Trần Tuấn Huynh | 2000005479 | Xác định Sprint Goal Sprint 2, ưu tiên các US tìm kiếm, phân loại và backup |
| **Scrum Master (SM)** | Trần Tuấn Huynh | 2000005479 | Điều phối Sprint 2, áp dụng các cam kết cải tiến từ Retrospective Sprint 1 |
| **Developer (Dev)** | Trần Tuấn Huynh | 2000005479 | Phát triển tính năng Tagging, SearchBar `useMemo`, Export/Import JSON |
| **Tester (QA)** | Trần Tuấn Huynh | 2000005479 | Thực thi checklist kiểm thử thủ công, verify Definition of Done cuối dự án |

> **Ghi chú:** Toàn bộ các chức danh trong Scrum Team (Product Owner, Scrum Master, Developer, Tester) do sinh viên **Trần Tuấn Huynh** trực tiếp đảm nhiệm theo quy trình Scrum.

---

## 🎯 Sprint Goal (Mục tiêu Sprint 2)

> **"Nâng cấp ứng dụng Code Vault lên sản phẩm hoàn chỉnh: người dùng có thể phân loại bằng Tags, tìm kiếm tức thì theo từ khóa, chỉnh sửa/xóa snippet và sao lưu toàn bộ dữ liệu ra file JSON."**

Sau Sprint 2, ứng dụng đạt mức hoàn thiện tối đa, sẵn sàng demo và báo cáo đồ án.

---

## 📋 Sprint Backlog

> Danh sách các User Story được kéo vào Sprint 2 từ Product Backlog:

| Mã US | Mô tả | Story Points | Người thực hiện | Trạng thái |
| :---: | :--- | :---: | :---: | :---: |
| US04 | Gán Tag phân loại (#react, #python, #sql...) | 3 SP | Trần Tuấn Huynh | ✅ Done |
| US05 | Tìm kiếm real-time & lọc theo Tag/Ngôn ngữ | 5 SP | Trần Tuấn Huynh | ✅ Done |
| US06 | Chỉnh sửa và xóa snippet | 2 SP | Trần Tuấn Huynh | ✅ Done |
| US07 | Export/Import dữ liệu file JSON để sao lưu | 3 SP | Trần Tuấn Huynh | ✅ Done |

**Tổng Story Points Sprint 2:** `13 SP`

---

## 🛠️ Cải tiến từ Sprint 1 (Applied Improvements)

> *Áp dụng các cam kết cải tiến từ Sprint Retrospective Sprint 1:*

| Cải tiến từ Sprint 1 | Cách áp dụng trong Sprint 2 |
| :--- | :--- |
| **Ghi Daily Standup chi tiết hơn** | Mỗi ngày ghi ít nhất 4-5 dòng, mô tả rõ task đang làm và kết quả cụ thể |
| **Thêm buffer 20% vào ước lượng** | Sprint Backlog 13 SP được phân bổ với 2 ngày buffer cuối Sprint |
| **Tạo checklist test thủ công** | Trước khi Done mỗi US, phải check đủ các điều kiện trong Definition of Done |

---

## 🗓️ Kế hoạch thực hiện chi tiết

| Ngày | Thứ | Công việc dự kiến | US liên quan |
| :---: | :--- | :--- | :---: |
| 27/07/2026 | Thứ Hai | Sprint Planning, setup Sidebar component với bộ lọc ngôn ngữ | US04, US05 |
| 28/07/2026 | Thứ Ba | Thêm tính năng gán Tag khi tạo/sửa snippet (input comma-separated) | US04 |
| 29/07/2026 | Thứ Tư | Xây dựng Tag Cloud trong Sidebar, bộ lọc theo Tag real-time | US04, US05 |
| 30/07/2026 | Thứ Năm | Xây dựng SearchBar component với `useMemo` filter | US05 |
| 31/07/2026 | Thứ Sáu | Kiểm thử bộ lọc tích hợp (Search + Tag + Language cùng lúc) | US05 |
| 03/08/2026 | Thứ Hai | Thêm nút Edit và Delete vào SnippetCard, xử lý Confirm Dialog | US06 |
| 04/08/2026 | Thứ Ba | Implement Export JSON (Download file), Import JSON (FileReader API) | US07 |
| 05/08/2026 | Thứ Tư | Kiểm thử Export/Import với dữ liệu lớn | US07 |
| 06/08/2026 | Thứ Năm | Dark/Light Mode toggle hoàn thiện, tối ưu UI tổng thể, `npm run build` | — |
| 07/08/2026 | Thứ Sáu | Sprint Review + Sprint Retrospective cuối dự án | — |

---

## ✅ Tiêu chí Hoàn thành (Definition of Done) — Sprint 2

Checklist kiểm thử thủ công:

- [x] Test tính năng trên **Google Chrome**
- [x] Test tính năng trên **Microsoft Edge**
- [x] Test giao diện **responsive mobile** (≤ 768px)
- [x] **Console** không có error hoặc warning trong F12 DevTools
- [x] **LocalStorage** đồng bộ đúng sau mỗi thao tác
- [x] `npm run build` thoát exit code 0

---

## 📐 Kỹ thuật áp dụng trong Sprint 2

| Kỹ thuật | Mục đích |
| :--- | :--- |
| `useMemo` React Hook | Tối ưu real-time filtering không bị lag khi gõ tìm kiếm |
| `FileReader API` | Đọc file JSON khi Import từ máy tính người dùng |
| `URL.createObjectURL()` | Tạo link download file JSON khi Export |
| CSS `flex-wrap: wrap` | Hiển thị Tag Cloud đẹp mắt trong Sidebar |
