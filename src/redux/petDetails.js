import { createSlice } from "@reduxjs/toolkit";

// Rare assets import
import rareIcon from "assets/images/rare-icon.png";
import rareBg from "assets/images/rare-background.jpg";
import rhinocerusGif from "assets/images/rhinocerus-animation.gif";
import bearGif from "assets/images/bear-animation.gif";
import hippotamusGif from "assets/images/hippotamus-animation.gif";
import wolfGif from "assets/images/wolf-animation.gif";
import griffinGif from "assets/images/griffin-animation.gif";
import sharkGif from "assets/images/shark-animation.gif";

// Epic assets import
import epicIcon from "assets/images/epic-icon.png";
import epicBg from "assets/images/epic-background.jpg";
import kitsuneGif from "assets/images/kitsune-animation.gif";
import cerberusGif from "assets/images/cerberus-animation.gif";
import chimeraGif from "assets/images/chimera-animation.gif";
import centaurGif from "assets/images/centaur-animation.gif";

// Legendary assets import
import legendaryIcon from "assets/images/legendary-icon.png";
import legendaryBg from "assets/images/legendary-background.jpg";
import legendaryGif from "assets/images/phoenix-animation.gif";
import unicornGif from "assets/images/unicorn-animation.gif";

import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890", 5);

const initialState = {
  data: [
    {
      petId: nanoid(),
      petName: "Rhinoceros",
      hp: 6500,
      attack: 525,
      defence: 465,
      speed: 100,
      type: "rare",
      typeIcon: rareIcon,
      bg: rareBg,
      gif: rhinocerusGif,
    },
    {
      petId: nanoid(),
      petName: "Bear",
      hp: 6500,
      attack: 475,
      defence: 480,
      speed: 90,
      type: "rare",
      typeIcon: rareIcon,
      bg: rareBg,
      gif: bearGif,
    },
    {
      petId: nanoid(),
      petName: "Hippotamus",
      hp: 6500,
      attack: 425,
      defence: 470,
      speed: 90,
      type: "rare",
      typeIcon: rareIcon,
      bg: rareBg,
      gif: hippotamusGif,
    },
    {
      petId: nanoid(),
      petName: "Wolf",
      hp: 5800,
      attack: 500,
      defence: 400,
      speed: 100,
      type: "rare",
      typeIcon: rareIcon,
      bg: rareBg,
      gif: wolfGif,
    },
    {
      petId: nanoid(),
      petName: "Griffin",
      hp: 6300,
      attack: 575,
      defence: 425,
      speed: 115,
      type: "rare",
      typeIcon: rareIcon,
      bg: rareBg,
      gif: griffinGif,
    },
    {
      petId: nanoid(),
      petName: "Shark",
      hp: 6450,
      attack: 600,
      defence: 430,
      speed: 105,
      type: "rare",
      typeIcon: rareIcon,
      bg: rareBg,
      gif: sharkGif,
    },

    {
      petId: nanoid(),
      petName: "Kitsune",
      hp: 7500,
      attack: 600,
      defence: 445,
      speed: 110,
      type: "epic",
      typeIcon: epicIcon,
      bg: epicBg,
      gif: kitsuneGif,
    },
    {
      petId: nanoid(),
      petName: "Cerberus",
      hp: 7500,
      attack: 625,
      defence: 510,
      speed: 110,
      type: "epic",
      typeIcon: epicIcon,
      bg: epicBg,
      gif: cerberusGif,
    },
    {
      petId: nanoid(),
      petName: "Chimera",
      hp: 7500,
      attack: 775,
      defence: 450,
      speed: 110,
      type: "epic",
      typeIcon: epicIcon,
      bg: epicBg,
      gif: chimeraGif,
    },
    {
      petId: nanoid(),
      petName: "Centaur",
      hp: 9000,
      attack: 550,
      defence: 525,
      speed: 95,
      type: "epic",
      typeIcon: epicIcon,
      bg: epicBg,
      gif: centaurGif,
    },

    {
      petId: nanoid(),
      petName: "Phoenix",
      hp: 7500,
      attack: 850,
      defence: 450,
      speed: 120,
      type: "legendary",
      typeIcon: legendaryIcon,
      bg: legendaryBg,
      gif: legendaryGif,
    },
    {
      petId: nanoid(),
      petName: "Unicorn",
      hp: 10000,
      attack: 600,
      defence: 450,
      speed: 105,
      type: "legendary",
      typeIcon: legendaryIcon,
      bg: legendaryBg,
      gif: unicornGif,
    },
  ],
  filteredArray: [],
  newArr: [],
  rangeActions: [],
  ranges: {
    attack: 0,
    defence: 0,
    hp: 0,
    speed: 0,
  },
  checkboxes: {
    rare: false,
    epic: false,
    legendary: false,
  },
};

initialState["data"] = initialState["data"].sort(() => Math.random() - 0.5);
initialState["filteredArray"] = initialState["data"];

export const petDetails = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterPets: (state, action) => {
      if (action.payload === "rare") {
        state.filteredArray = [
          ...state.data.filter((pet, index) => pet.type == "rare"),
        ];
        state.checkboxes[action.payload] = true;
      } else if (action.payload === "epic") {
        state.filteredArray = state.data.filter(
          (pet, index) => pet.type === "epic"
        );
        state.checkboxes[action.payload] = true;
      } else if (action.payload === "legendary") {
        state.filteredArray = state.data.filter(
          (pet, index) => pet.type === "legendary"
        );
        state.checkboxes[action.payload] = true;
      } else if (action.payload == "all") {
        state.filteredArray = state.data;
        state.checkboxes = {
          rare: false,
          epic: false,
          legendary: false,
        };
      }
    },
    filterPetsByRange: (state, action) => {},

    setRangeValue: (state, action) => {
      const { attack, defence, hp, speed } = state.ranges;

      state.ranges[action.payload.name] = parseInt(action.payload.value);

      if (state.ranges[action.payload.name] === 0) {
        state.filteredArray = state.data;
        return;
      }

      state.filteredArray = state.data.filter(
        (pet, index) => pet[action.payload.name] <= action.payload.value
      );
    },
  },
});

export const { filterPets, filterPetsByRange, setRangeValue } =
  petDetails.actions;

export default petDetails.reducer;
