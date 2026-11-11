/*
  ตั้งค่า Firebase สำหรับใช้งานแบบ realtime (BOSS กับแม่ครัวเห็นข้อมูลตรงกันทันที)
  ใช้โปรเจกต์ Firebase เดิม (เช่น "Work") ได้ คัดลอก firebaseConfig ชุดเดิมมาวางแทน null ด้านล่าง
  ถ้าปล่อยเป็น null แอปจะเก็บข้อมูลไว้ในเครื่องนั้นเครื่องเดียว (ไม่ realtime)
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBFFjV_AvxEzPWpQaVaRQp7DHMERIj9VYQ",
  authDomain: "work-11e8b.firebaseapp.com",
  projectId: "work-11e8b",
  storageBucket: "work-11e8b.firebasestorage.app",
  messagingSenderId: "1086222788830",
  appId: "1:1086222788830:web:9c00706b2afb2a32433a4f"
};

/* ข้อมูลแอปนี้จะอยู่แยกใน home_menus, home_days, home_settings
   ไม่ปนกับแอป "เที่ยงนี้กินไรดี" ที่ใช้ lunch_ (ไม่ต้องแก้) */
window.FIREBASE_PREFIX = "home_";
