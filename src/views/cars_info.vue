

  <template>
    <div class="row mt-5">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">{{ car.name }}</h1>
          </div>
          <div class="card-body">
            <p>Price: {{ car.price }}</p>
            <p>Color: {{ car.color }}</p>
            <p>Year: {{ car.year }}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-outline-info">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router"; // Import useRoute from vue-router
  
  const router = useRoute();
  const cars = ref([
  { id: 1, name: "Lotus", price: "230000$", color: "yellow", year: 2020 },
  { id: 2, name: "Bugatti", price: "500500$", color: "black", year: 2021 },
  { id: 3, name: "Ferari", price: "780000$", color: "red", year: 2022 },
  { id: 4, name: "Lamborgini", price: "1000000$", color: "blue", year: 2023 },
  ]);
  
  const car = cars.value.find((item) => item.id == router.params.id);
  </script>
  
  <style lang="scss" scoped>
.card {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #1eff00;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  padding: 20px;
  text-align: center;
}

.card-footer {
  text-align: center;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btn-outline-info {
  background-color: transparent;
  color: #00ff55;
  border: 2px solid #009100;
  border-radius: 5px;
  padding: 5px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-outline-info:hover {
  background-color: #09ff00;
  color: #fff;
}

.text-center {
  text-align: center;
}

/* Add your custom styles if needed */
</style>