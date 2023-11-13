import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    pizzas: <Info[]>[]
}

const Pizzas = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        addNew: (state, action: PayloadAction<{ info: Info }>) => {
            const filter = state.pizzas.every(p => p.title !== action.payload.info.title)
            if (filter) {
                state.pizzas = [...state.pizzas, action.payload.info]
            }
        },
        deletePizza: (state, action: PayloadAction<{ info: Info }>) => {
            state.pizzas = state.pizzas.filter(p => p.title !== action.payload.info.title)
        }
    }
})


export const PizzaReducer = Pizzas.reducer

export const { addNew,deletePizza } = Pizzas.actions