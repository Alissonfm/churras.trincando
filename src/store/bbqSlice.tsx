import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BBQ from 'models/bbq'

const MOCK: Array<BBQ> = [
  {
    name: 'Niver do Gui',
    description: 'Churras para comemorar o niver do Guilherme',
    date: '01/12/2020',
    suggestedValue: 20,
    guests: [
      {
        name: 'Alice',
        email: 'alice@teste.com.br',
        contribution: 20,
        paid: true,
      },
      {
        name: 'Beto',
        email: 'beto@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Diego B.',
        email: 'diego-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Ana',
        email: 'Ana-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Michele',
        email: 'michele@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Carolina',
        email: 'carolina-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Josiane',
        email: 'josiane@teste.com.br',
        contribution: 20,
        paid: true,
      },
    ],
  },
  {
    name: 'Niver do Gui',
    description: 'Churras para comemorar o niver do Guilherme',
    date: '01/12/2020',
    suggestedValue: 20,
    guests: [
      {
        name: 'Alice',
        email: 'alice@teste.com.br',
        contribution: 20,
        paid: true,
      },
      {
        name: 'Beto',
        email: 'beto@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Diego B.',
        email: 'diego-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Ana',
        email: 'Ana-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Michele',
        email: 'michele@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Carolina',
        email: 'carolina-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Josiane',
        email: 'josiane@teste.com.br',
        contribution: 20,
        paid: true,
      },
    ],
  },
  {
    name: 'Niver do Gui',
    description: 'Churras para comemorar o niver do Guilherme',
    date: '01/12/2020',
    suggestedValue: 20,
    guests: [
      {
        name: 'Alice',
        email: 'alice@teste.com.br',
        contribution: 20,
        paid: true,
      },
      {
        name: 'Beto',
        email: 'beto@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Diego B.',
        email: 'diego-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Ana',
        email: 'Ana-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Michele',
        email: 'michele@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Carolina',
        email: 'carolina-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Josiane',
        email: 'josiane@teste.com.br',
        contribution: 20,
        paid: true,
      },
    ],
  },
  {
    name: 'Niver do Gui',
    description: 'Churras para comemorar o niver do Guilherme',
    date: '01/12/2020',
    suggestedValue: 20,
    guests: [
      {
        name: 'Alice',
        email: 'alice@teste.com.br',
        contribution: 20,
        paid: true,
      },
      {
        name: 'Beto',
        email: 'beto@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Diego B.',
        email: 'diego-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Ana',
        email: 'Ana-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Michele',
        email: 'michele@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Carolina',
        email: 'carolina-b@teste.com.br',
        contribution: 20,
        paid: false,
      },
      {
        name: 'Josiane',
        email: 'josiane@teste.com.br',
        contribution: 20,
        paid: true,
      },
    ],
  },
];

interface BbqState {
  events: Array<BBQ>
}

const initialState: BbqState = {
  events: MOCK
}

const bbqSlice = createSlice({
  name: 'bbq',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<BBQ>) => {
      state.events.concat([action.payload])
    }
  }
})

export default bbqSlice.reducer