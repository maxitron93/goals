const defaultAGoalsState = [
  {
    id: 1,
    achieveBy: 3000,
    title: "Get promoted",
    description: "I want to get promoted before the end of the year",
    textColor: "green",
    boxColor: "grey" 
  },
  {
    id: 2,
    achieveBy: 1000,
    title: "Loose weight",
    description: "I want to loose weight before summer starts",
    textColor: "red",
    boxColor: "blue"
  }
]

const goalsReducer = (state = defaultAGoalsState, action) => {
  switch (action.type) {
    
    default: 
      return state
  }
}

export { goalsReducer }