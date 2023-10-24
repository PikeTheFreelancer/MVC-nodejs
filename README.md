# MVC-nodejs

## Khởi tạo project:
1. Nếu chưa cài global express:
- npm install -g express
- npm -g install express-generator
2. Tạo folder dự án:
- express --ejs LabTest
3. Sử dụng nodemon trong package.json để lắng nghe các thay đổi của các files trong dự án
4. Run command: npm i
5. Cài module mysql vào dự án:
- yarn add mysql --save
- trong models/database.js: require mysql vào
6. chạy dự án: npm start hoặc yarn start.