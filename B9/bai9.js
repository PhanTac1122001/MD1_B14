const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
let luachon = "";

do {
    luachon = prompt("Nhập lựa chọn")
    switch(luachon){
        case "C":
            let todo=prompt("Nhập công việc mới:")
            todoList.push(todo);
            break;
        case "R":
            console.log(todoList);
            break;
        case "U":
            let indexUpdate="";
            do{
                indexUpdate=+prompt("Nhập vị trí cần sửa");
                
            }while(indexUpdate<0||indexUpdate>=todoList.length)
            let updateTodo = prompt("Nhap cong viec duoc update");
            todoList.splice(indexUpdate - 1, 1, updateTodo);
            break;
            
        case "D":
            let indexDel="";
            do{
                indexDel=+prompt("Nhập vị trí cần xóa");
                
            }while(indexDel<0||indexDel>=todoList.length)
            todoList.splice(indexDel-1,1)
            break;
    }

}
while (luachon != "0")

