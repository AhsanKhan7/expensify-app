import React from 'react'
import ExpensesListItem from '../../components/expenseListItem'
import expenses from '../fixtures/expense'
import { shallow } from 'enzyme'


test('should render expense list items render', () => {
    const wrapper = shallow(<ExpensesListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})