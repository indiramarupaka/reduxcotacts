const initialContacts={
    contacts: [{name: 'Indira', phoneNumber: '1234512345', email: "indira@gamil"}]

    };

export  const contactReducer= ( state = initialContacts, action) => {
    switch (action.type){
    case "GET_ALL_CONTACTS":
    return {...state}
    default:
        return state;
    }


};