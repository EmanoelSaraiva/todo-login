<template>
  <v-container v-if="login">
    <form @submit.prevent="onSubmit">
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <h1>Login</h1>
        </v-col>
        <v-col cols="12">
          <label for="email"
            ><span>E-mail</span>
            <input type="text" id="email" v-model="user.email"
          /></label>
        </v-col>
        <v-col cols="12">
          <label for="password">
            <span>Senha</span>
            <input type="password" id="password" v-model="user.password"
          /></label>
        </v-col>
      </v-row>
      <v-btn-group>
        <v-btn type="submit" color="#505">Entrar</v-btn>

        <v-btn @click.prevent="onVisible" color="#505">Não tenho login</v-btn>
      </v-btn-group>
    </form>
  </v-container>

  <div class="second" v-else>
    <form class="form" @submit.prevent="onSign">
      <h1>Cadastrar</h1>
      <label for="email">
        <span>E-mail</span> <input type="email" id="email" v-model="user.email"
      /></label>

      <label for="password"
        ><span>Senha</span>
        <input type="password" id="password" v-model="user.password"
      /></label>
      <v-btn type="submit">Cadastrar</v-btn>
      <v-btn @click.prevent="onVisible">Ja sou cadastrado</v-btn>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      login: true,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const result = await this.$store.dispatch("login", this.user);

        if (result === 200) {
          this.$router.push("/TodosView");
        }
      } catch (error) {
        return error;
      }
    },
    onSign() {
      if (!this.user.email || !this.user.password) {
        alert("Email ou senha invalidos");
        return;
      } else {
        this.$store.commit("storeUser", this.user);
        this.user.email = "";
        this.user.password = "";
        this.login = true;
      }
    },
    onVisible() {
      this.login = !this.login;
    },
  },
};
</script>

<style scoped>
.first {
  display: inline-block;
  background-color: rgba(252, 252, 252, 0.493);
  box-shadow: 0 19px 38px black, 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  width: 40%;
}

.second {
  display: inline-block;
  background-color: rgba(252, 252, 252, 0.493);
  box-shadow: 0 19px 38px black, 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  width: 40%;
}

input {
  border: none;
  outline: none;
  background: none;
}

h1 {
  color: #000;
  padding-top: 10px;
  font-size: 30px;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 14px;
  font-weight: 600;
  color: #505;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(109, 93, 93, 0.4);
  text-align: center;
  font-family: "Nunito", sans-serif;
}
</style>
