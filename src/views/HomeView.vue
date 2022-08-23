<template>
  <div>

    <h1>This is a front page</h1>

  </div>
  <div v-for="post in posts" :key="post">

    <p>Title: {{post.title}}</p>


  </div>
</template>

<script setup>

import { db } from "../Firebase.js"
import { ref } from 'vue'

import { collection, getDocs } from "firebase/firestore";

const posts = ref([]);

const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  posts.value.push(
    ...doc.data(),
    id: doc.id
    
  )
});

// Components



</script>
