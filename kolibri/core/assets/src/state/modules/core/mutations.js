export default {
  CORE_SET_FACILITY_CONFIG(state, facilityConfig) {
    state.facilityConfig = facilityConfig;
  },
  CORE_SET_FACILITIES(state, facilities) {
    state.facilities = facilities;
  },
  // Makes settings for wrong credentials 401 error
  CORE_SET_LOGIN_ERROR(state, value) {
    state.loginError = value;
  },
  CORE_SET_SIGN_IN_BUSY(state, isBusy) {
    state.signInBusy = isBusy;
  },
  CORE_SET_PAGE_LOADING(state, value) {
    const update = { loading: value };
    if (value) {
      Object.assign(update, { pageSessionId: state.pageSessionId + 1 });
    }
    Object.assign(state, update);
  },
  CORE_SET_ERROR(state, error) {
    state.error = error;
  },
  CORE_BLOCK_CLICKS(state, blocked) {
    state.blockDoubleClicks = blocked;
  },
  SET_TOTAL_PROGRESS(state, progress) {
    state.totalProgress = progress;
  },
  INCREMENT_TOTAL_PROGRESS(state, progress) {
    state.totalProgress += progress;
  },
  SET_CORE_CHANNEL_LIST(state, channelList) {
    state.channels.list = channelList;
  },
};
