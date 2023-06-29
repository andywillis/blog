export const initialState = {
  journal: [],
  links: [],
  pageLimit: 4,
  tagCloud: {
    visible: false,
    height: '0px'
  }
};

export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {

    case 'storeJournal': {
      return {
        ...state,
        journal: payload
      };
    }

  }

}
