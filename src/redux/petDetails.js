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
      price: 100,
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
      price: 12,
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
      price: 300,
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
      price: 99,
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
      price: 299,
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
      price: 130,
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
      price: 55,
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
      price: 89,
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
      price: 432,
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
      price: 312,
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
      price: 31,
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
      price: 432,
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
    // filter by checkboxes
    filterPets: (state, action) => {
      state.checkboxes[action.payload.type] = action.payload.value;

      if (action.payload.value) {
        state.newArr = [
          ...state.newArr,
          ...state.data.filter((pet, index) => pet.type == action.payload.type),
        ];
      } else if (!action.payload.value) {
        state.newArr = [
          ...state.newArr.filter(
            (pet, index) => pet.type !== action.payload.type
          ),
        ];
      } else {
        console.log("true");
      }

      if (state.newArr.length === 0) {
        state.filteredArray = state.data;
        return;
      }

      state.filteredArray = state.newArr;
    },

    // filter of stats of pets
    filterStats: (state, action) => {
      console.log("jskhdajkhdjksadk");
      if (action.payload === "Highest HP") {
        state.filteredArray = state.filteredArray.sort((a, b) => b.hp - a.hp);
      }
      if (action.payload === "Lowest HP") {
        state.filteredArray = state.filteredArray.sort((a, b) => a.hp - b.hp);
      }
      if (action.payload === "Lowest Attack") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => a.attack - b.attack
        );
      }
      if (action.payload === "Highest Attack") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => b.attack - a.attack
        );
      }
      if (action.payload === "Lowest Defence") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => a.defence - b.defence
        );
      }
      if (action.payload === "Highest Defence") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => b.defence - a.defence
        );
      }
      if (action.payload === "Lowest Speed") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => a.speed - b.speed
        );
      }
      if (action.payload === "Highest Speed") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => b.speed - a.speed
        );
      }
      if (action.payload === "Lowest Price") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => a.price - b.price
        );
      }
      if (action.payload === "Highest Price") {
        state.filteredArray = state.filteredArray.sort(
          (a, b) => b.price - a.price
        );
      }
      if (action.payload === "None") {
        state.filteredArray = state.data;
      }
    },

    // filter by range values
    setRangeValue: (state, action) => {
      state.ranges[action.payload.name] = parseInt(action.payload.value);

      if (state.ranges[action.payload.name] === 0) {
        state.filteredArray = state.data;
        return;
      }

      state.filteredArray = state.data.filter((pet, index) => {
        if (pet[action.payload.name] <= action.payload.value) return pet;
      });
    },

    // clear filter
    clearFilter: (state) => {
      state.ranges = {
        attack: 0,
        defence: 0,
        hp: 0,
        speed: 0,
      };

      state.checkboxes = {
        rare: false,
        epic: false,
        legendary: false,
      };

      state.filteredArray = state.data;
    },
  },
});

export const {
  filterPets,
  filterPetsByRange,
  setRangeValue,
  clearFilter,
  filterStats,
} = petDetails.actions;

export default petDetails.reducer;
