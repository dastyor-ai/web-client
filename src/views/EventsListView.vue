<template>


    <div class="px-32 mt-28">

        <div class="flex items-center space-x-8 mb-8">
            <h1 class="text-2xl font-bold">Скоро в </h1>
            <select class="pe-8 p-4 rounded-full shadow-lg  font-bold outline-none">
              <option value="Худжанд"> 📍 Худжанд</option>
            </select>
            <h1 class="text-2xl font-bold"> намечается </h1>
        </div>
        <div class=" flex flex-wrap mb-20">

            <a href="/event">
                <EventCard
                event-image="/img/event1 (2).png"
                event-alt="Хакатон Цифровое поколение 2.0"
                event-title="Хакатон Цифровое поколение 2.0"
                event-subtitle=""
                event-date="Сегодня"
                event-time="11:00"
                event-location="Кохи Матбуот, 11 этаж"
                event-organizer="Афкор Академия"
                />
            </a>


            <EventCard
            event-image="/img/event2.png"
            event-alt="Education Fair 2024"
            event-title="Education Fair 2024"
            event-subtitle=""
            event-date="12 августа"
            event-time="13:00"
            event-location="Каландаров, 25"
            event-organizer="American Space Khujand"
            />


            <EventCard
            event-image="/img/event3.png"
            event-alt="NDL Online Tournament"
            event-title="NDL Online Tournament"
            event-subtitle=""
            event-date="29 августа"
            event-time="09:00"
            event-location="Каландаров, 25"
            event-organizer="National Debat League"
            />

            <EventCard
            event-image="/img/event4.png"
            event-alt="МОТО фест"
            event-title="МОТО фест"
            event-subtitle=""
            event-date="1 сентября"
            event-time="10:00"
            event-location="парк Камола Хучанди"
            event-organizer="Moto Community"
            />
    
        </div>
    </div>

    


</template>


<style scoped>

    @import url(../styles/index.css);
    


</style>

<script>
import EventCard from '../components/EventCard.vue'

export default {
        components: {EventCard}
    }
</script>