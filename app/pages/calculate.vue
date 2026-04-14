<template>
  <div>
    <h1> Calculate Page </h1>

    <v-card width="500">
      <v-card-text>
        <v-form>
          <v-text-field v-model="firstNumber" label="Enter 1st Number"></v-text-field>
          <v-text-field v-model="secondNumber" label="Enter 2nd Number"></v-text-field>
          <v-text-field v-model="total" label="Total"></v-text-field>
          <v-btn color="primary" @click="calculate" block>Calculate</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  const firstNumber = ref(0);
  const secondNumber = ref(0);
  const total = ref(0);

  const loading = ref(false)

//Function to Calculate the Total
function calculate() {
  
  total.value = Number(firstNumber.value) + Number(secondNumber.value)

}
</script>

<style>
</style>