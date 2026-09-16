# Sprint 2 — Sprint Planning

> **Dự án:** Code Snippet & Tech Notes Vault
> **Quy trình:** Scrum
> **Sprint số:** 2 / 2
> **Thời gian:** 31/08/2026 (Thứ Hai) → 05/09/2026 (Thứ Bảy)
> **Buổi họp Sprint Planning:** 31/08/2026 lúc 09:00

---

## Scrum Team & Phân công Chức danh

| Chức danh Scrum | Người đảm nhiệm | MSSV | Nhiệm vụ chính |
|:--- |:--- |:--- |:--- |
| **Product Owner (PO)** | Trần Tuấn Huynh | 2000005479 | Xác định Sprint Goal Sprint 2, ưu tiên các US tìm kiếm, phân loại và backup |
| **Scrum Master (SM)** | Trần Tuấn Huynh | 2000005479 | Điều phối Sprint 2, áp dụng các cam kết cải tiến từ Retrospective Sprint 1 |
| **Developer (Dev)** | Trần Tuấn Huynh | 2000005479 | Phát triển tính năng Tagging, SearchBar `useMemo`, Export/Import JSON |
| **Tester (QA)** | Trần Tuấn Huynh | 2000005479 | Thực thi checklist kiểm thử thủ công, verify Definition of Done cuối dự án |

---

## Sprint Goal (Mục tiêu Sprint 2)

> **"Nâng cấp ứng dụng Code Vault lên sản phẩm hoàn chỉnh: người dùng có thể phân loại bằng Tags, tìm kiếm tức thì theo từ khóa, chỉnh sửa/xóa snippet và sao lưu toàn bộ dữ liệu ra file JSON."**

---

## Sprint Backlog

| Mã US | Mô tả | Story Points | Người thực hiện | Trạng thái |
|:---: |:--- |:---: |:---: |:---: |
| US04 | Gán Tag phân loại (#react, #python, #sql...) | 3 SP | Trần Tuấn Huynh | Done |
| US05 | Tìm kiếm real-time & lọc theo Tag/Ngôn ngữ | 5 SP | Trần Tuấn Huynh | Done |
| US06 | Chỉnh sửa và xóa snippet | 2 SP | Trần Tuấn Huynh | Done |
| US07 | Export/Import dữ liệu file JSON để sao lưu | 3 SP | Trần Tuấn Huynh | Done |

**Tổng Story Points Sprint 2:** `13 SP`

---

## Kế hoạch thực hiện chi tiết

| Ngày | Thứ | Công việc dự kiến | US liên quan |
|:---: |:--- |:--- |:---: |
| 31/08/2026 | Thứ Hai | Sprint Planning, setup Sidebar component với bộ lọc ngôn ngữ | US04, US05 |
| 01/09/2026 | Thứ Ba | Thêm tính năng gán Tag khi tạo/sửa snippet & Tag Cloud | US04 |
| 02/09/2026 | Thứ Tư | Xây dựng SearchBar component với `useMemo` filter real-time | US05 |
| 03/09/2026 | Thứ Năm | Thêm nút Edit và Delete vào SnippetCard, xử lý Confirm Dialog | US06 |
| 04/09/2026 | Thứ Sáu | Implement Export JSON (Blob) và Import JSON (FileReader API) | US07 |
| 05/09/2026 | Thứ Bảy | Tối ưu UI/UX, kiểm thử toàn diện, Sprint Review + Retro cuối dự án | — |