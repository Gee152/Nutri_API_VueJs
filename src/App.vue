<template>
  <div id="app">
    <header>
      <strong>Vue Nutri</strong>
    </header>

    <div v-if="loading">
      Carregando...
    </div>

  <article v-for="item in nutri" :key="item.id" class="post">
    <h2 class="titulo">{{ item.titulo }}</h2>
    <img :src="item.capa" />
    <span class="categoria">{{ item.categoria }}</span>
    <p class="subtitulo">{{ item.subtitulo }}</p>
    <a href="#" class="btn"> Acessar </a>
  </article>

  </div>
</template>

<script>
import api from './services/api';

export default {
  name: 'App',

  data(){
    return{
      nutri: [],
      loading: true
    }
  },

  async created(){
    const response = await api.get('https://sujeitoprogramador.com/rn-api/?api=posts');
    this.nutri = response.data;
    this.loading = false;
  }
}
</script>

<style scoped>

  #app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

  }

  header{
    display: flex;
    justify-content: center;
    margin: 0.5% 1% 0.5% 1%;
    align-items: center;
    font-size: 35px;
    width: 99%;
    height: 100%;
    background-color: #b8e994;
    color: #eee;
    border: 1px solid;
    border-color: rgb(251, 147, 55);
    border-radius: 4px;
  }

  .post{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    background-color: #b8e994;
    border-radius: 10px;
    margin: 8px;
    padding: 10px;

  }

  .titulo{
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .categoria{
    padding-top: 15px;
    font-weight: bold;
  }

  .btn {
    height: 40px;
    width: 80%;
    background: none;
    border-radius: 5px;
    border: 2px solid #6a89cc;
    color: #6a89cc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.6s;
  }

  .btn:hover{
    background: #6a89cc;
    color: white;
  }
</style>