import React from 'react'
import { shallow } from 'enzyme' 
import dashboardPage from '../../components/Dashboard'

test('should dashboard component run', () => {
    const wrapper = shallow(<dashboardPage />)
    expect(wrapper).toMatchSnapshot() 
})