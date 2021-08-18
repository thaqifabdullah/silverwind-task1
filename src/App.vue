<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid d-flex justify-content-center">
    <a class="navbar-brand fs-2 fw-bold text-uppercase" href="#">District Manager</a>
  </div>
</nav>

<div class="container-fluid">
  <div class="m-5">
    <div class="container mt-5">
      <div class="row row-cols-1 row-cols-lg-3 row-cols-sm-2 g-5">
        <div class="col">
          <label for="">Filter By Age</label>
          <select class="form-select w-100" aria-label="Default select example" v-model="ageFilter" v-on:change="onFilter()">
            <option value="0">Select age</option>
            <option value="1">20 and below</option>
            <option value="2">21 to 39</option>
            <option value="3">40 and above</option>
          </select>
        </div>
      </div>

      <div class="row">
        <hr class="solid my-5 col">
      </div>

      <div class="row row-cols-1 row-cols-lg-3 row-cols-sm-2 g-5">
        <div v-for="manager in filteredManagers" :key="manager.id" class="col">
          <ManagerComponent v-bind:manager="manager"></ManagerComponent>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ManagerComponent from './components/ManagerComponent.vue'
import { AgeRange } from '../src/enums/enumAgeRange'
import { Manager } from '@/types/types'

@Options({
  components: {
    ManagerComponent
  }
})
export default class App extends Vue {
  ageFilter: number = AgeRange.ALL;
  managers: Manager[] = [];
  filteredManagers: Manager[] = [];

  onFilter () {
    switch (+this.ageFilter) {
      case AgeRange.ALL:
        this.filteredManagers = this.managers
        break
      case AgeRange.TWENTY_BELOW:
        this.filteredManagers = this.managers.filter(manager => manager.age < 21)
        break
      case AgeRange.TWENTYONE_THIRTYNINE:
        this.filteredManagers = this.managers.filter(manager => manager.age > 20 && manager.age < 40)
        break
      case AgeRange.FORTY_ABOVE:
        this.filteredManagers = this.managers.filter(manager => manager.age >= 40)
        break
      default:
        break
    }
  }

  mounted () {
    fetch('https://www.mocky.io/v2/5d73bf3d3300003733081869')
    .then(response => response.json())
    .then((data) => {
      this.managers = data as Manager[]
      this.filteredManagers = [...this.managers]
      })
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .navbar{
    background-color: #faf9f4;
  }

  .navbar-brand{
    color: #534846;
  }

  hr.solid {
    border-top: 3px solid #bbb;
  }
}
</style>
