export const initialSnippets = [
  {
    id: "snip-1",
    title: "React Custom Hook: useLocalStorage",
    language: "javascript",
    code: `import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}`,
    description: "Tự động đồng bộ State của React với LocalStorage trình duyệt.",
    tags: ["react", "hooks", "frontend"],
    isFavorite: true,
    createdAt: "2026-07-28T10:00:00.000Z"
  },
  {
    id: "snip-2",
    title: "SQL Query: Phân trang & Tính tổng điểm GPA",
    language: "sql",
    code: `SELECT 
    student_id,
    student_name,
    COUNT(course_id) AS total_courses,
    ROUND(AVG(score), 2) AS gpa
FROM student_grades
WHERE semester = '2026-1'
GROUP BY student_id, student_name
HAVING gpa >= 3.2
ORDER BY gpa DESC
LIMIT 10 OFFSET 0;`,
    description: "Câu lệnh SQL lấy top 10 sinh viên có GPA >= 3.2 trong học kỳ.",
    tags: ["sql", "database", "backend"],
    isFavorite: true,
    createdAt: "2026-07-27T14:30:00.000Z"
  },
  {
    id: "snip-3",
    title: "C++ Algorithm: Thuật toán Tìm kiếm Nhị phân (Binary Search)",
    language: "cpp",
    code: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // Không tìm thấy
}`,
    description: "Tìm kiếm nhị phân trên mảng đã sắp xếp với độ phức tạp O(log N).",
    tags: ["cpp", "algorithm", "dsa"],
    isFavorite: false,
    createdAt: "2026-07-26T09:15:00.000Z"
  },
  {
    id: "snip-4",
    title: "Python: Đọc & Xử lý File JSON",
    language: "python",
    code: `import json

def load_and_filter_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Lọc danh sách công việc đã hoàn thành
    completed_tasks = [item for item in data if item.get('status') == 'Done']
    return completed_tasks

print(f"Số việc hoàn thành: {len(load_and_filter_data('data.json'))}")`,
    description: "Mẫu đọc tệp JSON và lọc phần tử bằng List Comprehension trong Python.",
    tags: ["python", "json", "backend"],
    isFavorite: false,
    createdAt: "2026-07-25T16:20:00.000Z"
  },
  {
    id: "snip-5",
    title: "CSS Glassmorphism Card Style",
    language: "css",
    code: `.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    description: "Hiệu ứng kính mờ (Glassmorphism) chuẩn phong cách UI/UX hiện đại.",
    tags: ["css", "ui-ux", "frontend"],
    isFavorite: true,
    createdAt: "2026-07-24T11:45:00.000Z"
  }
];
