<template>
  <v-card>
    <v-card-text>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
        <v-row>
          <v-col cols="4">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                v-model="password"
                label="Password"
                required
            ></v-text-field>
          </v-col>
          <v-row>
            <v-spacer/>
            <v-col cols="4" class="mr-2">
              <v-btn @click="join()" color="#3E6189" large :disabled="!valid">
                <v-icon>mdi-account-plus</v-icon>
                Join
              </v-btn>
              <v-btn @click="reset" class="ml-2" large>
                reset
              </v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "LoginForm",
  data() {
    return {
      valid: true,
      email: "",
      password: "",

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    ...mapActions('user', ['loginUser', 'loginUserWithToken']),
    join() {
      if (!this.$refs.form.validate()) {
        alert("Please complete the login form.")
        return;
      }

      this.loginUser({
        email: this.email,
        password: this.password,
        createdAt: this.dayjs()
      }).then(() => this.$router.push({name: 'lobby'})).catch(console.error);
    },
    reset() {
      this.$refs.form.reset()
    },
  },
  async mounted() {
    if (process.env.NODE_ENV !== 'production') {
      this.email = process.env.VUE_APP_EMAIL
      this.password = process.env.VUE_APP_PSWD
    }
  }
}
</script>

<style scoped>

</style>
