import React from 'react';
import Portal from '../portal';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';

test('propTypes.children should be required', function () {
  expect(Portal.propTypes.children).toEqual(PropTypes.element.isRequired);
});