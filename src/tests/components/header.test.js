import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('should header run', () => {
    const Wrapper = shallow(<Header />)
    expect(Wrapper).toMatchSnapshot()

    // expect(Wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})