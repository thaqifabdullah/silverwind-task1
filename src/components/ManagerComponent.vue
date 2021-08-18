<template>
<div class="card w-100 h-100 shadow-sm">
    <div class="card-body row">
        <div class="col-md-3">
            <img src="../assets/userphoto-prime1.jpg" alt="" class="w-100 avatar">
        </div>
        <div class="col-md-9">
            <div class="fs-3 fw-bold text-uppercase">{{manager.name}}</div>
            <div>
                <span class="fw-light">Email:</span><span class="fw-bold">{{manager.email}}</span>
            </div>
            <div>
                <span class="fw-light">Mobile:</span><span class="fw-bold">{{manager.phone}}</span>
            </div>
            <div>
                <span class="fw-light">Company:</span><span class="fw-bold">{{manager.company}}</span>
            </div>
            <div>
                <span class="fw-light">Address:</span><span class="fw-bold">{{manager.address.suite}}, {{manager.address.street}}, {{manager.address.zipcode}} {{manager.address.city}}</span>
            </div>
            <div>
                <span class="fw-light">Website:</span><span class="fw-bold">{{manager.website}}</span>
            </div>
            <div>
                <span class="fw-light">Age:</span><span class="fw-bold">{{manager.age}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { AgeRange } from '@/enums/enumAgeRange'
import { defineComponent, PropType } from 'vue'
import { Manager } from '../types/types'
export default defineComponent({
    name: 'ManagerComponent',
    props: {
        manager: Object as PropType<Manager>
    },
    methods: {
        getAgeRangeType () {
            if (this.manager?.age && this.manager?.age < 20) {
                return AgeRange.TWENTY_BELOW
            } else if (this.manager?.age && this.manager?.age > 20 && this.manager?.age < 40) {
                return AgeRange.TWENTYONE_THIRTYNINE
            } else if (this.manager?.age && this.manager?.age >= 40) {
                return AgeRange.FORTY_ABOVE
            }
        }
    }
})
</script>

<style lang="scss">
    .avatar {
        border-radius: 50%;
    }
</style>
