<template>
  <div class="home flex pb-32" style="margin-left: 500px;">
    


    <div class="flex">


      <div class="main w-full py-4 ps-0" style="width: 1200px;">


        <div class="mt-24">
            <div class="flex items-center space-x-8 mb-4">
              <h1 class="text-2xl font-bold">Всё в </h1>
              <select class="pe-8 p-4 rounded-full shadow-lg  font-bold outline-none">
                <option value="Худжанд"> 📍 Худжанд</option>
              </select>



            </div>
            <div v-if="askedAi">
              <h1 class="text-xl font-bold">банкеты, фуршеты, кофе-брейки</h1>
              <div class="flex flex-wrap ">

                

                <a href="/service">
                  <ServiceCard
                main-image="/img/milano.png"
                title="Милано Пицца"
                price="1200"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Хомидов Карим"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.5"
                
                />
                </a>


                <ServiceCard
                main-image="/img/vaqt.png"
                title="Кафе Вакт"
                price="800"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Тураев Аличон"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="3.5"
                
                />

                <ServiceCard
                main-image="/img/taj.png"
                title="Таджбургер"
                price="900"
                author-image="/img/images (2).jpg"
                author-alt="Author"
                author-name="Хомидов Карим"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.5"
                
                />



                

                

                      
              </div>


              <h1 class="text-xl font-bold">аудио- и видеотехники</h1>
              <div  class="flex flex-wrap ">
                <ServiceCard
                main-image="/img/kodak.jfif"
                title="Кодак Студия"
                price="2200"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Комрон Валиев"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.0"
                
                />

                <ServiceCard
                main-image="/img/bright.png"
                title="Bright Studio"
                price="2200"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Каримчон Хомидов"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.0"
                
                />
                
              </div>

              <h1 class="text-xl font-bold">оформление и декор</h1>
              <div  class="flex flex-wrap ">
                <ServiceCard
                main-image="/img/weddin1.png"
                title="Оформления и декор"
                price="2200"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Абдусаттор Чураев"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.0"
                
                />

                
                
              </div> 



              <h1 class="text-xl font-bold">баннеры и плакаты</h1>
              <div  class="flex flex-wrap ">
                <ServiceCard
                main-image="/img/banner1.png"
                title="E-design agency"
                price="1100"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Назарова Сафина"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.9"
                
                />

                <ServiceCard
                main-image="/img/graph.png"
                title="Агентсво Графит"
                price="900"
                author-image="/img/profile.png"
                author-alt="Author"
                author-name="Каххоров Тохирчон"
                star-image="/img/star.png"
                star-alt="Star Rating"
                rating="4.2"
                
                />

                
                
              </div> 


            </div>

            <div v-if="!askedAi">
              <div class="flex flex-col items-end justify-end ">
                <div v-for="message in messages" class="rounded-full rounded-br-none bg-blue-400 text-white font-bold my-2 p-4">{{message}}</div>
              </div>
              <div class=" space-y-4 items-center">
                <div class="flex flex-col items-start justify-end">
                  <div style="max-width: 350px;" v-if="timeToAnswer" class="rounded-full rounded-bl-none bg-blue-400 text-white font-bold my-2 p-4">Секунду. Подбираем все самое лучшее для вашего мероприятия</div>                
                </div>
                <div class="flex justify-center items-center h-full">
                  <div v-if="timeToAnswer" class="loader mt-8"></div>

                </div>
              </div>
            </div>

            
        </div>
      





        <div class="flex justify-center">
          <div class="md:w-2/3 ai_search_inp flex justify-between rounded-full items-center space-x-2 fixed ai_search  rounded-full ">
            <input @keydown.enter="sendAi" v-model="question" type="text" class=" pe-20 ps-8 p-4  flex-1 rounded-full outline-none  " placeholder="Ask me anything...">
            <!-- <button class="bg-black ms-4 text-white font-black rounded-full p-2">GO</button> -->
            <div class="rounded-full bg-gray-100 p-2"  @click="sendAi">
              <img src="../assets/ri_telegram-2-line.png" width="40" class="" alt="">
            </div>
          </div>
        </div>


      </div>



    </div>





  </div>
</template>

<style scoped>


  @import url(../styles/home.scss);
  @import url(../styles/index.css);


  .loader {
    border: 16px solid #dad8d8; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(1160deg); }
}


</style>

<script>

import ServiceCard from '../components/ServiceCard.vue'

export default {
  name: 'HomeView',
  data: () => ({
    messages: [],
    question: '',
    askedAi: false,
    timeToAnswer: false
  }),
  components: {ServiceCard},
  methods: {
    sendAi() {
      this.messages.push(this.question)
      setTimeout(() => {
        this.timeToAnswer = true
        this.question = ''
        this.countforanswers()
      }, 2000)
    },
    countforanswers() {
      setTimeout(() => {
        this.askedAi = true
      }, 3000)
    }
  }
}
</script>
