function Sinhvien(id, name) {
    this.id = id;
    this.name = name;
}

function main(){
    let soluongsinhvien = prompt("nhap so luong sinh vien");
    soluongsinhvien = parseInt(soluongsinhvien);
    var danhsachsinhvien = [];
    for ( let i = 0; i < soluongsinhvien; i++){
        var id = prompt("nhap ID cua sinh vien");
        var name = prompt("nhap ten cua sinh vien");
        var Sinhvien = new sinhvien(id, name);
        danhsachsinhvien.push(Sinhvien)
    }
    console.log("danh sach sinh vien");
    console.log(danhsachsinhvien);
}
main();