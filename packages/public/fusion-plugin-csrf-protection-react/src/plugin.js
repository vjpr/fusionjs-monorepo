/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import csrfProtection from 'fusion-plugin-csrf-protection';
import {ProviderPlugin} from 'fusion-react';

export default ProviderPlugin.create('fetch', csrfProtection);
