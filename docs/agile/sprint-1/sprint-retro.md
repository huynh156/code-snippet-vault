# Sprint 1 — Sprint Retrospective

> **Dự án:** Code Snippet & Tech Notes Vault
> **Quy trình:** Scrum
> **Sprint số:** 1 / 2
> **Sinh viên thực hiện:** Trần Tuấn Huynh — MSSV: 2000005479
> **Ngày tổ chức Retrospective:** Thứ Sáu, 24/07/2026 lúc 15:30
> **Format sử dụng:** Keep / Problem / Try (KPT)

---

## 🎯 Kết quả Sprint 1

| Chỉ số | Giá trị |
| :--- | :--- |
| Story Points cam kết | 10 SP |
| Story Points hoàn thành | 10 SP |
| Velocity | 100% |
| Blockers phát sinh | 1 (PrismJS + useEffect) |
| Blockers đã giải quyết | 1/1 ✅ |

---

## ✅ KEEP — Những điều tốt cần phát huy

> Những thực hành đã mang lại hiệu quả tốt trong Sprint 1, cần duy trì sang Sprint 2.

### K1. Cập nhật Kanban Board hàng ngày
Việc di chuyển task từ `Todo → In Progress → Done` trên Kanban board mỗi buổi sáng giúp quan sát tiến độ rõ ràng và tạo động lực hoàn thành việc. **→ Tiếp tục duy trì trong Sprint 2.**

### K2. Đọc tài liệu thư viện trước khi tích hợp
Trước khi tích hợp PrismJS, đã nghiên cứu kỹ tài liệu. Nhờ hiểu cấu trúc thư viện nên đã xử lý vấn đề vòng đời `useEffect` thành công trong cùng ngày. **→ Tiếp tục nghiên cứu tài liệu trước khi tích hợp thư viện mới.**

### K3. Test thủ công sau mỗi tính năng nhỏ
Sau khi hoàn thành mỗi component (Form, Card, Hook), đều test ngay trên localhost thay vì dồn vào cuối sprint. Cách này giúp phát hiện lỗi sớm. **→ Tiếp tục duy trì trong Sprint 2.**

### K4. Sử dụng CSS Custom Properties cho theme
Thiết kế CSS với CSS Variables (`--bg-primary`, `--text-primary`) ngay từ đầu giúp Dark Mode dễ implement chỉ với 1 attribute `data-theme='light'`. **→ Phong cách thiết kế này rất hiệu quả.**

---

## ⚠️ PROBLEM — Những điều chưa tốt cần cải thiện

> Những khó khăn, vấn đề phát sinh trong Sprint 1.

### P1. Ghi Daily Standup chưa đủ chi tiết
Một số ngày Daily Standup chỉ ghi 1-2 dòng, thiếu chi tiết về progress cụ thể và lý do blocker.

**Nguyên nhân:** Chưa quen ghi chép tỉ mỉ từng bước.
**Hậu quả:** Khó tái hiện đầy đủ quá trình giải quyết vấn đề khi nhìn lại.

### P2. Ước lượng thời gian chưa tính đủ rủi ro thư viện
Tích hợp PrismJS dự kiến 1 ngày nhưng thực tế tốn 1.5 ngày do xử lý `useEffect` và test nhiều ngôn ngữ. Ngày buffer đã được dùng để bù.

**Nguyên nhân:** Chưa tính đủ thời gian cho việc giải quyết vấn đề kỹ thuật không lường trước.
**Hậu quả:** Cần thêm thời gian buffer cho các task kỹ thuật.

### P3. Thiếu checklist kiểm thử chuẩn
Kiểm thử chủ yếu theo trực quan, chưa có checklist cụ thể từng tiêu chí trước khi đánh dấu Done.

**Nguyên nhân:** Chưa chuẩn hóa checklist nghiệm thu.
**Hậu quả:** Dễ bỏ sót các trường hợp đặc biệt (edge cases).

---

## 🚀 TRY — Hành động cải tiến cho Sprint 2

> Những thay đổi cụ thể sẽ được áp dụng trong Sprint 2 (27/07/2026 – 07/08/2026).

### T1. Ghi Daily Standup chi tiết hơn
**Cam kết:** Mỗi ngày Daily Standup phải có:
- Mô tả cụ thể **task nào** đã hoàn thành kèm kết quả cụ thể
- Nếu có Blocker: mô tả rõ **vấn đề kỹ thuật** và **hướng giải quyết**
- Cập nhật đều đặn mỗi sáng trước khi bắt đầu code.

### T2. Thêm buffer 20% vào ước lượng
**Cam kết:** Khi ước lượng Story Points và thời gian, cộng thêm 20% cho các tác vụ có liên quan đến xử lý file, filter logic phức tạp.

### T3. Tạo checklist kiểm thử trước khi mark Done
**Cam kết:** Trước khi chuyển task sang Done, phải kiểm tra qua danh sách:
- [ ] Test trên Chrome
- [ ] Test trên Edge
- [ ] Test responsive mobile
- [ ] Kiểm tra Console không có error
- [ ] LocalStorage hoạt động đúng

---

## 📌 Cam kết hành động Sprint 2

| # | Hành động cụ thể | Người phụ trách | Deadline |
| :---: | :--- | :---: | :---: |
| 1 | Ghi Daily Standup tối thiểu 4-5 dòng mỗi ngày | Trần Tuấn Huynh | Hàng ngày Sprint 2 |
| 2 | Ước lượng thêm 20% buffer cho task kỹ thuật | Trần Tuấn Huynh | Sprint Planning Sprint 2 |
| 3 | Tạo checklist test thủ công trước khi Done | Trần Tuấn Huynh | 27/07/2026 |

---

## 🔥 Câu kết

> Sprint 1 là nền tảng quan trọng của dự án. Việc hoàn thành 100% Story Points với MVP hoạt động ổn định cho thấy quy trình Scrum hoàn toàn có thể áp dụng hiệu quả và chặt chẽ khi đảm nhiệm đầy đủ các vai trò Product Owner, Scrum Master, Developer và Tester. Sprint 2 sẽ tập trung vào việc nâng cấp trải nghiệm người dùng và hoàn thiện sản phẩm cuối cùng.
