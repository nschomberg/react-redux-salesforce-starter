import { util } from 'react-lightning-design-system';
import { init } from 'force-vrolayer';
import { SF_APP_CLIENT_ID, SF_APP_REDIRECT_URL } from 'APP_CONFIG';
import remoteObject from 'remoteObjects';
import './index.scss';

import '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';


export default () => {
  util.setAssetRoot(`${(window['__STATIC_RESOURCE_ZIP'] || '') + '/assets'}`);

  init({
    clientId: SF_APP_CLIENT_ID,
    redirectUri: SF_APP_REDIRECT_URL,
    remoteObject,
    accessToken: window['__ACCESS_TOKEN'] || null,
  });
}
