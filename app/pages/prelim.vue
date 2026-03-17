<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-10">

      
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-12 text-center rounded-xl mb-6"
              color="#f2f2f2"
              elevation="1"
            >
              <div class="text-h2 font-weight-regular">A</div>
              <div class="text-subtitle-1">10 Points</div>
            </v-card>
          </v-col>
        </v-row>

       
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-row>

             
              <v-col cols="8">

               
                <v-card
                  class="pa-12 text-center rounded-xl mb-6"
                  color="#f2f2f2"
                  elevation="1"
                >
                  <div class="text-h3 font-weight-regular">B</div>
                  <div class="text-subtitle-1">10 Points</div>
                </v-card>

                
                <v-row>
                  <v-col
                    cols="4"
                    v-for="letter in ['C','D','E']"
                    :key="letter"
                  >
                    <v-card
                      class="pa-10 text-center rounded-xl"
                      color="#f2f2f2"
                      elevation="1"
                    >
                      <div class="text-h4 font-weight-regular">
                        {{ letter }}
                      </div>
                      <div class="text-subtitle-2">
                        10 Points
                      </div>
                    </v-card>
                  </v-col>
                </v-row>

              </v-col>

              
              <v-col cols="4">
                <v-card
                  class="pa-12 text-center rounded-xl d-flex flex-column justify-center fill-height"
                  color="#f2f2f2"
                  elevation="1"
                >
                  <div class="text-h3 font-weight-regular">F</div>
                  <div class="text-subtitle-1">10 Points</div>
                </v-card>
              </v-col>

            </v-row>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>