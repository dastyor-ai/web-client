<template>
    <div style="max-width: 300px;" class="eventCard rounded-xl me-6 my-4">
      <img :src="eventImage" class="w-full" :alt="eventAlt">
      <div class="rounded-xl rounded-t-none p-4 space-y-2" style="background: #f2f2f2;">
        <button class="bg-red-200 text-sm font-bold rounded-lg p-2">Места ограничены</button>
        <h1 class="text-xl font-bold">{{ eventTitle }}</h1>
        <h3 class="text-xl font-bold">{{ eventSubtitle }}</h3>
        <h5 class="text-md">{{ eventDate }} • {{ eventTime }}</h5>
        <h5 class="text-gray-700">{{ eventLocation }}</h5>
        <h5 class="text-blue-700">{{ eventOrganizer }}</h5>
      </div>
    </div>
  </template>
  
  <style scoped>
  .eventCard:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px rgb(145, 145, 145);
  }
  </style>
  
  <script>
  export default {
    props: {
      eventImage: {
        type: String,
        required: true
      },
      eventAlt: {
        type: String,
        default: 'Event Image'
      },
      eventTitle: {
        type: String,
        required: true
      },
      eventSubtitle: {
        type: String,
        default: ''
      },
      eventDate: {
        type: String,
        required: true
      },
      eventTime: {
        type: String,
        required: true
      },
      eventLocation: {
        type: String,
        required: true
      },
      eventOrganizer: {
        type: String,
        required: true
      }
    }
  }
  </script>
  