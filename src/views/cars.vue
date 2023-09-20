<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover table-bordered table-striped custom-table">
          <thead>
            <tr>
              <th class="table-header">T/H</th>
              <th class="table-header">Name</th>
              <th class="table-header">Price</th>
              <th class="table-header">Color</th>
              <th class="table-header">Year</th>
              <th class="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cars" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.color }}</td>
              <td>{{ item.year }}</td>
              <td>
                <button @click="moveOneCar(item.id)" class="btn btn-primary btn-details">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const cars = ref([
  { id: 1, name: "Lotus", price: "230000$", color: "yellow", year: 2020 },
  { id: 2, name: "Bugatti", price: "500500$", color: "black", year: 2021 },
  { id: 3, name: "Ferari", price: "780000$", color: "red", year: 2022 },
  { id: 4, name: "Lamborgini", price: "1000000$", color: "blue", year: 2023 },
]);

const moveOneCar = (id) => {
  router.push({ name: "cars_info", params: { id: id } });
};
</script>

<style lang="scss" scoped>
.custom-table {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
}

.custom-table th,
.custom-table td {
  padding: 10px;
  text-align: center;
}

.custom-table th {
  background-color: #51ff00;
  color: #fff;
}

.custom-table tr:nth-child(even) {
  background-color: #fff;
}

.custom-table tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.btn-details {
  background-color: #00ff00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-details:hover {
  background-color: #24b300;
}

.table-header {
  font-weight: bold;
}
</style>
  