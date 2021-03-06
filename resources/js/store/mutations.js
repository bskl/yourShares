import { has, lowerFirst, unset } from 'lodash';
import { TRANSACTION_TYPES_MAP, DEFAULT_SNACKBAR } from './constants.js';

export default {
  START_LOADING(state, payload) {
    state.loading.push(payload);
  },
  STOP_LOADING(state, payload) {
    state.loading = state.loading.filter(l => l != payload);
  },
  SET_SHOW_MODAL(state, data) {
    state.showModal = data;
  },
  LOGGED_IN(state) {
    localStorage.setItem('is_logged_in', true);
    state.isLoggedIn = true;
  },
  LOGGED_OUT(state) {
    localStorage.clear();
    state.isLoggedIn = false;
  },
  SET_USER(state, data) {
    state.user = data;
    localStorage.setItem('locale', JSON.stringify(data.locale));
  },
  SET_LOCALE(state, locale) {
    state.user.locale = locale;
    localStorage.setItem('locale', JSON.stringify(locale));
  },
  SET_PORTFOLIOS(state, data) {
    state.portfolios = data;
  },
  ADD_PORTFOLIO(state, portfolio) {
    state.portfolios.push(portfolio);
  },
  UPDATE_PORTFOLIO(state, { index, portfolio }) {
    state.portfolios[index] = portfolio;
  },
  UPDATE_PORTFOLIO_BY_KEY(state, { index, portfolio }) {
    for (const key in portfolio) {
      state.portfolios[index][key] = portfolio[key];
    }
  },
  DESTROY_PORTFOLIO(state, index) {
    state.portfolios.splice(index, 1);
  },
  ADD_SHARE(state, { index, data }) {
    state.portfolios[index].shares.push(data);
  },
  UPDATE_SHARE(state, { portfolioIndex, shareIndex, share }) {
    for (const key in share) {
      state.portfolios[portfolioIndex].shares[shareIndex][key] = share[key];
    }
  },
  DESTROY_SHARE(state, { portfolioIndex, index }) {
    state.portfolios[portfolioIndex].shares.splice(index, 1);
  },
  ADD_TRANSACTIONS(state, { portfolioIndex, index, transactions }) {
    state.portfolios[portfolioIndex].shares[index]['transactions'] = transactions;
  },
  ADD_ITEM_DETAILS(state, { index, type, year, data }) {
    if (typeof index === 'object') {
      if (typeof year === 'undefined') {
        state.portfolios[index.portfolioIndex].shares[index.index][type] = data;
      } else {
        if (!has(state.portfolios[index.portfolioIndex].shares[index.index], `${type}ByYear`)) {
          state.portfolios[index.portfolioIndex].shares[index.index][`${type}ByYear`] = {};
        }
        state.portfolios[index.portfolioIndex].shares[index.index][`${type}ByYear`][year] = data;
      }
    }
    if (typeof index === 'number') {
      if (typeof year === 'undefined') {
        state.portfolios[index][type] = data;
      } else {
        if (!has(state.portfolios[index], `${type}ByYear`)) {
          state.portfolios[index][`${type}ByYear`] = {};
        }
        state.portfolios[index][`${type}ByYear`][year] = data;
      }
    }
  },
  DELETE_ITEM_DETAILS(state, { portfolioIndex, shareIndex, transaction }) {
    const type = lowerFirst(TRANSACTION_TYPES_MAP[transaction.type]);
    const year = transaction.date_at.split('.')[2];

    delete state.portfolios[portfolioIndex][type];
    delete state.portfolios[portfolioIndex].shares[shareIndex][type];
    if (has(state.portfolios[portfolioIndex], `${type}ByYear`)) {
      delete state.portfolios[portfolioIndex][`${type}ByYear`][year];
    }
    if (has(state.portfolios[portfolioIndex].shares[shareIndex], `${type}ByYear`)) {
      delete state.portfolios[portfolioIndex].shares[shareIndex][`${type}ByYear`][year];
    }
  },
  SET_SHOW_SNACKBAR(state, data) {
    state.showSnackbar = data;
  },
  SET_SNACKBAR(state, data) {
    state.snackbar = Object.assign({}, {
        ...DEFAULT_SNACKBAR,
      }, data);
  },
  SET_ERRORS(state, data) {
    state.errors = Object.assign({}, data);
  },
  UNSET_ERROR(state, data) {
    unset(state.errors, data);
  },
}
