import PostLayout from "./PostLayout";

export default function FirstPost() {
  return (
    <PostLayout
      title="أول مقال عندي"
      description="هذا اختبار بسيط للتأكد أن المقالات خدامين."
      date="2026-02-15"
    >
      <p>السلام عليكم! هذا أول بوست تجريبي.</p>
      <p>إلى بان هاد النص، راه كلشي خدام مزيان.</p>
    </PostLayout>
  );
}
