const express=require("express")
const app=express()
const port=3000
const morgan=require("morgan")
app.use(morgan("combined"))

const path=require("path")
app.use(express.static(path.join(__dirname,"public")))

const cors=require("cors")
app.use(cors())
const bodyParser=require("body-parser")
app.use(bodyParser.json())

// Multer for file uploads (Exercise 50)
const multer=require("multer")
const fs=require("fs")

// Ensure upload directory exists
const uploadDir=path.join(__dirname,"public","uploads")
if(!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir,{recursive:true})
}

// Configure multer storage
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,uploadDir)
  },
  filename:function(req,file,cb){
    const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
    cb(null,uniqueSuffix+path.extname(file.originalname))
  }
})

const upload=multer({
  storage:storage,
  limits:{fileSize:5*1024*1024}, // 5MB limit
  fileFilter:function(req,file,cb){
    const filetypes=/jpeg|jpg|png|gif/
    const mimetype=filetypes.test(file.mimetype)
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase())
    
    if(mimetype && extname){
      return cb(null,true)
    }
    cb(new Error("Only image files are allowed!"))
  }
})

//create default API (HOME)
app.get("/",(req,res)=>{
    res.send("Welcome to <font color='red'>K234111E</font> API ")
})
app.get("/about",(req,res)=>{
  tbl="<table border='1'>"
  tbl+="<tr>"
  tbl+="<td>STUDENT ID:</td><td>SV007</td>"
  tbl+="</tr>"
  tbl+="<tr>"
  tbl+="<td>STUDENT Name:</td><td>TÈO</td>"
  tbl+="</tr>"
  tbl+="<tr>"
  tbl+="<td colspan='2'><img src='images/avatar.jpg' width='500' height='250'/></td>"
  tbl+="</tr>"   
  tbl+="</table>"
  res.send(tbl)
})
app.listen(port,()=>{
  console.log(`K23411E Server running at ${port}`)  
})

// OLD DATABASE - Keep for other exercises
let database=[
{"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản",
"Price":70,"Image":"b1.png"},
{"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
"Price":100,"Image":"b2.png"},
{"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"b3.png"},
{"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"b4.png"},
{"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"b5.png"},
]

// NEW DATABASE for Exercise 50
let ex50Database=[
  {
    id:1,
    tenSach:"Giáo trình Tin Học Cơ Bản Windows XP gồm có 7 chương",
    giaBan:26000.00,
    moTa:"Nội dung của cuốn: Tin Học Cơ Bản Windows XP gồm có 7 chương: Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cụ và thanh thực đơn trong My Computer và Windows Explorer. Chương 3: Các thao tác trong windows XP. Chương 4: Các thiết lập trong Windows XP. Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt Chương 7: Hỏi và đáp các thắc mắc. Xin trân trọng giới thiệu cuốn sách cùng bạn",
    anhBia:"http://localhost:3000/images/THCB.jpg",
    ngayCapNhat:"25/10/2014 12:00:00 SA",
    soLuongTon:120,
    maCD:7,
    maNXB:1
  },
  {
    id:2,
    tenSach:"Giáo trình Cơ Sở Dữ Liệu Với Visual Basic 2005 Và ADO.NET 2.0",
    giaBan:12000.00,
    moTa:"Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý văn bản trong Microsoft thiếu các nội dung sau: Chương 1: Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3: Bộ chứa dữ liệu DataSet. Chương 4: Bộ điều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khiển ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report. Chương 7: ADO.NET và XML. Xin trân trọng giới thiệu cũng các bạn.",
    anhBia:"http://localhost:3000/images/TH004.jpg",
    ngayCapNhat:"23/10/2013 12:00:00 SA",
    soLuongTon:25,
    maCD:3,
    maNXB:2
  },
  {
    id:3,
    tenSach:"Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu",
    giaBan:20000.00,
    moTa:"\"Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu\" sẽ cung cấp kỹ thuật và hướng dẫn bạn: Tự học xây dựng ứng dụng Web quản lý CSDL toàn diện với ADO.NET 2.0 và ASP.NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thù dành riêng cho ASP.NET và Web. Làm quen với những khái niệm xử lý dữ liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế ứng dụng Web \"Quản lý CD Shop\" trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và .NET Framework. Sách có kèm theo CD-ROM bài tập.",
    anhBia:"http://localhost:3000/images/LTWeb2005.jpg",
    ngayCapNhat:"15/09/2014 12:00:00 SA",
    soLuongTon:240,
    maCD:8,
    maNXB:4
  }
]
let nextId=4
app.get("/books",(req,res)=>{
  res.send(database)
})
app.get("/books/:id",cors(),(req,res)=>{
  id=req.params["id"]
  let p=database.find(x=>x.BookId==id)
  res.send(p)
  })
app.post("/books",cors(),(req,res)=>{
  // console.log(req.body)
  // res.send("Server received your data, Your data:"+req.body)
  //put json book into database
  database.push(req.body);
  //send message to client(send all database to client)
  res.send(database)

})

// ============ EXERCISE 50 API ENDPOINTS ============
// GET all books (Exercise 50)
app.get("/api/books",cors(),(req,res)=>{
  res.json(ex50Database)
})

// GET book by ID (Exercise 50)
app.get("/api/books/:id",cors(),(req,res)=>{
  const id=parseInt(req.params.id)
  const book=ex50Database.find(x=>x.id===id)
  
  if(book){
    res.json(book)
  }else{
    res.status(404).json({error:"Book not found"})
  }
})

// POST create new book (Exercise 50)
app.post("/api/books",cors(),(req,res)=>{
  const newBook={
    ...req.body,
    id:nextId++,
    ngayCapNhat:new Date().toLocaleString('vi-VN')
  }
  
  ex50Database.push(newBook)
  res.status(201).json(newBook)
})

// PUT update book (Exercise 50)
app.put("/api/books/:id",cors(),(req,res)=>{
  const id=parseInt(req.params.id)
  const index=ex50Database.findIndex(x=>x.id===id)
  
  if(index!==-1){
    ex50Database[index]={
      ...req.body,
      id:id,
      ngayCapNhat:new Date().toLocaleString('vi-VN')
    }
    res.json(ex50Database[index])
  }else{
    res.status(404).json({error:"Book not found"})
  }
})

// DELETE book (Exercise 50)
app.delete("/api/books/:id",cors(),(req,res)=>{
  const id=parseInt(req.params.id)
  const index=ex50Database.findIndex(x=>x.id===id)
  
  if(index!==-1){
    const deletedBook=ex50Database.splice(index,1)
    res.json({message:"Book deleted successfully",book:deletedBook[0]})
  }else{
    res.status(404).json({error:"Book not found"})
  }
})

// POST upload image (Exercise 50)
app.post("/api/upload",upload.single("image"),(req,res)=>{
  if(!req.file){
    return res.status(400).json({error:"No file uploaded"})
  }
  
  const imageUrl=`http://localhost:${port}/uploads/${req.file.filename}`
  res.json({imageUrl:imageUrl})
})