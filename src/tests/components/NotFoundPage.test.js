import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../../components/NotFound'

test('should not found component run', () => {
    const wrapper =shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
})