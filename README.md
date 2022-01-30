# Advance Hooks and Custom Hooks
It is to demostrate how few advanced hooks works like useRef, forwardRef, useCallback, useMemo and few custom hooks i.e useLocalStorage and useUpdateLogger

## useRef
1) It is mainly used to store reference of element
2) Changes to useRef doesn't re-render

## useMemo
1) It is used to memorise the previous values i.e caching data so we don't recompute it for every single render 
2) It is mainly used when functions we are calling is incredibly slow
3) It is also used for referencial equivalent

## useCallback
1) It is used to create and store a function when ever there is a change in function defination
2) It is mainly used when creation of funtion in taking time and for maintaining referential equality

## forwardRef
1) When we want to pass reference to html element through react component

## useLocalStorage
I have used useState to implement it. It tries to get value if there is any value in localStorage and stores it in state variable if there is no value already present then it stores inital value and also if there is any change in value of localStorage variable it is stored to localStorage.

## useUpdateLogger
When ever the value which is passed to updateLogger changes this hook logs the changed value in console
