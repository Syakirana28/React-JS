import {useState} from 'react';
import Tabel from './Tabel';

function Menu() {
    const titel = "Daftar Menu Restoran"
    const [menus, setMenu]=useState(
        [
            {
                idmenu:1, 
                idkategori:16, 
                menu:"Apel", 
                gambar:"apel.jpg", 
                harga:3000
            },
            {
                idmenu:2, 
                idkategori:16, 
                menu:"Anggur", 
                gambar:"anggur.jpg", 
                harga:4000
            },
            {
                idmenu:3, 
                idkategori:13, 
                menu:"Bakso", 
                gambar:"Bakso.jpg", 
                harga:10000
            },
            {
                idmenu:4, 
                idkategori:13, 
                menu:"Nasi Padang", 
                gambar:"nasi padang.jpg", 
                harga:10000
            },
            {
                idmenu:5, 
                idkategori:14, 
                menu:"Es teh", 
                gambar:"Es teh.jpg", 
                harga:3000
            },
            {
                idmenu:6, 
                idkategori:14, 
                menu:"Es Jeruk", 
                gambar:"Es Jeruk.jpg", 
                harga:3000
            }
        ]
    )
    return (
      <div className="App">
        <Tabel menu= {menus} titel={titel}/>
        <Tabel menu= {menus.filter((data)=>(data.idkategori===16))} titel="Menu Buah"/>
      </div>
    );
  }
  
  export default Menu;