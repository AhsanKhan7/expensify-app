import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'
import moment from 'moment'

test('should text filter run', () => {
    const action = setTextFilter('none')
    expect(action).toEqual({
        type: 'SET-TEXT-FILTER',
        text: 'none'
    })
})

test('should text filter run again', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type :'SET-TEXT-FILTER',
        text: ''
    })
})

test('should start date run', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET-START-DATE',
        startDate: moment(0)
    })
})

test('should end date run', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET-END-DATE',
        endDate: moment(0)
    })
})

test('should sorting amount run', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT-BY-AMOUNT'
    })
})

test('should sorting date run', () => {
    expect(sortByDate()).toEqual({ type: 'SORT-BY-DATE' })
})

