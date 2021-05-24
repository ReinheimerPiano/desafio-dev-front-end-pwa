/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import axios from 'axios';

const setLocalStorage = (data) => {
  window.localStorage.setItem('dataPopulateApp', JSON.stringify(data));
  return true;
};

const checkLocalStorage = () => {
  const respJson = window.localStorage.getItem('dataPopulateApp');
  return !!respJson;
};

const returnLocalStorage = () => {
  const respJson = window.localStorage.getItem('dataPopulateApp');
  const resp = JSON.parse(respJson);
  return resp;
};
//  Correção de erros em títulos e tamanho de svg, como são
//  inseridos com v-html, fica mehor fazer esta alteração aqui
const fixMenu = async (menu) => {
  const index = menu.length - 1;
  const m = menu;
  m[index].icone = await m[index].icone.replaceAll('1em', '24px');
  m.forEach((e) => {
    switch (e.titulo) {
      case 'Fichas Técnicas':
        e.titulo = 'Produtos';
        break;
      case 'Canaltech Ofertas':
        e.titulo = 'Ofertas';
        break;
      case 'Prêmio Canaltech':
        e.titulo = 'Prêmio CT';
        break;
      default:
        break;
    }
  });
  return m;
};

const state = {
  destaques: [],
  produtos: [],
  videos: [],
  noticias: [],
  menu: [],

};

const getters = {
  allDestaques: (state) => state.destaques,
  allProdutos: (state) => state.produtos,
  allVideos: (state) => state.videos,
  allNoticias: (state) => state.noticias,
  allMenu: (state) => state.menu,
};

const actions = {
  async fetchData({ commit }) {
    let result = {};

    if (checkLocalStorage()) {
      result = returnLocalStorage();
    } else {
      const token = process.env.VUE_APP_API_KEY;
      const path = '/api/teste/front/';
      const resourseUri = `${path}${token}`;
      const response = await axios.get(`${resourseUri}`);
      result = response.data.data;
      result.menu = await fixMenu(result.menu);
      setLocalStorage(result);
    }

    commit('setDestaques', result.destaque);
    commit('setProdutos', result.produtos);
    commit('setVideos', result.videos);
    commit('setNoticias', result.noticias);
    commit('setMenu', result.menu);
  },
};

const mutations = {
  setDestaques: (state, destaques) => state.destaques = destaques,
  setProdutos: (state, produtos) => state.produtos = produtos,
  setVideos: (state, videos) => state.videos = videos,
  setNoticias: (state, noticias) => state.noticias = noticias,
  setMenu: (state, menu) => state.menu = menu,
};

export default {
  state, getters, actions, mutations,
};
