let tiengAnh=["book", "friend" ,"class"];
let tiengViet=["sách" ,"bạn" ,"lớp" ];

let value=prompt("Mời bạn nhập từ diển muốn qua tiếng việt")
    const vitri = tiengAnh.indexOf(value)
    if (vitri === -1) {
        console.log("ko thay");
    } else {
        console.log(tiengViet[vitri]);
    }

