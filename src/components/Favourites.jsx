import { Button, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./Favourites.css";
const Favourites = ({ favourites, onRemove, getCoinDetails, showDetails }) => {
  return (
    <ChakraProvider>
      <div className="favourites">
        <h1 className="watchlist">Watchlist</h1>
        {favourites.length === 0 && <div>List is empty</div>}
        {favourites.map((coin) => {
          return (
            <div className="favourites-list">
              <p>{coin.name}</p>
              <button
                onClick={() => {
                  getCoinDetails(coin.id);
                  showDetails(false);
                }}
              >
                <Button colorScheme="white" variant="ghost">
                  Show scores
                </Button>
              </button>

              <Button
                colorScheme="white"
                variant="ghost"
                onClick={() => onRemove(coin)}
              >
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    </ChakraProvider>
  );
};

export default Favourites;
