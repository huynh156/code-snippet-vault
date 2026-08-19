# Sprint 2 — Sprint Retrospective (Cuối Dự Án)

> **Dự án:** Code Snippet & Tech Notes Vault
> **Quy trình:** Scrum
> **Sprint số:** 2 / 2 (Retrospective cuối — kết thúc dự án)
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Ngày tổ chức:** Thứ Sáu, 07/08/2026 lúc 15:30
> **Format:** Keep / Problem / Try (KPT)

---

## 🎯 Kết quả Sprint 2

| Chỉ số | Giá trị |
| :--- | :--- |
| Story Points cam kết | 13 SP |
| Story Points hoàn thành | 13 SP |
| Velocity | 100% |
| Blockers phát sinh | 1 (logic filter 4 điều kiện) |
| Blockers đã giải quyết | 1/1 ✅ |
| Cải tiến từ Sprint 1 đã áp dụng | 3/3 ✅ |

---

## 🔄 Kiểm tra Cải tiến từ Sprint 1

> *Đánh giá xem các cam kết từ Sprint Retrospective 1 có được thực thi trong Sprint 2 không.*

| Cam kết từ Sprint Retro 1 | Đã áp dụng? | Kết quả |
| :--- | :---: | :--- |
| Ghi Daily Standup chi tiết hơn (≥ 4 dòng/ngày) | ✅ Có | Daily Standup Sprint 2 trung bình 5-6 dòng/ngày, có "Kết quả cuối ngày" rõ ràng |
| Thêm buffer 20% vào ước lượng | ✅ Có | 2 ngày buffer cuối Sprint được dùng cho polish UI và test cuối — không bị áp lực |
| Tạo checklist test thủ công trước khi Done | ✅ Có | Mỗi US Sprint 2 đều được verify theo checklist 5 điều kiện trước khi Done |

---

## ✅ KEEP — Những điều tốt cần phát huy

### K1. Áp dụng cải tiến từ Sprint Retrospective trước đó
Đây là minh chứng rõ nhất rằng Retrospective không phải "họp cho có" — tất cả 3 cam kết từ Sprint Retro 1 đều được thực thi và mang lại kết quả tốt. **→ Trong các dự án tương lai, luôn nhìn lại Retro trước khi Planning.**

### K2. Giải quyết Blocker trong cùng ngày
Vấn đề logic filter 4 điều kiện được giải quyết trong 45 phút nhờ áp dụng cách tiếp cận tuần tự (chained `.filter()`). Không để blocker kéo sang ngày hôm sau. **→ Kỹ năng debug và tư duy giải quyết vấn đề đã tốt hơn sau Sprint 1.**

### K3. Sử dụng `useMemo` tối ưu hiệu năng
Việc bọc `filteredSnippets` bằng `useMemo` giúp filter 4 điều kiện chạy mượt mà ngay cả khi có nhiều snippets. **→ Luôn cân nhắc tối ưu hiệu năng sớm cho tính năng real-time.**

### K4. Xử lý lỗi biên (Edge Cases)
Sprint 2 chú ý hơn đến các trường hợp đặc biệt: import file JSON sai format → Toast error, xóa snippet → confirm dialog, copy code đặc biệt → không mất ký tự. **→ Thói quen nghĩ đến edge cases trước khi code.**

### K5. Thiết kế component theo nguyên tắc Single Responsibility
Mỗi component chỉ làm 1 việc: `SearchBar` chỉ render input, `Sidebar` chỉ render filter menu, `SnippetCard` chỉ hiển thị 1 snippet. Logic xử lý được lift lên `App.jsx`. **→ Kiến trúc này giúp dễ debug và mở rộng.**

---

## ⚠️ PROBLEM — Những điều chưa tốt

### P1. Chưa triển khai automated tests
Toàn bộ 2 Sprint đều dùng kiểm thử thủ công. Không có unit tests cho `useLocalStorage` hook hay integration tests cho filter logic.

**Nguyên nhân:** Chưa setup testing framework (Vitest) từ đầu dự án.
**Hậu quả:** Mỗi khi thay đổi logic phải test lại thủ công toàn bộ.

### P2. Git commit chưa thường xuyên theo chuẩn Conventional Commits
Một số ngày chỉ commit 1 lần cuối ngày. Thiếu conventional commits format (`feat:`, `fix:`, `refactor:`).

**Nguyên nhân:** Chưa hình thành thói quen commit nhỏ và thường xuyên.
**Hậu quả:** Git log khó đọc, khó rollback về điểm cụ thể nếu cần.

### P3. Thiếu tài liệu API chi tiết cho LocalStorage Schema
Cần có tài liệu mô tả rõ ràng cấu trúc object Snippet được lưu trong LocalStorage để hỗ trợ bảo trì dài hạn.

**Nguyên nhân:** Tập trung vào code trước.
**Hậu quả:** Giảm khả năng maintainability nếu dự án mở rộng thêm thành viên.

---

## 🚀 TRY — Đề xuất cho Dự án Tiếp theo

> *Bài học kinh nghiệm cho các dự án Agile tiếp theo:*

### T1. Setup Vitest ngay từ Sprint 0
Thêm `vitest` vào `devDependencies` ngay khi khởi tạo dự án. Viết test cho Custom Hook và các utility function ngay khi code xong.

### T2. Conventional Commits + Commit sau mỗi task nhỏ
Áp dụng format: `feat(US01): add snippet creation form` / `fix(US02): resolve PrismJS useEffect issue` / `docs: update sprint-1 daily standups`. Commit sau mỗi 1-2 giờ làm việc.

### T3. Viết Architecture Decision Records (ADR)
Với mỗi quyết định kỹ thuật quan trọng (chọn LocalStorage thay vì Firebase, chọn PrismJS thay vì Highlight.js), viết 1 ADR ngắn gồm: Bối cảnh → Quyết định → Lý do → Hậu quả.

---

## 📌 Tổng kết toàn bộ dự án — Bài học lớn nhất

| Bài học | Mô tả |
| :--- | :--- |
| **Quy trình Scrum vận hành hiệu quả** | Khung làm việc Scrum được thực thi đầy đủ các vai trò (PO, SM, Dev, QA) với tính kỷ luật và kiểm soát chất lượng cao qua từng Sprint. |
| **Sprint Retrospective có giá trị thực tiễn** | Cải tiến từ Retro Sprint 1 được áp dụng thực sự trong Sprint 2 và mang lại kết quả rõ ràng. |
| **Chia nhỏ = Hoàn thành được** | Việc chia dự án thành 7 User Stories + 2 Sprint giúp quản lý tốt khối lượng công việc và rủi ro. |
| **Velocity đo lường được** | 10 SP Sprint 1 + 13 SP Sprint 2 = 23 SP tổng — có thể dùng để ước lượng cho các dự án phần mềm tiếp theo. |

---

## 🏁 Kết thúc dự án

> Dự án **Code Snippet & Tech Notes Vault** chính thức hoàn thành sau 2 Sprint (4 tuần). Tất cả 7 User Stories (23 Story Points) đã được phát triển, kiểm thử và đưa vào production. Ứng dụng đạt đủ tiêu chuẩn để nộp điểm môn Agile/Scrum.
>
> **Ngày hoàn thành:** 07/08/2026
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
