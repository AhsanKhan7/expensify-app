import filters from '../../reducers/filter'
import moment from 'moment'

test('should filter func run', () => {
    const state = filters(undefined, {type: '@@init'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('sort by amount', () => {
    const state = filters(undefined, { type: 'SORT-BY-AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('sort by date', () => {
    const state = filters(undefined, { type: 'SORT-BY-DATE' })
    expect(state.sortBy).toEqual('date')
})

test('should text filter run', () => {
    const text = 'this is my text'
    const action = {type: 'SET-TEXT-FILTER',
                    text }
    const state = filters(undefined, action)
    expect(state.text).toEqual(text)
})

test('filter startDate', () => {
    const startDate = moment()
    const action = {
        type: 'SET-START-DATE',
        startDate
    }
    const result = filters(undefined, action)
    expect(result.startDate).toEqual(startDate)
})

test('filter end date', () => {
    const endDate = moment()
    const action = {
        type: 'SET-END-DATE',
        endDate
    }
    const result = filters(undefined, action)
    expect(result.endDate).toEqual(endDate)
})




