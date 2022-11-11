import React from 'react';

import { ListItemAction } from './LitsItemAction';

export default {
    title: 'INSPIRE/ListItemAction',
    component: ListItemAction,
  };
  
  const Template = (args) => <ListItemAction {...args} />;

  export const OneItem = Template.bind({});

  OneItem.args = {
    children: <p>Labas vakaras</p>,
  };