import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

test('should header run', () => {
    const Wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(Wrapper).toMatchSnapshot()
})

test('should call logout when click button', () => {
    const startLogout = jest.fn()
    const Wrapper = shallow(<Header startLogout={startLogout}/>)
    Wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})