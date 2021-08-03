<template>
    <div>
        
        <div class="container-fluid contact_us" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
            <div class="row">
                <div class="container">
                <div class="card contact_card">
                <div class="card-body">
                    <div class="try_us">Ready to try us?</div>
                    <div class="try_us2"> Request for a free delivery</div>
                    <p>We understand the challenges facing delivery and logistic, but we at Logistic express, we ensure safe and efficient 
                        delivery of every package. </p>
                       <p>That why we offer a free trail of our service to every first customers.</p> 
                 <form method="post" @submit.prevent="deliver">
                    <div class="form-row">
                        <div class="col">
                        <input type="text" class="form-control" required placeholder="Name" v-model="deliveryorder.name">
                        </div>
                        <div class="col">
                        <input type="email" class="form-control" required placeholder="Email" v-model="deliveryorder.email">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control mt-3" required v-model="deliveryorder.pickup" placeholder="Pickup Address">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control mt-3" required v-model="deliveryorder.dropoff" placeholder="Dropoff Address">
                        </div>
                    </div>
                    
               
                <div class="form-row mt-3">
                        <div class="col">
                            <div class="form-group">
                                <select class="custom-select increase_height" name="" required v-model="deliveryorder.type">
                                    <option value="" selected disabled>Freight Type</option>
                                    <option value="">Goods Delivery</option>
                                    <option value="">Luggages Transfer</option>
                                    <option value="">Pick Up</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Weight" required v-model="deliveryorder.weight">
                        </div>
                    </div>
                    
                     <div class="form-row mt-3">
                        <div class="col">
                        <input type="date" class="form-control" required v-model="deliveryorder.date" placeholder="Expected Date of Delivery">
                        </div>
                        <div class="col">
                        <input type="time" class="form-control" required v-model="deliveryorder.time" placeholder="Expected Time of Delivery">
                       
                        </div>
                    </div>
                     <div class="btn_centerDelivery">
                    <button class="btn btn-primary mt-3" type="submit">Request Delivery</button>
                    </div>
                </form>
                </div>
                </div>
            </div> 
            </div>
        </div>
         
        
                </div>     
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
    data(){
        return{
            counter : 0,
            isDisabled : false,
            prevDisabled : true,
            deliveryorder:{
                name:'',
                email:'',
                pickup:'',
                dropoff:'',
                type:'',
                weight:'',
                date:'',
                time:''
            },
            recieved:{}
        }
    },
    methods : {
        nextBtn(){
            this.prevDisabled = false
            this.$refs.show.children[this.counter].classList.remove("active");
            this.counter++;
            this.$refs.show.children[this.counter].classList.add("active")
            if(this.counter + 1 === this.$refs.show.children.length){
                this.isDisabled = true
            }
        },
         prevBtn(){
             if(this.counter === 0){
                this.prevDisabled = true
             }
           else{
               this.isDisabled = false
            this.$refs.show.children[this.counter].classList.remove("active");
            this.counter--;
            this.$refs.show.children[this.counter].classList.add("active")
           }
        },
        async deliver() {
      try {
        this.$axios.post('https://nuxtauth-21a1a-default-rtdb.firebaseio.com/freedelivery.json',this.deliveryorder,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
            this.recieved =res
            this.$message({
            message: "Order successful",
            type: "success",
            });
          console.log(this.recieved)
          this.deliveryorder={}
          
        })
      } catch (err) {
           this.$message({
            message: "There was a problem sending your order. Please check and try again.",
            type: "warning",
            });
        console.log(err)
      }
    },
        
    }
}
</script>>

