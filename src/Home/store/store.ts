import { configureStore } from '@reduxjs/toolkit';
import { PizzaReducer } from './Slice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        pizza: PizzaReducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;