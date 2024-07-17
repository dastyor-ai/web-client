<template>
    <div class="border-2 me-2 my-4" style="max-width: 370px;">
        <div class="p-4 flex justify-center">
            <img :src="mainImage" width="200"  :alt="mainAlt">
        </div>
      <div class="p-4">
        <p class="text-lg font-bold">{{ title }}</p>
        <h1 class="text-end text-green-700 font-bold text-xl">{{ price }} c.</h1>
      </div>
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center space-x-4">
          <img :src="authorImage" class="rounded-full" width="35" :alt="authorAlt">
          <h5 class="leading-5">{{ authorName }}</h5>
        </div>
        <div class="flex items-center space-x-2 p-4">
          <img :src="starImage" class="rounded-full" width="20" :alt="starAlt">
          <h5 class="text-gold-800">{{ rating }}</h5>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mainImage: {
        type: String,
        required: true
      },
      mainAlt: {
        type: String,
        default: 'Main Image'
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      authorImage: {
        type: String,
        required: true
      },
      authorAlt: {
        type: String,
        default: 'Author Image'
      },
      authorName: {
        type: String,
        required: true
      },
      starImage: {
        type: String,
        required: true
      },
      starAlt: {
        type: String,
        default: 'Star Rating'
      },
      rating: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .text-gold-800 {
    color: #FFD700;
  }
  </style>
  