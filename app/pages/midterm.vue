<template>
  <div>

    <h1><v-icon>mdi-calculator</v-icon>Calculator</h1>

  <v-card width="500">
    <v-card-text>
      <v-form>
        <v-radio-group v-model="operator" inline>
          <v-radio label="Addition" value="add"></v-radio>
          <v-radio label="Subtraction" value="subtract"></v-radio>
          <v-radio label="Multiplication" value="multiply"></v-radio>
          <v-radio label="Division" value="divide"></v-radio>
        </v-radio-group>

        <h2>Selected Operator: {{ operator }}</h2>
        <v-text-field v-model="firstNumber" label="Enter 1st Number" type="number"></v-text-field>
        <v-text-field v-model="secondNumber" label="Enter 2nd Number" type="number"></v-text-field>
        <v-text-field v-model="total" label="Total" readonly></v-text-field>

        <!-- <v-btn color="primary" @click="calculate" block>Calculate</v-btn> -->
        <v-btn rounded="xl" size="large" color="primary" @click="calculate" block>Calculate</v-btn>
  
      </v-form>
    </v-card-text>
  </v-card>


  </div>
</template>

<script setup>
import { ref } from 'vue'

const firstNumber = ref(0)
const secondNumber = ref(0)
const total = ref(0)
const operator = ref(null)

function calculate() {
  const num1 = Number(firstNumber.value)
  const num2 = Number(secondNumber.value)

  if (operator.value === 'add') {
    total.value = num1 + num2
  } else if (operator.value === 'subtract') {
    total.value = num1 - num2
  } else if (operator.value === 'multiply') {
    total.value = num1 * num2
  } else if (operator.value === 'divide') {
    total.value = num2 !== 0 ? num1 / num2 : 'Cannot divide by 0'
  } else {
    total.value = 'Select an operation'
  }
}
</script>

<style>
</style>


