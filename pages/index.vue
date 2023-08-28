<template>
  <h1 class="text-3xl font-bold underline bg-red-500">Hello world!</h1>
  <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1>
  <form>
    <label for="locale-select">{{ $t("language") }}: </label>
    <select id="locale-select" v-model="$i18n.locale">
      <option value="en">en</option>
      <option value="cat">cat</option>
    </select>
  </form>
  <div v-for="word in words" :key="word.name" class="mt-8">
    <h1 class="mt-2">{{ $t(word.name) }}</h1>
  </div>
</template>

<script setup>
const words = [{ name: "Home" }, { name: "Contact" }];
</script>