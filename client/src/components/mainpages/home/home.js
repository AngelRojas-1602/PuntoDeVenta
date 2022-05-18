import React from 'react'
import './home.css'

function Home() {
    return (
        <div className="home">
            <div className='principio'>
                <div className='carrousel'>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner" >
                            <div class="carousel-item active">
                                <img src="https://media.istockphoto.com/photos/mexican-hot-chocolate-and-oaxaca-bread-in-oaxaca-mexico-picture-id1275660698?k=20&m=1275660698&s=612x612&w=0&h=7QIwFuTMw7n6mX5sjmLp2TNFYhC_5bxPlKsKgQJ1GCQ=" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://media.istockphoto.com/photos/landmark-santo-domingo-cathedral-in-historic-oaxaca-city-center-picture-id1088463742?k=20&m=1088463742&s=612x612&w=0&h=lWwHW1UlBmi5OMW_7XnUKQ8nO8eJzV4LwO60i2VrF8A=" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://media.istockphoto.com/photos/women-with-china-oaxaquea-traditional-costume-dancing-for-guelaguetza-picture-id547435138?k=20&m=547435138&s=612x612&w=0&h=WiSbnffsUyJii1yzRvKdbpfpURn9JNXeJgnQE10RpYY=" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='historia'>
                <div class="card mb-3">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner" >
                        <div class="carousel-item active">
                        <img src="https://res.cloudinary.com/ecommerce-buap/image/upload/v1652839690/ecommerce/WhatsApp_Image_2022-05-17_at_1.25.44_PM_nvo49j.jpg" class="d-block w-100 maxh-auto" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://res.cloudinary.com/ecommerce-buap/image/upload/v1652839690/ecommerce/WhatsApp_Image_2022-05-17_at_1.25.41_PM_nv5j07.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://res.cloudinary.com/ecommerce-buap/image/upload/v1652839690/ecommerce/WhatsApp_Image_2022-05-17_at_1.25.58_PM_aswww4.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Historia del Chocolate</h5>
                        <p class="card-text">El chocolate tiene su origen en México y la leyenda narra que el dios Quetzalcoatl regaló a los hombres el árbol del cacao.<br/> 
                                            Su nombre científico es Theobroma Cacao, alimento de los dioses.<br/>
                                            También, en su momento, representó la moneda de cambio de los aztecas. <br/>
                                            Además de que el Xocolatl es una mezcla de la pasta y manteca de la semilla del cacao con especies y agua, <br/>
                                            dando como resultado una bebida de sabor fuerte, espesa y con efectos estimulantes.</p>
                    </div>
                </div>
            </div>
            
            <div className='importancia'>
                <div class="card mb-3">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://hurom.com.mx/wp-content/uploads/2022/02/cacao.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/09/cacao-2470183.jpg?itok=H12TfJgw" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.gooday.mx/wp-content/uploads/2020/07/Cacao-beneficios-1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Importancia y Beneficios del chocolate </h5>
                        <p class="card-text">
                        ¿Chocolate es un alimento perjudicial y nocivo para el cuerpo humano? Error, pues el chocolate, con un porcentaje de cacao de más del 70 %; <br/>
                        proporcionando energía, contiene excelentes propiedades no solo para el cerebro sino para multitud de sistemas del cuerpo humano. <br/>
                        Libera sustancias como: endorfina y feniletilamina, sustancias que disminuyen tristeza, estrés. <br/>
                        El chocolate sin azúcar contiene Isomalt que cuenta con menos calorías que el azúcar, de origen natural, no aportando calorías, controlando los niveles de azúcar
                        Beneficios:<br/>
                        1.	Aporté de menor calórico <br/>
                        2.	Reduce la producción de caries<br/>
                        3.	Control en glucosa e insulina. <br/>

                        </p>
                    </div>
                </div>
            </div>

            <div className='preparacion'>
                <h4>Preparacion del Chocolate</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vbF4w6_mtTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_N0ANv3JDCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Home