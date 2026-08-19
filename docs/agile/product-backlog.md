# Product Backlog — Code Snippet & Tech Notes Vault

> **Dự án:** Code Snippet & Tech Notes Vault (Kho lưu trữ & Tra cứu đoạn Code cá nhân)
> **Môn học:** Phát triển phần mềm theo quy trình Agile/Scrum — Trường Đại học Nguyễn Tất Thành
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Quy trình áp dụng:** Scrum
> **Chức danh đảm nhiệm trong Scrum Team:** Product Owner (PO), Scrum Master (SM), Developer (Dev), Tester (QA)
> **Cập nhật lần cuối:** 07/08/2026

---

## Chú thích

| Ký hiệu | Ý nghĩa |
| :--- | :--- |
| ✅ Done | Đã hoàn thành, đã kiểm thử |
| 🔄 In Progress | Đang thực hiện |
| 📝 Todo | Chưa bắt đầu |
| SP | Story Points (ước lượng độ phức tạp theo chuỗi Fibonacci) |

---

## Phân công Chức danh trong Scrum Team

| Chức danh | Người đảm nhiệm | MSSV | Trách nhiệm chính |
| :--- | :--- | :--- | :--- |
| **Product Owner (PO)** | Trần Tuấn Huynh | 2000005479 | Quản lý Product Backlog, xác định độ ưu tiên và tiêu chuẩn nghiệm thu |
| **Scrum Master (SM)** | Trần Tuấn Huynh | 2000005479 | Tổ chức các sự kiện Scrum (Planning, Standup, Review, Retro), xử lý blocker |
| **Developer (Dev)** | Trần Tuấn Huynh | 2000005479 | Thiết kế kiến trúc, lập trình UI/UX và logic ứng dụng (React + Vite) |
| **Tester (QA)** | Trần Tuấn Huynh | 2000005479 | Kiểm thử chức năng, kiểm thử giao diện và đối soát Definition of Done |

---

## Tổng quan Sprint Velocity

| Sprint | Story Points Cam kết | Story Points Hoàn thành | Velocity |
| :---: | :---: | :---: | :---: |
| Sprint 1 (13/07/2026 – 24/07/2026) | 10 SP | 10 SP | 100% |
| Sprint 2 (27/07/2026 – 07/08/2026) | 13 SP | 13 SP | 100% |
| **Tổng cộng** | **23 SP** | **23 SP** | **100%** |

---

## Product Backlog (Full)

| Mã US | Epic / Nhóm | Mô tả User Story | Ưu tiên | SP | Sprint | Trạng thái |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **US01** | 🗂️ Quản lý Snippet | Là người dùng, tôi muốn **tạo một đoạn code mới** (nhập tiêu đề, chọn ngôn ngữ lập trình, dán nội dung code và ghi mô tả ngắn), để lưu trữ vào kho code cá nhân của mình. | Cao | 3 | Sprint 1 | ✅ Done |
| **US02** | 🎨 Giao diện & Trải nghiệm | Là người dùng, tôi muốn **xem danh sách các đoạn code với tô màu cú pháp tự động** (Syntax Highlighting) theo từng ngôn ngữ lập trình, để dễ đọc và phân biệt code như trong IDE. | Cao | 5 | Sprint 1 | ✅ Done |
| **US03** | 🎨 Giao diện & Trải nghiệm | Là người dùng, tôi muốn có **nút "Copy" 1-click** để sao chép toàn bộ nội dung đoạn code vào clipboard ngay lập tức, để dán vào IDE hoặc editor mà không cần chọn thủ công. | Cao | 2 | Sprint 1 | ✅ Done |
| **US04** | 🏷️ Phân loại & Tìm kiếm | Là người dùng, tôi muốn **gán các thẻ phân loại (Tags)** như `#react`, `#python`, `#sql` vào mỗi đoạn code khi tạo hoặc chỉnh sửa, để nhóm và lọc chúng theo chủ đề. | Trung bình | 3 | Sprint 2 | ✅ Done |
| **US05** | 🏷️ Phân loại & Tìm kiếm | Là người dùng, tôi muốn **tìm kiếm tức thì theo từ khóa** (tiêu đề, nội dung code) và **lọc theo Tag hoặc Ngôn ngữ lập trình** trong thời gian thực, để tra cứu đoạn code cần dùng trong vài giây. | Cao | 5 | Sprint 2 | ✅ Done |
| **US06** | 🗂️ Quản lý Snippet | Là người dùng, tôi muốn **chỉnh sửa thông tin** (tiêu đề, code, mô tả, tags) hoặc **xóa hoàn toàn** một đoạn code không còn cần thiết, để duy trì kho code luôn gọn gàng và chính xác. | Trung bình | 2 | Sprint 2 | ✅ Done |
| **US07** | 💾 Sao lưu dữ liệu | Là người dùng, tôi muốn **xuất (Export) toàn bộ kho code ra file `.json`** và **nhập lại (Import) từ file `.json`** trước đó, để sao lưu dữ liệu an toàn hoặc chuyển sang máy tính khác. | Thấp | 3 | Sprint 2 | ✅ Done |

---

## Tiêu chí Hoàn thành (Definition of Done - DoD)

Một User Story được coi là **Done** khi đáp ứng **tất cả** các điều kiện sau:

- [x] Code được viết và chạy không có lỗi (console error-free)
- [x] Tính năng hoạt động ổn định trên **Google Chrome** và **Microsoft Edge**
- [x] Giao diện hiển thị đúng trên màn hình desktop (≥ 1024px) và mobile (≤ 768px)
- [x] Dữ liệu được đồng bộ thành công vào **LocalStorage** của trình duyệt
- [x] Đã tự kiểm thử thủ công theo từng bước trong Acceptance Criteria
- [x] `npm run build` thoát code 0 (build production thành công)

---

## Backlog Refinement — Tính năng Tương lai (Future Sprints)

> Các tính năng này được ghi nhận nhưng chưa đưa vào Sprint hiện tại do giới hạn thời gian.

| Ý tưởng | Mô tả | Ưu tiên dự kiến |
| :--- | :--- | :---: |
| Cloud Sync | Đồng bộ dữ liệu lên Firebase / Supabase | Cao |
| Snippet Sharing | Chia sẻ snippet qua link công khai | Trung bình |
| Chrome Extension | Extension lưu code nhanh khi lướt web | Thấp |
