## overview
Frontend เป็นเว็บเกมสะสมคะแนน โดยผู้ใช้สามารถ

สุ่มคะแนนจากหน้าเกม สะสมคะแนนสูงสุด 10,000 คะแนน แลกรางวัลตาม checkpoint ดูประวัติการเล่น / ประวัติการรับรางวัล Reset ระบบเพื่อเริ่มใหม่
ระบบออกแบบให้ ไม่ต้อง login ใช้ uid ที่ generate และเก็บใน local storage แทน

## หน้าแรก

มีglobal state ไว้เก็บคะแนนสะสม

module บัตรสะสมคะแนน
ทำ UI
ทำ progress bar อัพเดตคะแนนจาก  global state
ปุ่ม CTA รับรางวัล มี 3state [Active ,Unactive ,Claimed] 
ทุกครั้งที่คะแนนมีการอัพเดตก็จะอัพเดต progress bar พร้อมกับเช็คถ้าคะแนนถึงก็จะ update ปุ่มแต่ละ checkpoint max point 10000
ปุ่มรับรางวัล กดแลว-> เขียนประวัติการรับรางวัลลง DB -> โชว์ model ว่ารับของ

 
module [ประวัติการเล่น/ประวัติการรับของ]
 ปุ่ม -> กดแล้วจัดการ state 
-> เรียก query ข้อมูล
-> เอาข้อมุลมาแสดง


ปุ่ม reset 
-> reset global state 
-> flush DB ที่เก็บประวัติ (เก็บ log มั้ย?)


ปุ่มไปหน้าเล่นเกม
## หน้าเกม

มี state ข้างบนบอกคะแนนสะสม

play area 
-> มีแต้มทั้งหมดที่มีให้สุ่ม
button สุ่มคะแนน -> กดแล้วคะแนนค่อยๆloopหายไปทีละตัว จนเหลือตัวเดียว -> เขียนลง DB -> ขึ้น model ว่าได้คะแนน

ปุ่มกลับไปหน้า home 

## Score & Progress

คะแนนดึงจาก backend (GET /users/:uid/point)

Progress bar update แบบ real-time

มี checkpoint 3 ระดับ

5,000/7,500/10,000

Checkpoint state:

LOCKED/ACTIVE/CLAIMED

## Game Flow

ผู้ใช้กด “สุ่มคะแนน” >Backend สุ่มคะแนนจริง > UI แสดง animation คะแนนจางลง > แสดง Modal คะแนนที่ได้ > Update score state >Progress bar update อัตโนมัติ


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run dev
```
