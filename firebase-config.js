/*
  ตั้งค่า Firebase สำหรับใช้งานแบบ realtime (BOSS กับ STAFF เห็นข้อมูลตรงกันทันที)

  1. เปิด https://console.firebase.google.com → สร้างโปรเจกต์
  2. Build → Firestore Database → Create database
  3. Project settings → Your apps → เพิ่ม Web app (</>) → คัดลอก firebaseConfig มาวางแทน null ด้านล่าง

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

/* ชื่อนำหน้าของข้อมูลในฐานข้อมูล (ไม่ต้องแก้)
   ใช้โปรเจกต์ Firebase เดิมร่วมกับแอปอื่นได้ เพราะข้อมูลแอปนี้จะอยู่แยกใน
   lunch_menus, lunch_days, lunch_settings */
window.FIREBASE_PREFIX = "lunch_";

/* ตัวอย่าง:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "lunch-xxxx.firebaseapp.com",
  projectId: "lunch-xxxx",
  storageBucket: "lunch-xxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
