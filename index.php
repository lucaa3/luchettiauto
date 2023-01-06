<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="container-fluid ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">macchine</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item d-flex justify-content-center align-items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8566 8.33797C11.3747 7.63976 11.5605 6.90391 10.9745 6.25438C9.65955 4.4144 8.77521 3.27657 8.22051 2.72861C7.16595 1.68688 5.43118 1.82779 4.51785 2.72772C4.0273 3.21108 3.86122 3.37707 3.35753 3.88868C0.551877 6.69584 2.26291 12.6301 6.81145 17.1831C11.359 21.7351 17.2926 23.447 20.1042 20.6339C20.569 20.1858 20.9625 19.7921 21.2729 19.4641C22.1679 18.518 22.3038 16.8598 21.267 15.7825C20.7354 15.2302 19.6504 14.3885 17.733 13.017C17.1457 12.4919 16.4495 12.6057 15.8111 13.0245C15.504 13.226 15.2806 13.4298 14.8586 13.8521L14.0924 14.6188C13.9914 14.7198 12.621 14.0335 11.2908 12.7019C9.95978 11.3696 9.27396 9.99913 9.37441 9.89869L10.1412 9.1315C10.2751 8.99749 10.3391 8.93261 10.4211 8.84634C10.5921 8.66662 10.7337 8.50351 10.8566 8.33797ZM15.5058 16.033L16.2722 15.2662C16.5044 15.0337 16.6549 14.8908 16.7774 14.7923C18.457 15.9985 19.4298 16.7569 19.8271 17.1698C20.0657 17.4176 20.0286 17.8699 19.8212 18.0891C19.5342 18.3925 19.1614 18.7655 18.7038 19.2069C16.8858 21.0257 12.096 19.6438 8.22519 15.7692C4.35321 11.8934 2.97194 7.10286 4.77626 5.29756C5.27792 4.78805 5.43686 4.62919 5.92042 4.15273C6.10172 3.97408 6.59558 3.93396 6.81614 4.15184C7.2432 4.57371 8.0354 5.58806 9.20077 7.2114C9.14044 7.2863 9.06509 7.37094 8.97339 7.46732C8.90609 7.53805 8.85002 7.59489 8.72744 7.71759L7.96142 8.48403C6.65827 9.78707 7.76808 12.0048 9.87703 14.1158C11.9845 16.2254 14.2031 17.3364 15.5058 16.033ZM13.6551 2.06951C17.9784 2.59355 21.4064 6.0216 21.9305 10.3449L19.955 10.6742C19.5736 7.19179 16.8082 4.42637 13.3258 4.04495L13.6551 2.06951ZM12.9963 6.02209C15.6378 6.25835 17.7416 8.36216 17.9779 11.0037L15.9961 11.334C15.912 9.53309 14.4669 8.08797 12.666 8.00387L12.9963 6.02209Z" fill="#064789" />
                        </svg>

                        <a class="nav-link" href="tel:333-333-5434">333-333-5434</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center ml-4">
                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3H26.25C27.6307 3 28.75 3.89543 28.75 5V19C28.75 20.1046 27.6307 21 26.25 21H3.75C2.36929 21 1.25 20.1046 1.25 19V5C1.25 3.89543 2.36929 3 3.75 3ZM3.75 9.61811V19H26.25V9.61853L15 14.1185L3.75 9.61811ZM3.75 7.38199L15 11.8825L26.25 7.38246V5H3.75V7.38199Z" fill="#064789" />
                        </svg>

                        <a class="nav-link" href="mailto:email@gmail.com">email@gmail.com</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row mx-0 text-button-container">
            <div class="col-12 px-0 justify-content-center align-self-center">
                <h1 class="main-text">Trova L'Auto Migliore Vicino A Te</h1>
                <div class="d-flex justify-content-center mt-5">
                    <button type="button" class="d-flex justify-content-center align-items-center explore w-auto" onClick="document.getElementById('vehicle_image').scrollIntoView();">
                        <h1>Esplora</h1>
                        <svg class="d-flex justify-content-center align-items-center" width="3.64vw" height="7.45vh" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4791 15.217L18.3543 19.2829L33.7919 34.5L18.3543 49.717L22.4791 53.7829L42.0415 34.5L22.4791 15.217ZM37.0624 15.217L32.9376 19.2829L48.3752 34.5L32.9376 49.717L37.0624 53.7829L56.6248 34.5L37.0624 15.217Z" fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-content-center" id="middle-container">
            <div class="col d-flex justify-content-center align-content-center align-self-center">
                <img src="MEDIA/cars/2018-mercedes-benz.png" class="img-fluid" id="vehicle_image" alt="2018-mercedes-benz.png" />
            </div>
            <div class="col d-flex justify-content-center align-content-center align-self-center flex-row flex-column">
                <div class="data"><svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 14.25H14.25V11.875H9.5V19H47.5V11.875H42.75V14.25H38V11.875H19V14.25ZM47.5 23.75H9.5V47.5H47.5V23.75ZM38 7.125H19V4.75H14.25V7.125H9.5C6.87665 7.125 4.75 9.25165 4.75 11.875V47.5C4.75 50.1234 6.87665 52.25 9.5 52.25H47.5C50.1234 52.25 52.25 50.1234 52.25 47.5V11.875C52.25 9.25165 50.1234 7.125 47.5 7.125H42.75V4.75H38V7.125ZM16.625 33.25V28.5H21.375V33.25H16.625ZM26.125 33.25H30.875V28.5H26.125V33.25ZM40.375 33.25H35.625V28.5H40.375V33.25ZM16.625 38V42.75H21.375V38H16.625ZM30.875 42.75H26.125V38H30.875V42.75Z" fill="#064789" />
                    </svg>

                    <h2 class="font-weight-bold mt-4">2018</h2>
                    <h2>Immatricolazione</h2>
                </div>
                <div class="data">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4799 2.80515C40.9246 13.6716 47.25 23.1598 47.25 31.5C47.25 43.311 38.0316 51.75 27 51.75C15.9684 51.75 6.75 43.311 6.75 31.5C6.75 23.1598 13.0754 13.6716 25.5201 2.80515L27 1.51294L28.4799 2.80515ZM11.25 31.5C11.25 40.7326 18.3693 47.25 27 47.25C35.6307 47.25 42.75 40.7326 42.75 31.5C42.75 25.0892 37.5601 17.0245 27 7.50732C16.4399 17.0245 11.25 25.0892 11.25 31.5ZM27 40.5V45C34.4558 45 40.5 38.9558 40.5 31.5H36C36 36.4705 31.9706 40.5 27 40.5Z" fill="#064789" />
                    </svg>


                    <h2 class="font-weight-bold mt-4">Benzina</h2>
                    <h2>Alimentazione</h2>
                </div>
                <div class="data">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1463 49.0489C5.96354 44.4036 2.25 37.1333 2.25 29.25C2.25 15.581 13.331 4.5 27 4.5C40.669 4.5 51.75 15.581 51.75 29.25C51.75 37.1333 48.0365 44.4036 41.8537 49.0489L41.2533 49.5H12.7468L12.1463 49.0489ZM39.7293 45C44.4443 41.1863 47.25 35.4532 47.25 29.25C47.25 18.0662 38.1838 9 27 9C15.8162 9 6.75 18.0662 6.75 29.25C6.75 35.4532 9.5557 41.1863 14.2707 45H39.7293ZM38.9683 17.0403L35.2817 14.4597L29.3574 22.9231C28.6235 22.6495 27.8292 22.5 27 22.5C23.2721 22.5 20.25 25.5221 20.25 29.25C20.25 32.9779 23.2721 36 27 36C30.7279 36 33.75 32.9779 33.75 29.25C33.75 28.0002 33.4103 26.8298 32.8183 25.8259L38.9683 17.0403ZM29.25 29.25C29.25 30.4926 28.2426 31.5 27 31.5C25.7574 31.5 24.75 30.4926 24.75 29.25C24.75 28.0074 25.7574 27 27 27C28.2426 27 29.25 28.0074 29.25 29.25Z" fill="#064789" />
                    </svg>

                    <h2 class="font-weight-bold mt-4">35.000</h2>
                    <h2>Chilometraggio</h2>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5 mb-5">
            <button type="button" class="d-flex justify-content-center align-items-center contact w-auto">
                <h1 onclick="openNav()">Contattaci</h1>
            </button>
        </div>
    </div>

    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="row d-flex justify-content-center align-content-center overlay-content text-light">
            <div class="col-12">
                <h1 class="font-weight-bold display-4">Email</h1>
                <p><a class="" href="mailto:email@gmail.com">email@gmail.com</a></p>
            </div>
            <div class="col-12 mt-5">
                <h1 class="font-weight-bold display-4">Numero di telefono</h1>
                <p><a class="" href="tel:333-333-5434">333-333-5434</a></p>
            </div>
        </div>
    </div>
    <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center border-bottom">
            <a id="facebook" class="btn btn-link btn-floating btn-lg text-dark m-1" href="" role="button" data-mdb-ripple-color="dark"><i class="fab fa-facebook"></i></a>
            <a id="instagram" class="btn btn-link btn-floating btn-lg text-dark m-1" href="" role="button" data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
        </section>

        <section class="">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            Rivenditore
                        </h6>
                        <p>
                            Ditta specializzata nella vendita di automobili, che si cura di regalare al cliente la
                            miglior esperienza possibile.
                        </p>
                        <p>
                            P. Iva 86334519757
                        </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Contatto</h6>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            email@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 333-333-5434</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="#">rivenditore.com</a>
        </div>
    </footer>
    <script src="JS/index.js"></script>

</body>

</html>