<style scoped>
.font_edit1{
    font-size: 2rem;
    color: #f15f22;
    border-radius: 12px;
}
.back{
    /* background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767)); */
    height: 550px !important;
    /* margin-top: 13vh; */
}
.header{
    font-size: 5rem;
    text-transform:capitalize ;
    margin-top: 8rem ;
    width: 70%;
    line-height: 6rem;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
/* img{
    margin-top: 5rem;
} */
.input-group {
    margin-top: 2rem !important;
    width: 45% !important;
}
.form-control {
    padding: 1.8rem .75rem !important;
}
.input-group-text {
    color: white;
    background-color: #f15f22;
    border: 1px solid #f15f22;
    cursor: pointer !important;
   
}
.id_text{
    color : white;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 600;
}
.font_edit{
    font-size: 4rem;
    color: #f15f22;
}
.wrapper_icon{
    background-color:  rgba(248, 248, 248, 0.767);
    height: 200px;
}
.container_icon{
    margin-top: 3rem;
}
.icon_head{
    margin-top: .7rem;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: rgba(116, 112, 112, 0.767);
    font-weight: 400;
}
/* .font_edit:hover{
    color: white;
} */
.icon_text{
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    color:  hsl(229, 31%, 21%);
}
.our_service{
    color : #f15f22;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
}
.service_text{
    text-align: center;
    font-size: 3rem;
    text-transform: capitalize;
    color: hsl(229, 31%, 21%) ;
    font-weight: 400;
}
h5{
    color: hsl(229, 31%, 21%);
    font-weight: 600;
    font-size: 2.2rem;
}
p{
    color :  rgba(116, 112, 112, 0.767);
    font-weight: 400;
    font-size: 1rem;
}
.card-deck .card {
    height: 430px;
}
.card_hover{
  -webkit-transition: 2s; 
  transition:  2s;
}
/* .card_hover:hover{
    background-color: #f15f22;
    color: white !important;
} */
.about{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 8rem;
}
.about_text{
    color : hsl(229, 31%, 21%);
    margin-top: .3rem;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    width: 80%;
    text-transform: capitalize;
}
.about_word{
    margin-top: .5rem;
    font-size: 1.1rem;
    text-align: justify;
    width: 80%;
    word-break: keep-all;
}
.pic_margin{
    margin-top: 4rem;
}
.img_agent{
    content: url("/img/hero/delivery-man.png");
    height: 450px;
}
.btn-dark {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    -webkit-transition: 2s; 
    transition:  2s;
    text-transform: capitalize;
}
.btn_centerDelivery{
    text-align: center !important;
}
.btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
}
.btn{
  padding: .775rem 1.5rem !important;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 120vh;
}
.contact_card{
    margin-top: 5rem;
    width: 70%;
}
.try_us{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.try_us2{
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: .3rem;
    font-weight: 500;
    color: hsl(229, 31%, 21%);
}
.increase_height{
    height: calc(2.9em + .75rem + 2px) !important;
}
.btn-primary {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    text-transform: capitalize;
}
.btn-primary:hover {
    background-color:  #ffc107 !important;
    border-color: #ffc107 !important;
}
.our_agent{
    margin-top: 7rem;
}
input[type=date] {
  text-align: right;
}
input[type="date"]:before {
  color: black;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
input[type=time] {
  text-align: right;
}
input[type="time"]:before {
  color: black;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
/* input[type="time"]:focus:before {
  content: '' !important;
} */
.agent_card1{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -5em;
}
.agent_card2{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -5em;
}
.agent_card3{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -5.6em;
}
.our_client{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.client_text{
    font-size: 3rem;
    text-transform: capitalize;
    color: white ;
    font-weight: 400;
}
.client_body{
    margin-top: 10rem;
}
.client_bg{
    margin-top: 2rem;
    background-color: rgb(6, 14, 59);
    height: 60vh;
}
.each_client p{
    color: white !important;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
}
.active{
    display : block !important;
}
#client-hide{
    display : none
}
.btn-outline-dark {
    color: white !important;
    border-color: #f15f22 !important;
}
.btn_margin{
    margin-top:1rem;
    position: relative;
    top: -75px;
    left: 40vh;
}
.email_notification{
    color: #f15f22;
    margin-top: 2rem;
    text-align: center;
    text-transform: capitalize;
}
.reduce{
    width: 80% !important;
}
.card_width{
    width: 70%;
    float: right;
    padding: .9rem;
    border-radius: 12px;
    margin-top: 3rem;
}
.footer{
    margin-top: 10rem;
    background-color: black;
}
.footer-text{
    margin-top: 5rem;
    color: white;
}
.footer-text2{
    color: #f15f22;
    margin-top: 5rem;
    float: right;
}
hr{
    color: white;

}
.list-name{
    font-size: 1.5rem;
    margin-top: 3rem;
    color: white;
}
ul{
    margin : 0;
    padding: 0;
    margin-top: 2rem;
}
li{
    list-style-type: none;
    margin-top: 1rem;
    color: #949090;
    font-size: 1.1rem;
    cursor: pointer;
}
.media_icon{
    letter-spacing: .7rem;
    font-size: 1.1;
}
@media only screen and (max-width: 600px) {
.back{
    background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767));
    height: 400px !important;
    margin-top: 12vh;
}
.input-group {
    margin-top: 2.5rem !important;
    width: 100% !important;
}
.header{
    font-size: 2rem;
    text-transform:capitalize ;
    margin-top: 5rem ;
    width: 100%;
    line-height: 3rem;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
.wrapper_icon{
    background-color:  rgba(248, 248, 248, 0.767);
    height: 500px;
}
.container_icon{
    margin-top: 1rem;
}
.font_edit{
    font-size: 2.5rem;
    color: #f15f22;
}
.icon_head{
    margin-top: 0rem;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: rgba(116, 112, 112, 0.767);
    font-weight: 400;
}
.icon_text{
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    color:  hsl(229, 31%, 21%);
}
.text_center{
    text-align: center !important;
}
.our_service{
    color : #f15f22;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
}
.service_text{
    text-align: center;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: hsl(229, 31%, 21%);
    font-weight: 500;
}
h5{
    color: hsl(229, 31%, 21%);
    font-weight: 600;
    font-size: 2.2rem;
}
p{
    color :  rgba(116, 112, 112, 0.767);
    font-weight: 400;
    font-size: 1.12rem;
}
.about_margin{
    margin-top: 0;
}
.about{
    text-align: center;
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 8rem;
}
.about_text{
    color : hsl(229, 31%, 21%);
    text-align: center;
    margin-top: 0;
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-transform: capitalize;
}
.about_word{
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
    width: 100%;    
}
.card-deck .card {
    height: auto;
}
.pic_margin{
    margin-top: 0;
    margin-left: 1rem;
}
.img_agent{
    content: url("/img/hero/delivery-man.png");
    height: 400px;
    text-align: center;
}
.btn-dark {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    -webkit-transition: 2s; 
    transition:  2s;
    text-transform: capitalize;
}
.btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
}
.btn{
  padding: .775rem 1rem !important;
}
.btn_center{
    text-align: center !important;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 180vh !important;
}
.contact_card{
    margin-top: 2rem;
    width: 100%;
}
.form-row{
    display: block !important;
}
.try_us{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.try_us2{
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: .3rem;
    font-weight: 500;
    color: hsl(229, 31%, 21%);
}
.increase_height{
    height: calc(2.9em + .75rem + 2px) !important;
}
.btn-primary {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    text-transform: capitalize;
}
.form-row .col{
    margin-top : 1rem;
}
.agent_card1{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -2em;
}
.agent_card2{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -3.5em;
}
.agent_card3{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -3em;
}
.our_client{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.client_text{
    font-size: 3rem;
    text-transform: capitalize;
    color: white ;
    font-weight: 400;
}
.client_body{
    margin-top: 10rem;
}
.client_bg{
    margin-top: 5rem;
    background-color: rgb(6, 14, 59);
    height: 150vh;
}
.each_client p{
    color: white !important;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
}
.btn-outline-dark {
    color: white !important;
    border-color: #f15f22 !important;
}
.btn_margin{
    margin-top:1rem;
    position: relative;
    top: 0;
    left: 0;
}
.email_notification{
    color: #f15f22;
    margin-top: 3rem;
    text-align: none !important;
    text-transform: capitalize;
}
.card_width{
    width: 100%;
    float: none;
    padding: .9rem;
    border-radius: 12px;
    margin-top: 2rem;
}
}
@media only screen and (min-width: 700px)  and (max-width: 1200px) {
.back{
    background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767));
    height: 400px !important;
    margin-top: 12vh;
}
.input-group {
    margin-top: 2.5rem !important;
    width: 80% !important;
}
.header{
    font-size: 5rem;
    text-transform:capitalize ;
    margin-top: 3rem ;
    width: 100%;
    line-height: 5rem;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
.wrapper_icon{
    background-color:  rgba(248, 248, 248, 0.767);
    height: 200px;
}
.container_icon{
    margin-top: 4rem;
}
.font_edit{
    font-size: 2rem;
    color: #f15f22;
}
.icon_head{
    margin-top: 0rem;
    font-size: .9rem;
    text-transform: capitalize;
    color: rgba(116, 112, 112, 0.767);
    font-weight: 400;
}
.icon_text{
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 700;
    color:  hsl(229, 31%, 21%);
}
.text_center{
    text-align: none !important;
}
h5{
    color: hsl(229, 31%, 21%);
    font-weight: 600;
    font-size: 2.2rem;
}
p{
    color :  rgba(116, 112, 112, 0.767);
    font-weight: 400;
    font-size: 1.12rem;
}
.card-deck .card {
    height: auto;
}
.about_margin{
    margin-top: 0;
}
.about{
    text-align: center;
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 8rem;
}
.about_text{
    color : hsl(229, 31%, 21%);
    text-align: center;
    margin-top: 0;
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-transform: capitalize;
}
.about_word{
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
    width: 100%;
}
.pic_margin{
    margin-top: 10rem;
}
.img_agent{
    content: url("/img/hero/delivery-man.png");
    height: 400px;
    text-align: center;
}
.btn-dark {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    -webkit-transition: 2s; 
    transition:  2s;
    text-transform: capitalize;
}
.btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
}
.btn{
  padding: .775rem 1rem !important;
}
.btn_center{
    text-align: center !important;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 120vh;
}
.contact_card{
    margin-top: 1rem;
    width: 100%;
}
.try_us{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.try_us2{
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: .3rem;
    font-weight: 500;
    color: hsl(229, 31%, 21%);
}
.increase_height{
    height: calc(2.9em + .75rem + 2px) !important;
}
.btn-primary {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    text-transform: capitalize;
}
.form-row .col{
    margin-top : 1rem;
}
.agent_card1{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -1em;
}
.agent_card2{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -1em;
}
.agent_card3{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -1em;
}
.our_client{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.client_text{
    font-size: 3rem;
    text-transform: capitalize;
    color: white ;
    font-weight: 400;
}
.client_body{
    margin-top: 10rem;
}
.client_bg{
    margin-top: 5rem;
    background-color: rgb(6, 14, 59);
    height: 80vh;
}
.each_client p{
    color: white !important;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
}
.btn-outline-dark {
    color: white !important;
    border-color: #f15f22 !important;
}
.btn_margin{
    margin-top:.5rem;
    position: relative;
    top: 0;
    left: 0;
}
.card_width{
    width: 100%;
    float: none;
    padding: .9rem;
    border-radius: 12px;
    margin-top: 6rem;
}
}
@media only screen and (min-width: 1824px) {
    .btn_margin{
    margin-top:1rem;
    position: relative;
    top: -75px;
    left: 20vh !important;
}
.client_bg{
    margin-top: 2rem;
    background-color: rgb(6, 14, 59);
    height: 30vh;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
}
.pic_margin{
    margin-top: 6rem;
}
}
</style>




