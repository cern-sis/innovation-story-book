import React from 'react';

import { SearchBox } from './SearchBox';

export default {
    title: 'INSPIRE/SearchBox',
    component: SearchBox,
  };
  
  const Template = (args) => <SearchBox {...args} />;

  export const Example = Template.bind({});
