import React from "react";
import './layout.css'

const Layout = () => {
    return(
        <>
            <header class="header">
                <ul>
                    <li class="stay"><a href="/">MyApp</a></li>
                    <li class="hide"><a href="/">DOC</a></li>
                    <li class="hide"><a href="/">BLOG</a></li>
                    <li class="hide"><a href="/">ABOUT</a></li>
                </ul>
            </header>

            <main class="main">

                <div class="post-card">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9T49aCmVvD8UhGtzpNzlLyKmG5vWlsYcvw&usqp=CAU" width="40px" alt="person-profile-1" />
                        <p><b><u>@sarah256</u></b></p>
                    </div>
                    <div>
                        <img src="https://www.alephksa.com/wp-content/uploads/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_EN-1-scaled.jpg" width="70%" alt="person-1" />
                        <h3>IPhone 14 Pro Max</h3>
                        <br />
                        <p>When composing a new message with Dual SIM enabled, you will have the option to switch between sims before sending a new message. From the new message screen, enter the desired contact. Select current line, then select the desired line... </p>
                        <p><small><b><i>24th January 2023</i></b></small></p>
                        <br />
                    </div>
                    <div>
                        <hr />
                        <br />
                        See More
                    </div>

                </div>

                <div class="post-card">
                    <div>
                        <img src="https://png.pngitem.com/pimgs/s/303-3039859_sheldon-cooper-no-background-hd-png-download.png" width="40px" alt="person-profile-2" />
                        <p><b><u>@michael512</u></b></p>
                    </div>
                    <div>
                        <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-126764/Google-Pixel-7-Pro_featured-image-packshot-review.jpg" width="70%" alt="person-2" />
                        <h3>Google Pixel 7</h3>
                        <br />
                        <p>When composing a new message with Dual SIM enabled, you will have the option to switch between sims before sending a new message. From the new message screen, enter the desired contact. Select current line, then select the desired line... </p>
                        <p><small><b><i>20th January 2023</i></b></small></p>

                        <br />
                    </div>

                    <div>
                        <hr />
                        <br />
                        See More
                    </div>
                </div>

        </main>
        </>
    )
}

export default Layout;