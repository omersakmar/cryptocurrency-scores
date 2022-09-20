import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CoinDetails from "./components/CoinDetails";
import CoinList from "./components/CoinList";
import Favourites from "./components/Favourites";
import Search from "./components/Search";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
function App() {
  // STATES
  const [coins, setCoins] = useState([]);
  const [coinDetails, setCoinDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const [query, setQuery] = useState("");

  // FUNCTIONS

  const onAdd = (coin) => {
    const exist = favourites.find((x) => x.id === coin.id);
    if (exist) {
      return favourites;
    }
    setFavourites([...favourites, coin]);
  };
  const onRemove = (coin) => {
    setFavourites(favourites.filter((x) => x.id !== coin.id));
    showDetails(!showDetails);
  };
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleToggle = (e) => {
    setShowDetails(!showDetails);
  };

  // GET THE RESULTS FROM API

  const getCoinList = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const getCoinDetails = (coin) => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin}?market_data=true`)
      .then((res) => {
        setCoinDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getCoinList();
    getCoinDetails();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ChakraProvider>
      <div className="App">
        <div className="coin-list">
          <Search handleInput={handleInput} />
          {filteredCoins.length === 0 && <p>No results.</p>}
          <CoinList
            filteredCoins={filteredCoins}
            onAdd={onAdd}
            getCoinDetails={getCoinDetails}
          />
        </div>
        <div className="favourites">
          <Favourites
            favourites={favourites}
            onRemove={onRemove}
            getCoinDetails={getCoinDetails}
            showDetails={handleDetails}
          />
        </div>
        {showDetails && (
          <CoinDetails coinDetails={coinDetails} hideDetails={handleDetails} />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
