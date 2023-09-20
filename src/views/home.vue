<!-- <template>
    <div class="row mt-5">
      <div class="col-4 offset-4">
            <h2 class="text-center">Home</h2>
            <router-link to="/login" class="link" active-class="active_link">Login</router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
 .text-center {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 30px;
  }


</style> -->


<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4 offset-4 text-center">
        <h2 class="custom-heading">Home</h2>
        <router-link to="/login" class="custom-link" active-class="active_link">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-heading {
  color: #0066ff; /* Customize the heading color */
  font-size: 24px; /* Adjust font size */
}

.custom-link {
  text-decoration: none;
  background-color: #921b0b; /* Customize button background color */
  color: #03ff18; /* Customize button text color */
  padding: 10px 20px; /* Adjust button padding */
  border-radius: 5px; /* Customize button border radius */
  font-size: 18px; /* Adjust font size */
  transition: background-color 0.3s ease; /* Add hover effect */
}

.custom-link:hover {
  background-color: #0056b3; /* Change button color on hover */
  cursor: pointer;
}
</style>