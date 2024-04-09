<template>
  <div class="first" v-if="login">
    <form class="form" @submit.prevent="onSubmit">
      <h1>Login</h1>
      <label for="email"
        ><span>E-mail</span>
        <input type="email" id="email" v-model="user.email"
      /></label>

      <label for="password">
        <span>Senha</span>
        <input type="password" id="password" v-model="user.password"
      /></label>
      <button type="submit">Entrar</button>
      <button @click.prevent="onVisible">Não tenho login</button>
    </form>
  </div>

  <div class="second" v-if="logout">
    <form class="form" @submit.prevent="onSign">
      <h1>Cadastrar</h1>
      <label for="email">
        <span>E-mail</span> <input type="email" id="email" v-model="user.email"
      /></label>

      <label for="password"
        ><span>Senha</span>
        <input type="password" id="password" v-model="user.password"
      /></label>
      <button type="submit">Cadastrar</button>
      <button @click.prevent="onVisible">Ja sou cadastrado</button>
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
      logout: false,
    };
  },
  methods: {
    onSubmit() {
      if (!this.user.email || !this.user.password) {
        console.log("Insira email e senha");
        return;
      } else {
        console.log("Login " + this.user.email, "Senha " + this.user.password);
      }
    },
    onSign() {
      if (!this.user.email || !this.user.password) {
        alert("Email ou senha invalidos");
        return;
      } else {
        const newUser = {
          email: this.user.email,
          password: this.user.password,
        };
        this.$store.commit("storeUser", newUser);
        this.user.email = "";
        this.user.password = "";
        this.login = true;
        this.logout = false;
      }
    },
    onVisible() {
      if (this.login) {
        this.login = false;
        this.logout = true;
      } else {
        this.login = true;
        this.logout = false;
      }
    },
  },
};
</script>

<style scoped>
.first {
  display: inline-block;
  background-color: white;
  box-shadow: 0 19px 38px black, 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  width: 40%;
}

.second {
  display: inline-block;
  background-color: white;
  box-shadow: 0 19px 38px black, 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  width: 40%;
}

input,
button {
  border: none;
  outline: none;
  background: none;
}

h1 {
  color: #000;
  padding-top: 10px;
  font-size: 30px;
}

.form {
  padding: 50px 30px;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1, 2s ease-in-out;
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

button {
  display: block;
  margin: 20px auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  background-color: #505;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: rgb(126, 0, 126);
}
</style>
