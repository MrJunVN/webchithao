# Handoff Web Chi Thao

Tai lieu nay de ban mang ve nha va tiep tuc lam project `webchithao`.

## 1. Repo va thu muc

- GitHub repo: `https://github.com/MrJunVN/webchithao`
- Local folder: `C:\xampp\htdocs\webchithao`
- Frontend app: `C:\xampp\htdocs\webchithao\frontend`

## 2. Tinh trang hien tai

Da co mot mock frontend moi, tach rieng hoan toan khoi VanThinh va NTS.

Nhung gi da lam:

- Tao project React + Vite moi
- Doi giao dien mac dinh thanh mock website ban thuc pham bo sung
- Co cac section:
  - Hero
  - San pham mau
  - Combo
  - Feedback mau
  - FAQ
  - Khu chatbot demo
  - Gio hang demo
- Da build thanh cong
- Da push len GitHub

Commit mock hien tai:

- `b988c49` - `Create initial supplement store mock`

## 3. Cac file quan trong

- `README.md`
- `frontend/package.json`
- `frontend/src/App.jsx`
- `frontend/src/App.css`
- `frontend/src/index.css`
- `.gitignore`

Neu can sua giao dien nhanh, vao thang:

- `frontend/src/App.jsx`
- `frontend/src/App.css`

## 4. Cach mo project de xem

### Chay local de code

```bash
cd C:\xampp\htdocs\webchithao\frontend
npm install
npm run dev
```

Mo:

- `http://localhost:5173`

### Xem ban build preview

```bash
cd C:\xampp\htdocs\webchithao\frontend
npm run build
npm run preview
```

Mo:

- `http://localhost:4173`

## 5. Mock hien tai co gi va chua co gi

### Da co

- Landing page dep de demo concept
- Nut them vao gio
- Tinh tong so luong va tong tien demo trong hero card
- Section chatbot de minh gan bot that sau

### Chua co

- Backend that
- Database
- Trang chi tiet san pham
- Gio hang that
- Checkout that
- Quan ly don hang
- Thanh toan online
- Chatbot that
- Noi dung Facebook that

## 6. Viec nen lam tiep theo

Thu tu khuyen nghi:

1. Thay noi dung mau bang noi dung that tu Facebook cua chi Thao
2. Tach du lieu san pham ra file rieng hoac API
3. Lam routing:
   - Trang chu
   - Danh sach san pham
   - Chi tiet san pham
   - Gio hang
   - Checkout
4. Them backend
5. Them database
6. Them thanh toan online
7. Gan chatbot

## 7. Cach lay noi dung tu Facebook de dua vao web

Nen gom lai cac nhom noi dung sau:

- Anh dai dien va anh san pham
- Ten san pham
- Cong dung mo ta theo cach an toan
- Feedback khach hang
- Cau hoi thuong gap
- Hotline / Zalo / Messenger
- Bai dang combo / khuyen mai

Luu y:

- Tranh noi dung claim qua muc cho thuc pham chuc nang
- Han che cac cau nhu:
  - chua khoi benh
  - cam ket 100%
  - dung la het

Nen doi thanh:

- ho tro
- bo sung
- phu hop
- tham khao

## 8. Goi y cau truc frontend o buoc tiep theo

Sau nay nen tach `App.jsx` thanh:

- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/ProductCard.jsx`
- `src/components/BundleCard.jsx`
- `src/components/FAQ.jsx`
- `src/components/ChatbotPreview.jsx`
- `src/data/products.js`
- `src/pages/Home.jsx`

Neu lam lon hon nua:

- them `react-router-dom`
- them state cho cart
- them API layer

## 9. Goi y backend

Co the lam 1 trong 2 huong:

### Huong nhanh

- Frontend Vite
- Backend PHP + MySQL vi may dang co XAMPP

### Huong de dev nhanh frontend truoc

- Frontend Vite
- Mock data JSON truoc
- Xong giao dien roi moi noi backend

Voi project nay, minh khuyen nghi:

- Lam giao dien + data that truoc
- Sau do moi them backend va checkout

## 10. Goi y thanh toan

Neu ban chu yeu khach o Viet Nam:

- VNPay
- MoMo
- ZaloPay

Neu can quoc te:

- Stripe
- PayPal

## 11. Goi y chatbot

Ban dau co the lam 3 muc tieu don gian:

1. Hoi nhu cau khach
2. Goi y san pham / combo
3. Xin so dien thoai hoac link Messenger/Zalo

Chua can lam AI phuc tap ngay.

## 12. Lenh git co ban

```bash
cd C:\xampp\htdocs\webchithao
git status
git add .
git commit -m "update web chi thao"
git push origin main
```

## 13. Neu muon demo online

Hien tai repo GitHub moi la code, chua phai website live.

De co link gui cho chi xem online:

- Deploy len Vercel
- Hoac GitHub Pages
- Hoac Netlify

## 14. Diem bat dau nhanh nhat khi ve nha

Neu muon lam tiep nhanh nhat, ban chi can:

1. `cd C:\xampp\htdocs\webchithao\frontend`
2. `npm install`
3. `npm run dev`
4. Sua `frontend/src/App.jsx`
5. Sua `frontend/src/App.css`

## 15. Ghi chu cuoi

Mock hien tai la nen de demo concept, chua phai ban final.

Muc tieu cua phase tiep theo:

- Bien mock thanh website that theo noi dung Facebook cua chi Thao
- Co san pham that
- Co luong chot don ro rang
- Co checkout
- Co thanh toan
- Co chatbot
