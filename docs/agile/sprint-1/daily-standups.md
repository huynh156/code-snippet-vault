# Sprint 1 — Daily Standups

> **Dự án:** Code Snippet & Tech Notes Vault
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Sprint 1:** 13/07/2026 (Thứ Hai) → 24/07/2026 (Thứ Sáu)
> **Format:** Mỗi ngày trả lời 3 câu hỏi:
> 1. ✅ **Hôm qua làm gì?** (Yesterday)
> 2. 🔄 **Hôm nay sẽ làm gì?** (Today)
> 3. 🚧 **Có khó khăn/blockers gì không?** (Blockers)

---

## 📅 Ngày 1 — Thứ Hai, 13/07/2026

**Thời gian cập nhật:** 09:15

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Chuẩn bị tài liệu Vite + React, lên kế hoạch cấu trúc dự án, chuẩn bị môi trường phát triển. |
| 🔄 **Hôm nay** | Khởi tạo dự án bằng `npm create vite@latest`, cài đặt PrismJS và Lucide React, tạo cấu trúc thư mục `src/components/`, `src/hooks/`, `src/data/`. |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** Vite scaffolded thành công. Kiểm tra `npm run dev` chạy được mượt mà trên `localhost:5173`.

---

## 📅 Ngày 2 — Thứ Ba, 14/07/2026

**Thời gian cập nhật:** 09:30

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Khởi tạo dự án thành công, cấu trúc thư mục hoàn tất. |
| 🔄 **Hôm nay** | Viết `useLocalStorage.js` custom hook để đồng bộ React State với Browser LocalStorage. Định nghĩa cấu trúc dữ liệu Snippet object (id, title, language, code, description, tags, isFavorite, createdAt). |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** `useLocalStorage` hoạt động — test thủ công: thêm dữ liệu → tải lại trang → dữ liệu vẫn được lưu trữ nguyên vẹn. ✅

---

## 📅 Ngày 3 — Thứ Tư, 15/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Hoàn thành `useLocalStorage` hook, cấu trúc dữ liệu Snippet được định nghĩa rõ ràng. |
| 🔄 **Hôm nay** | Xây dựng component `SnippetForm.jsx`: Form nhập Title, chọn ngôn ngữ (dropdown), Textarea nhập code, input mô tả ngắn và xử lý submit để lưu vào state. |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** US01 hoàn thành! Form tạo snippet mới hoạt động đúng — dữ liệu được lưu vào LocalStorage ngay sau khi bấm Submit.

---

## 📅 Ngày 4 — Thứ Năm, 16/07/2026

**Thời gian cập nhật:** 09:15

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | `SnippetForm.jsx` hoàn chỉnh, US01 Done. |
| 🔄 **Hôm nay** | Tích hợp **PrismJS** vào `SnippetCard.jsx` để tô màu cú pháp. Import các ngôn ngữ: JavaScript, Python, C++, Java, SQL, CSS, JSON. Kiểm thử hiển thị đúng màu sắc cho từng ngôn ngữ. |
| 🚧 **Blockers** | **BLOCKER:** PrismJS cần được gọi sau khi DOM render. Cần dùng `useEffect` để kích hoạt `Prism.highlightAll()` sau mỗi lần component render lại. |

**Ghi chú thêm:** Giải quyết blocker bằng cách thêm `useEffect(() => { Prism.highlightAll(); }, [snippet.code, snippet.language])` vào SnippetCard. Tô màu cú pháp hoạt động chuẩn xác! ✅

---

## 📅 Ngày 5 — Thứ Sáu, 17/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Tích hợp PrismJS thành công sau khi xử lý vòng đời `useEffect`, US02 Done. |
| 🔄 **Hôm nay** | Thêm nút **Copy 1-click** vào `SnippetCard.jsx` sử dụng `navigator.clipboard.writeText()`. Xử lý trạng thái copied (icon đổi từ Copy → Checkmark sau 2 giây). |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** US03 Done! Copy 1-click hoạt động trơn tru trên Chrome và Edge. Toast notification hiện khi copy thành công. ✅

---

## 📅 Ngày 6 — Thứ Hai, 20/07/2026

**Thời gian cập nhật:** 09:30

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Nghỉ cuối tuần (18–19/07). Các US01, US02, US03 đều đã hoàn thành trước khi nghỉ. |
| 🔄 **Hôm nay** | Review toàn bộ code đã viết. Kiểm thử tích hợp tất cả tính năng Sprint 1. Tối ưu CSS cho giao diện Dark Mode (`--bg-primary`, `--text-primary` CSS variables). |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** Phát hiện một lỗi nhỏ: khi tải lại trang, dữ liệu mẫu (initialSnippets) bị ghi đè lên data LocalStorage. Đã sửa: chỉ load initialSnippets khi LocalStorage hoàn toàn trống.

---

## 📅 Ngày 7 — Thứ Ba, 21/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Review code, sửa lỗi data khởi tạo, tối ưu Dark Mode CSS. |
| 🔄 **Hôm nay** | Kiểm tra responsive mobile — đảm bảo card snippet hiển thị đúng trên màn hình nhỏ. Điều chỉnh CSS grid `snippet-grid` sang `1fr` khi width < 640px. |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** Responsive hoạt động tốt trên Chrome DevTools Device Emulation (iPhone 12, Samsung Galaxy S21). ✅

---

## 📅 Ngày 8 — Thứ Tư, 22/07/2026

**Thời gian cập nhật:** 09:15

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Responsive CSS hoàn tất, giao diện mobile ổn định. |
| 🔄 **Hôm nay** | Kiểm thử lần cuối toàn bộ Sprint 1. Chạy `npm run build` để kiểm tra production build. Dọn dẹp code thừa, viết chú thích mã nguồn. |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** `npm run build` thành công — thư mục `dist/` được tạo, bundle size gọn nhẹ 261KB. ✅

---

## 📅 Ngày 9 — Thứ Năm, 23/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Build production thành công, code đã được dọn dẹp sạch sẽ. |
| 🔄 **Hôm nay** | Ngày buffer — kiểm tra lại toàn bộ Acceptance Criteria của US01, US02, US03. Soạn tài liệu chuẩn bị cho buổi Sprint Review. |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** Tất cả Acceptance Criteria của Sprint 1 đã được verify đầy đủ. Sẵn sàng cho buổi Sprint Review ngày mai.

---

## 📅 Ngày 10 — Thứ Sáu, 24/07/2026

**Thời gian cập nhật:** 09:00

| | Nội dung |
| :--- | :--- |
| ✅ **Hôm qua** | Hoàn thành verify toàn bộ Acceptance Criteria Sprint 1. |
| 🔄 **Hôm nay** | Tổ chức **Sprint Review** (demo sản phẩm) và **Sprint Retrospective** (rút kinh nghiệm). Lên kế hoạch bắt đầu Sprint 2 vào đầu tuần sau (27/07/2026). |
| 🚧 **Blockers** | Không có. |

**Ghi chú thêm:** Sprint 1 kết thúc thành công. Velocity: 10 SP / 10 SP = 100% 🎉
