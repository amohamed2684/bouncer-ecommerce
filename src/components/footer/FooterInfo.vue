<template lang="html">
  <div class="flex flex-row max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:place-items-center gap-8 justify-between max-w-screen-xl w-full mx-auto p-4">
    <FooterLinks title="Information" :links="informationLinks" />
    <FooterLinks title="Service" :links="serviceLinks" />
    <FooterLinks title="Extras" :links="extraLinks" />
    <FooterLinks title="My Account" :links="accountLinks" />
    <FooterLinks title="Useful Links" :links="usefulLinks" />
    <FooterLinks title="Our Offers" :links="offerLinks" />
  </div>
</template>
<script setup lang="ts">
import FooterLinks from './FooterLinks.vue';

const informationLinks = [
  { label: "About Us", url: "#" },
  { label: "Information", url: "#" },
  { label: "Privacy Policy", url: "#" },
  { label: "Terms & Conditions", url: "#" }
];

const serviceLinks = [...informationLinks];
const extraLinks = [...informationLinks];
const accountLinks = [...informationLinks];
const usefulLinks = [...informationLinks];
const offerLinks = [...informationLinks];
</script>
<style lang="css">
  
</style>