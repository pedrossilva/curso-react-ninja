'use strict'

import { storiesOf, action } from '@storybook/react'
import React from 'react'
import { Actions } from './index'

storiesOf('Actions', module)
  .add('Actions component', () => (
    <Actions
      getRepos={action('Get Repos')}
      getStarred={action('Get Starred')}
    />
  ))
