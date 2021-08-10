<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="list-name"><img src="~/assets/thisi2.png" alt=""></div>
                    <ul>
                            <li>
                            <div class="media_icon">
                            <i class="fa fa-facebook work"></i>
                            <i class="fa fa-twitter work"></i>
                            <i class="fa fa-instagram work"></i>
                            </div> 
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="list-name">ABOUT US</div>
                    <ul>
                        <li><h3 class="widget-title">ABOUT US</h3></li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="list-name">SERVICES</div>
                    <ul>
                        <li><h3 class="widget-title">SERVICES</h3></li>
                        <li>Hair Cut</li>
                        <li>Chemical Treatment</li>
                        <li>Keratin Treatment</li>
                        <li>All Services</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="list-name">Contact</div>
                    <ul>
                        <li><h3 class="widget-title">CONTACT</h3></li>
                        <li>
                            <div class="media_icon icons2">
                            <i class="fa fa-map-marker">  Uyo</i>
                            <i class="fa fa-phone"> (+234) 817 7746 867</i>
                            <i class="fa fa-envelope ">nyonganiebiet@gmail.com</i>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
        <!-- <div class="end">
          <div class="container">copyright &#169; 2021-glook</div>        
        </div> -->
     </div>
</template>

<style scoped>
.footer{
    
    background-color: white !important;
    /* padding-bottom: 2rem; */
}
footer-text{
    margin-top: 5rem;
    color: white;
}
.end{
    background-color: #a34871;
}
.footer-text2{
    color: #f15f22;
    margin-top: 5rem;
    float: right;
}
/* hr{
    color: white;

} */
.list-name{
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: white;
}
/* .col-sm-3{
    border-right: 2px solid rgba(163, 72, 113, 0.81);

} */
ul{
    margin : 0;
    padding: 0;
    margin-top: 2rem;
}
li{
    list-style-type: none;
    margin-top: 1rem;
    font-size: 1.1rem;
    cursor: pointer;
}
widget-title{
    margin-top: 13px;
    font-size: 16px;
    font-weight: bold;
    /* text-transform: uppercase; */
    line-height: 27px;
    margin-bottom: 23px;
    color: black;
}
.media_icon{

    letter-spacing: .2rem;
    font-size: 1.1;
} 
.icons2 i{
   padding: 10px ;
}
@media only screen and (max-width: 600px) {
.footer{
    margin-top: 5rem;
    background-color: white;
}
.footer-text{
    margin-top: 5rem;
    color: white;
}
.footer-text2{
    color: #f15f22;
    margin-top: 1.5rem;
    float: none;
}
ul{
    margin : 0;
    padding: 0;
    margin-top: 1rem;
}
.media_icon .work:hover{
    color: #a34871;
}
@media only screen and (min-width: 700px)  and (max-width: 1200px) {

}
}
</style>>