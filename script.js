// let ungraded = document.getElementById("ungraded")


// ungraded.addEventListener("click", add)

// function tambahkeranjang(item){
//     if(!keranjang.hasOwnProperty(item[0])){
//         keranjang[item[0]] = {
//             price: item[1],
//             qty: 1,
//             img: item[2]
//         }
//     }else{
//         keranjang[item[0]].qty++
//     }
//     togglecart();
//     cekcount()
//     console.log(keranjang)
// }

// function cekcount(){
//     let count = 0
//     for(let i in keranjang){
//         count++
//     }
//     document.getElementById('cartcount').innerHTML=count
// }

// function removeitem(item){
//     delete keranjang[item]
//     cekcount()
//     togglecart()
// }

// function togglecart(){
//     let cart = document.getElementById('cartTable')
//     let header = '<tr><thead><td>Image</td><td>Nama Barang</td><td>Harga</td><td>qty</td><td>Total Harga</td><td>Action</td></thead></tr>'
//     let text =''
//     for(let konten in keranjang){
//         let total = keranjang[konten].price*keranjang[konten].qty
//         text+=`<tr><td><img src='${keranjang[konten].img}'></td><td>${konten}</td><td>${keranjang[konten].price}</td><td>${keranjang[konten].qty}</td><td>${total}</td><td><button type="button" class="btn btn-primary" onclick="plusqty('${konten}')">+</button><button type="button" class="btn btn-primary" onclick="minusqty('${konten}')">-</button><button class="btn btn-danger" onclick="removeitem('${konten}')">Remove</button></td></tr>`
//     }
//     console.log(cart.innerHTML+'<test')
//     cart.innerHTML=header+text
//     //console.log(cart.innerHTML)
// }

// function plusqty(item){
//     keranjang[item].qty++
//     cekcount()
//     togglecart()
// }

// function minusqty(item){
//     if(keranjang[item].qty>1){
//         keranjang[item].qty--
//     }
//     cekcount()
//     togglecart()
// }

// function checkout(){
//     keranjang = {}
//     alert("Check Out Berhasil")
//     cekcount()
//     togglecart()
// }

function vaidateForm(){
    let x = 
    document.forms["input-group-login"]
    ['input-field'].value;
    if (x == ''){
        alert("name must be filled out")
        return false
    }
}




