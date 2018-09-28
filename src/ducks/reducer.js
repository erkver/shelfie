import axios from "axios";

const GET_ITEMS = "GET_ITEMS";
const DELETE_ITEM = "DELETE_ITEM";
const HANDLE_NAME_INPUT = "HANDLE_NAME_INPUT";
const HANDLE_PRICE_INPUT = "HANDLE_PRICE_INPUT";
const HANDLE_IMG_INPUT = "HANDLE_IMG_INPUT";
const CLEAR_INPUTS = "CLEAR_INPUTS";
const ADD_ITEM = "ADD_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const HANDLE_TOGGLE = "HANDLE_TOGGLE";
const GET_ONE = "GET_ONE";

export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get('/api/items')
  };
}

export function deleteItem(product_id) {
  return {
    type: DELETE_ITEM,
    payload: axios.delete(`/api/item/${product_id}`)
  };
}

export function handleNameInput(name) {
  return {
    type: HANDLE_NAME_INPUT,
    payload: name
  }
}

export function handlePriceInput(price) {
  return {
    type: HANDLE_PRICE_INPUT,
    payload: price
  }
}

export function handleImgInput(image_url) {
  return {
    type: HANDLE_IMG_INPUT,
    payload: image_url
  }
}

export function clearInputs() {
  return {
    type: CLEAR_INPUTS,
    payload: ""
  }
}

export function addItem(name, price, image_url) {
  return {
    type: ADD_ITEM,
    payload: axios.post('/api/item', { name, price, image_url })
  }
}

export function editItem(product_id, name, price, image_url) {
  return {
    type: EDIT_ITEM,
    payload: axios.put(`/api/item/${product_id}`, { name, price, image_url })
  }
}

export function handleToggle() {
  return {
    type: HANDLE_TOGGLE,
    payload: !this.initalState.toggle
  }
}

export function getOne(product_id) {
  return {
    type: GET_ONE,
    payload: axios.get(`/api/item/${product_id}`)
  }
}

const initalState = {
  name: "",
  price: 0,
  image_url: "",
  toggle: false,
  items: [],
  isLoading: false
};

export default function reducer(state = initalState, action){
  switch(action.type) {
    case `${GET_ITEMS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    case `${DELETE_ITEM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    case HANDLE_NAME_INPUT:
      return {
        ...state,
        name: action.payload
      };
    case HANDLE_PRICE_INPUT:
      return {
        ...state,
        price: action.payload
      };
    case HANDLE_IMG_INPUT: 
      return {
        ...state,
        image_url: action.payload
      };
    case CLEAR_INPUTS:
      return {
        ...state,
        name: "",
        price: 0,
        image_url: ""
      };
    case `${ADD_ITEM}_FULFILLED`:
      return {
        ...state,
        items: action.payload.data
      }
    case `${EDIT_ITEM}_FULFILLED`:
      return {
        ...state,
        items: action.payload.data
      }
    case HANDLE_TOGGLE:
      return {
        ...state,
        toggle: action.payload
      };
    case `${GET_ONE}_FULFILLED`:
      return {
        ...state,
        name: action.payload.data.item,
        price: action.payload.data,
        image_url: action.payload.data
      };
    default:
      return state;
  }
}