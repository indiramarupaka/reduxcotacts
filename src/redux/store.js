import { createStore } from "redux";
import {contactReducer} from './reducer/contactsR';

export const store= createStore(contactReducer);