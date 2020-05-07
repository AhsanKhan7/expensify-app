import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('Should render login page', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should call login when click button', () => {
    const startLogin = jest.fn()
    const Wrapper = shallow(<LoginPage startLogin={startLogin}/>)
    Wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})