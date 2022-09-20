import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";
import "./CoinList.css";
import { useState } from "react";

const CoinList = ({ filteredCoins, onAdd }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <ChakraProvider>
      {filteredCoins.map((filteredCoin) => {
        return (
          <div className="wrapper">
            <TableContainer>
              <Table
                style={{
                  borderCollapse: "separate",
                  borderSpacing: "0 1em",
                }}
                variant="simple"
                colorScheme="messenger"
              >
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Price (USD)</Th>
                    <Th>Daily change (USD)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      {" "}
                      {filteredCoin.name} ({filteredCoin.symbol.toUpperCase()})
                    </Td>
                    <Td> {filteredCoin.current_price}</Td>
                    <Td> {filteredCoin.price_change_24h.toFixed(2)}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button size="lg" onClick={() => onAdd(filteredCoin)}>
              Add
            </Button>
          </div>
        );
      })}
    </ChakraProvider>
  );
};

export default CoinList;
