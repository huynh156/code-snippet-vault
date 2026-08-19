# Sprint 2 — Daily Standups

> **Dự án:** Code Snippet & Tech Notes Vault
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Sprint 2:** 27/07/2026 (Thứ Hai) → 07/08/2026 (Thứ Sáu)
> **Cải tiến so với Sprint 1:** Ghi chép chi tiết hơn — tối thiểu 4-5 dòng mỗi ngày với kết quả cụ thể.

---

## 📅 Ngày 1 — Thứ Hai, 27/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Nghỉ cuối tuần (25–26/07). Đã chuẩn bị mind map các tính năng Sprint 2, xem lại Retro Sprint 1. |
| 🔄 **Hôm nay** | Sprint Planning Sprint 2, bắt đầu thiết kế Sidebar component với 3 phần: Danh mục (All/Favorites), Ngôn ngữ lập trình, Tag Cloud. Phác thảo Props interface của Sidebar. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** Hoàn thành skeleton `Sidebar.jsx` với layout 3 section. State `selectedLanguage` và `selectedTag` được lift lên `App.jsx`.

---

## 📅 Ngày 2 — Thứ Ba, 28/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Hoàn thành Sidebar skeleton, setup state management cho filter trong App.jsx. |
| 🔄 **Hôm nay** | Thêm tính năng nhập Tag vào `SnippetForm.jsx`: input comma-separated (vd: "react, hooks, frontend") → parse thành array. Hiển thị Tag Pill dưới mỗi SnippetCard với onClick để filter. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** US04 hoàn thành 80% — Tags lưu được vào snippet và hiển thị dưới Card. Cần thêm xử lý Tag Cloud trong Sidebar. Kiểm tra lưu/đọc LocalStorage với tags array ✅.

---

## 📅 Ngày 3 — Thứ Tư, 29/07/2026

**Thời gian cập nhật:** 09:15

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Tags hiển thị dưới Card, parse comma-separated hoạt động đúng. |
| 🔄 **Hôm nay** | Xây dựng Tag Cloud trong Sidebar: tổng hợp tất cả unique tags từ toàn bộ snippet, đếm số lượng snippet mỗi tag, hiển thị dạng pills có click-to-filter. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** US04 Done ✅. Tag Cloud hiển thị đúng, bấm tag → chỉ hiện snippet có tag đó. `useMemo` được áp dụng để tính toán tagsMap không bị tính lại không cần thiết.

---

## 📅 Ngày 4 — Thứ Năm, 30/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | US04 (Tags) Done. Tag Cloud trong Sidebar hoạt động với click-to-filter. |
| 🔄 **Hôm nay** | Xây dựng `SearchBar.jsx` component: ô tìm kiếm input + select dropdown ngôn ngữ + select sắp xếp (Mới nhất/Cũ nhất/Tên). Tích hợp `useMemo` trong App.jsx để filter theo searchQuery + selectedLanguage + selectedTag + activeFilter đồng thời. |
| 🚧 **Blockers** | Gặp vấn đề logic khi kết hợp 4 filter cùng lúc — cần đảm bảo thứ tự ưu tiên filter đúng. |

**Cách giải quyết blocker:** Viết `filteredSnippets` là một chuỗi `.filter()` tuần tự: (1) activeFilter, (2) selectedLanguage, (3) selectedTag, (4) searchQuery. Mỗi filter là 1 điều kiện độc lập — giải quyết trong 45 phút.

**Kết quả cuối ngày:** SearchBar + filter tích hợp hoạt động mượt mà. Gõ từ khóa → danh sách cập nhật ngay lập tức không có độ trễ cảm nhận được.

---

## 📅 Ngày 5 — Thứ Sáu, 31/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | SearchBar + bộ lọc tích hợp 4 điều kiện đồng thời hoạt động đúng. |
| 🔄 **Hôm nay** | Kiểm thử kỹ bộ lọc tích hợp với các edge case: search không có kết quả → hiện Empty State, đặt lại filter → nút "Reset", chọn tag trong Sidebar và gõ search cùng lúc. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** US05 Done ✅. Empty state khi không tìm thấy hiển thị đúng. Nút "Đặt lại bộ lọc" reset về default. Test xong trên Chrome + Edge + mobile. Tất cả AC đều pass.

---

## 📅 Ngày 6 — Thứ Hai, 03/08/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Nghỉ cuối tuần (01–02/08). US04 và US05 đã hoàn thành tốt đẹp. |
| 🔄 **Hôm nay** | Thêm nút Edit và Delete vào `SnippetCard.jsx`. Edit: mở lại `SnippetForm` với dữ liệu snippet hiện tại điền sẵn vào. Delete: hiển thị `window.confirm()` dialog trước khi xóa. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** US06 Done ✅. Edit snippet hoạt động — form tự điền dữ liệu cũ, lưu lại đúng. Delete có confirm dialog để tránh xóa nhầm. Toast thông báo sau mỗi hành động.

---

## 📅 Ngày 7 — Thứ Ba, 04/08/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | US06 (Edit/Delete) Done. |
| 🔄 **Hôm nay** | Implement Export JSON: dùng `JSON.stringify()` + `Blob` + `URL.createObjectURL()` để tạo file download tự động. Tên file: `code_vault_backup_YYYY-MM-DD.json`. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** Export JSON hoạt động — bấm nút "Export" → file `code_vault_backup_2026-08-04.json` tải về máy ngay. Nội dung JSON hợp lệ, mở bằng VS Code đọc được.

---

## 📅 Ngày 8 — Thứ Tư, 05/08/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Export JSON Done. File tải về đúng format. |
| 🔄 **Hôm nay** | Implement Import JSON: dùng `<input type="file">` hidden + `FileReader API` + `JSON.parse()`. Validate dữ liệu import là array hợp lệ trước khi nạp vào state. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** US07 Done ✅. Import file JSON hoạt động — chọn file từ máy tính → dữ liệu được nạp ngay vào ứng dụng. Xử lý lỗi nếu file JSON sai format (hiện Toast error). Export → Import cycle test pass.

---

## 📅 Ngày 9 — Thứ Năm, 06/08/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | US07 (Export/Import JSON) Done. Tất cả 4 US của Sprint 2 đã hoàn thành. |
| 🔄 **Hôm nay** | Polish UI/UX: hoàn thiện Dark/Light mode toggle lưu vào LocalStorage, tối ưu animation CSS, kiểm tra toàn bộ giao diện lần cuối. Chạy `npm run build` production. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** `npm run build` thành công ✅. Bundle size ổn định. Giao diện Dark/Light toggle hoạt động và nhớ preference sau khi tải lại trang. Toàn bộ 7 US đã Done.

---

## 📅 Ngày 10 — Thứ Sáu, 07/08/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Build production thành công, tất cả 7 US Done, UI/UX hoàn thiện. |
| 🔄 **Hôm nay** | Tổ chức **Sprint Review** cuối dự án (demo toàn bộ 7 tính năng), sau đó tổ chức **Sprint Retrospective** lần cuối. Chuẩn bị tài liệu nộp giảng viên. |
| 🚧 **Blockers** | Không có. |

**Kết quả cuối ngày:** Sprint 2 kết thúc thành công. Velocity: 13 SP / 13 SP = 100% 🎉. Tổng dự án: 23 SP / 23 SP = 100% 🏆.
