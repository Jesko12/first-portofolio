import styled from "styled-components";

export const Images = styled.div`
  margin: 1rem 0;

  & > img {
    margin-right: 1rem;
    border-radius: 10px;
    border: 1px solid #dfe3e9;
  }
`;

export const ImageUpload = styled.div`
  border-radius: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px dashed #dfe3e9;
  width: 100px;
  height: 100px;
`;

/* Domain */
export const domain = ["Abbasource", "Abba Flora", "Abba Grocery"];

export const superCategories = [
  {
    name: "Furniture",
    title: "Furniture",
  },
  {
    name: "Artwork",
    title: "Decor/Accessories",
  },
  {
    name: "Curtains-Material",
    title: "Curtains and Material",
  },
  {
    name: "System-Furniture",
    title: "System Furniture",
  },
  {
    name: "Bedding-Bath",
    title: "Bedding and Bath",
  },
  {
    name: "Carpet-Rugs",
    title: "Carpet and Rugs",
  },
];

export const furnitureCategories = [
  {
    name: "Seating",
    title: "Seating",
  },
  {
    name: "Storage-Display",
    title: "Storage/Display",
  },
  {
    name: "Table",
    title: "Table",
  },
  {
    name: "Bed",
    title: "Bed",
  },
];

export const systemFurnitureCategories = [
  {
    name: "Kitchen",
    title: "Kitchen",
  },

  {
    name: "Wardrobe",
    title: "Wardrobe",
  },

  {
    name: "Banquet",
    title: "Banquet",
  },
  {
    name: "Work-Station",
    title: "Work Station",
  },
];

export const decorCategories = [
  {
    name: "Lighting",
    title: "Lighting",
  },
  {
    name: "Painting",
    title: "Painting",
  },
  {
    name: "Mirror",
    title: "Mirror",
  },
  {
    name: "Divider-Partition",
    title: "Divider/Partition",
  },
  {
    name: "Carpet-Rugs",
    title: "Carpet/Rugs",
  },
  {
    name: "Vases",
    title: "Vases",
  },
  {
    name: "Sculptures",
    title: "Sculptures",
  },
  {
    name: "Accents",
    title: "Accents",
  },
];

export const curtainsAndMaterialCategories = [
  {
    name: "Woods",
    title: "Woods",
  },
  {
    name: "Indoor-Fabric",
    title: "Indoor Fabric",
  },
  {
    name: "Outdoor-Fabric",
    title: "Outdoor Fabric",
  },
  {
    name: "Curtain",
    title: "Curtain",
  },
];

export const beddingAndBathCategories = [
  {
    name: "Bedding",
    title: "Bedding",
  },
  {
    name: "Mattress",
    title: "Mattress",
  },
  {
    name: "Bathroom-Accessories",
    title: "Bathroom Accessories",
  },
];

export const carpetAndRugsCategories = [
  {
    name: "Wall-to-Wall",
    title: "Wall to Wall carpet",
  },
  {
    name: "Rugs",
    title: "Rugs",
  },
];

export const seatingTypes = [
  {
    name: "Armchair",
    title: "Armchair",
  },
  {
    name: "Sofa",
    title: "Sofa",
  },
  {
    name: "Ottoman",
    title: "Ottoman",
  },
  {
    name: "Dining-Armchair",
    title: "Dining Armchair",
  },
  {
    name: "Writing-Chair",
    title: "Writing Chair",
  },
  {
    name: "Chaise",
    title: "Chaise",
  },
  {
    name: "Occasional-Chair",
    title: "Occasional Chair",
  },
];

export const storageDisplayTypes = [
  {
    name: "Cabinets",
    title: "Cabinets",
  },
  {
    name: "TV-Cabinets",
    title: "TV Cabinets",
  },
  {
    name: "Etagere",
    title: "Etagere",
  },
  {
    name: "Server",
    title: "Server",
  },
  {
    name: "Bookcase",
    title: "Bookcase",
  },
  {
    name: "Chest",
    title: "Chest",
  },
];

export const tableTypes = [
  {
    name: "Writing-Desk",
    title: "Writing Desk",
  },
  {
    name: "Console",
    title: "Console",
  },
  {
    name: "Center-Table",
    title: "Center Table",
  },
  {
    name: "Coffee-Table",
    title: "Coffee Table",
  },
  {
    name: "Side-Table",
    title: "Side Table",
  },
  {
    name: "Occasional-Table",
    title: "Occasional Table",
  },
  {
    name: "Dining-Table",
    title: "Dining Table",
  },
  {
    name: "Bedside-Table",
    title: "Bed Side Table",
  },
  {
    name: "Vanity-Table",
    title: "Vanity Table",
  },
];

export const accentsType = [
  {
    name: "Trays",
    title: "Trays",
  },
  {
    name: "Candle-Holders",
    title: "Candle Holders",
  },
  {
    name: "Hangers",
    title: "Hangers",
  },
  {
    name: "Pillows",
    title: "Pillows",
  },
  {
    name: "Laundry-Box",
    title: "Laundry Box",
  },
  {
    name: "Throw",
    title: "Throw",
  },
  {
    name: "Knob-Handle",
    title: "Knob Handle",
  },
  {
    name: "Wine-Closer",
    title: "Wine Closer",
  },
  {
    name: "Window-Hardware",
    title: "Window Hardware",
  },
  {
    name: "Photo-Frames",
    title: "Photo Frames",
  },
  {
    name: "Tableware",
    title: "Tableware",
  },
];

export const collection = [
  {
    name: "Designer",
    title: "Designer",
  },
  {
    name: "OCIC",
    title: "OCIC",
  },
  {
    name: "Prive",
    title: "Prive",
  },
  {
    name: "Studio",
    title: "Studio",
  },
];

export const room = [
  {
    name: "Livingroom",
    title: "Living Room",
  },
  {
    name: "Dinningroom",
    title: "Dinning Room",
  },
  {
    name: "Bedroom",
    title: "Bedroom",
  },
  {
    name: "Workspace",
    title:  "Workspace",
  }
];
