import Card from '@/components/Card/Card'
import Carousel from '@/components/Carousel/Carousel'
import Layout from '@/components/Layout/Layout'
import NavBar from '@/components/Layout/NavBar'
import React, { Children } from 'react'

export default function page() {
  return (
    <>
      <Layout navBar = {true} header={false}>
      <h1 className="mt-3 mb-3 text-bg-success text-center ">Titulo</h1>
      <div className='d-flex gap-4 justify-content-center '>
        <Card titulo='Paisaje 1' textoBoton='Picale' texto='lorem kdfghj' imagen='https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=ais'/>
        <Card titulo='Paisaje 2' textoBoton='Picale' texto='lorem kdfghj' imagen='https://c4.wallpaperflare.com/wallpaper/911/492/963/arbol-naturaleza-paisajes-prado-wallpaper-preview.jpg'/>
        <Card titulo='Paisaje 3' textoBoton='Picale' texto='lorem kdfghj' imagen='https://t4.ftcdn.net/jpg/07/06/72/43/360_F_706724318_SilctpdLGPefFMlHGTRwxE8of2AveaIv.jpg'/>
        <Card titulo='Paisaje 4' textoBoton='Picale' texto='lorem kdfghj' imagen='https://cdn.shopify.com/s/files/1/0592/5371/9202/files/campo.de_.tulipanes_480x480.jpg?v=1638388374'/>
      </div>
      <div className='mt-5'>
        <Carousel imagenUno='https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-james-wheeler-1619317.jpg&fm=jpg' imagenDos='https://cc-prod.scene7.com/is/image/CCProdAuthor/7%20AdobeStock_335413355?$png$&jpegSize=200&wid=960' imagenTres='https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg'/>
      </div>
      </Layout>
    </>
  )
}
