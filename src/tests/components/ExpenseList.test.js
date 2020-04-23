import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/expensesList'
import expenses from '../fixtures/expense'

test('should expense list render', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot() 
})

test('should expense list render 2', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot() 
})
