// SET-TEXT-FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET-TEXT-FILTER',
    text
})

// SORT-BY-AMOUNT
export const sortByAmount = () => ({
    type: 'SORT-BY-AMOUNT'
})

// SORT-BY-DATE
export const sortByDate = () => ({
    type: 'SORT-BY-DATE'
})

// SET-START-DATE
export const setStartDate = (startDate) => ({
    type: 'SET-START-DATE',
    startDate
})

// SET-END-DATE
export const setEndDate = (endDate) => ({
    type: 'SET-END-DATE',
    endDate
})
