<!-- 
<template>
  <div class="row mt-5">
    <div class="col-4 offset-4">
      <form>
        <input type="email" placeholder="Email" class="form-control" />
        <br />
        <input type="password" placeholder="Password" class="form-control" />
        <br />
        <router-link to="/cars" class="link">Login</router-link>
      </form>
    </div>
  </div>
</template>

<script setup></script>

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
  <div class="row mt-5">
    <div class="col-4 offset-4">
      <form class="login-form">
        <input type="email" placeholder="Email" class="form-control input-field" />
        <br />
        <input type="password" placeholder="Password" class="form-control input-field" />
        <br />
        <router-link to="/cars" class="login-link">Login</router-link>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login-form {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #f8a9a9;
  border-radius: 3px;
  font-size: 16px;
}

.login-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #00dd30;
  color: #a50000;
  text-decoration: none;
  border-radius: 3px;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.login-link:hover {
  background-color: #0056b3;
  cursor: pointer;
}
</style>