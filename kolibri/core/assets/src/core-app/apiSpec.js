/*
 * This file defines the API for the core Kolibri app.
 */

// module must be specified.
// module maps a module into the API, at the specified path.
// By default any module specified will be aliased to allow for require statements
// namespaced in a way analogous to the API spec below.
//
// These modules will now be referenceable as e.g.: import logger from 'kolibri.lib.logging';
//
// N.B. You cannot use keys that require quotation marks in this object.
// e.g. 'content-icon' (although this can be used as a value in module).

import vue from 'vue';
import vuex from 'vuex';
import seededshuffle from 'seededshuffle';
import UiAlert from 'keen-ui/src/UiAlert';
import tetherDrop from 'tether-drop';
import tetherTooltip from 'tether-tooltip';
import logging from '../logging';
import conditionalPromise from '../conditionalPromise';
import * as apiResource from '../api-resource';
import * as constants from '../constants';
import * as getters from '../state/modules/core/getters';
import * as actions from '../state/modules/core/actions';
import store from '../state/store';
import * as mappers from '../state/mappers';
import ContentRenderer from '../views/ContentRenderer';
import DownloadButton from '../views/ContentRenderer/DownloadButton';
import ProgressBar from '../views/ProgressBar';
import ContentIcon from '../views/ContentIcon';
import ProgressIcon from '../views/ProgressIcon';
import PermissionsIcon from '../views/PermissionsIcon';
import CoreBase from '../views/CoreBase';
import KModal from '../views/KModal';
import SideNav from '../views/SideNav';
import KButton from '../views/buttons-and-links/KButton';
import KExternalLink from '../views/buttons-and-links/KExternalLink';
import KRouterLink from '../views/buttons-and-links/KRouterLink';
import KTextbox from '../views/KTextbox';
import KNavbar from '../views/KNavbar';
import KNavbarLink from '../views/KNavbar/KNavbarLink';
import CoreLogo from '../views/CoreLogo';
import LanguageSwitcherList from '../views/language-switcher/LanguageSwitcherList';
import ImmersiveFullScreen from '../views/ImmersiveFullScreen';
import ElapsedTime from '../views/ElapsedTime';
import PointsIcon from '../views/PointsIcon';
import AuthMessage from '../views/AuthMessage';
import KBreadcrumbs from '../views/KBreadcrumbs';
import KCheckbox from '../views/KCheckbox';
import KRadioButton from '../views/KRadioButton';
import KFilterTextbox from '../views/KFilterTextbox';
import KGrid from '../views/KGrid';
import KGridItem from '../views/KGrid/KGridItem';
import KSelect from '../views/KSelect';
import router from '../router';
import responsiveWindow from '../mixins/responsive-window';
import responsiveElement from '../mixins/responsive-element';
import contentRendererMixin from '../mixins/contentRenderer';
import CoreFullscreen from '../views/CoreFullscreen';
import theme from '../styles/core-theme.scss';
import definitions from '../styles/definitions.scss';
import keenVars from '../keen-config/variables.scss';
import * as exams from '../exams/utils';
import * as validators from '../validators';
import * as serverClock from '../serverClock';
import * as resources from '../api-resources';
import * as i18n from '../utils/i18n';
import * as browser from '../utils/browser';
import UserType from '../utils/UserType';
import samePageCheckGenerator from '../utils/samePageCheckGenerator';
import AppBar from '../views/AppBar';
import CoreSnackbar from '../views/CoreSnackbar';
import CoreMenu from '../views/CoreMenu';
import CoreMenuOption from '../views/CoreMenu/CoreMenuOption';
import heartbeat from '../heartbeat';
import CoreTable from '../views/CoreTable';
import KDropdownMenu from '../views/KDropdownMenu';
import CoachContentLabel from '../views/CoachContentLabel';
import UserTypeDisplay from '../views/UserTypeDisplay';
import TechnicalTextBlock from '../views/AppError/TechnicalTextBlock';

// webpack optimization
import buttonAndLinkStyles from '../views/buttons-and-links/buttons.scss';
import CoreInfoIcon from '../views/CoreInfoIcon';
import * as contentNode from '../utils/contentNodeUtils';
import AttemptLogList from '../views/AttemptLogList';
import InteractionList from '../views/InteractionList';
import ExamReport from '../views/ExamReport';
import TextTruncator from '../views/TextTruncator';
import KLinearLoader from '../views/KLinearLoader';
import KCircularLoader from '../views/KCircularLoader';

import MultiPaneLayout from '../views/MultiPaneLayout';
import navComponents from '../utils/navComponents';
import CatchErrors from '../utils/CatchErrors';
import * as client from './client';
import urls from './urls';

export default {
  client,
  heartbeat,
  lib: {
    logging,
    vue,
    vuex,
    conditionalPromise,
    apiResource,
    seededshuffle,
    tetherDrop,
    tetherTooltip,
  },
  coreVue: {
    vuex: {
      constants,
      getters,
      actions,
      store,
      mappers,
    },
    components: {
      CoachContentLabel,
      ContentRenderer,
      DownloadButton,
      ProgressBar,
      ContentIcon,
      ProgressIcon,
      PermissionsIcon,
      CoreBase,
      KModal,
      SideNav,
      KButton,
      KExternalLink,
      KRouterLink,
      KTextbox,
      KNavbar,
      KNavbarLink,
      LanguageSwitcherList,
      ImmersiveFullScreen,
      ElapsedTime,
      PointsIcon,
      AuthMessage,
      KBreadcrumbs,
      KCheckbox,
      KRadioButton,
      KFilterTextbox,
      KGrid,
      KGridItem,
      KSelect,
      AppBar,
      CoreSnackbar,
      CoreMenu,
      CoreMenuOption,
      CoreTable,
      KDropdownMenu,
      CoreInfoIcon,
      AttemptLogList,
      InteractionList,
      ExamReport,
      TextTruncator,
      KLinearLoader,
      KCircularLoader,
      MultiPaneLayout,
      CoreFullscreen,
      CoreLogo,
      UiAlert,
      UserTypeDisplay,
      TechnicalTextBlock,
    },
    router,
    mixins: {
      responsiveWindow,
      responsiveElement,
      contentRendererMixin,
    },
  },
  resources,
  styles: {
    theme,
    definitions,
    keenVars,
    buttonAndLinkStyles,
  },
  urls,
  utils: {
    contentNode,
    browser,
    exams,
    validators,
    serverClock,
    i18n,
    navComponents,
    samePageCheckGenerator,
    CatchErrors,
    UserType,
  },
};
