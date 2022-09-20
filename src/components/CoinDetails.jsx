import React from "react";
import Modal from "./UI/Modal";
import {
  ChakraProvider,
  CloseButton,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  Center,
} from "@chakra-ui/react";
import "./CoinDetails.css";
const CoinDetails = ({ coinDetails, hideDetails }) => {
  return (
    <ChakraProvider>
      <Modal>
        <StatGroup className="details-box">
          <Stat size="md">
            <StatLabel>Liquidity score</StatLabel>
            <StatNumber>{coinDetails.liquidity_score}</StatNumber>
          </Stat>
          <Stat size="md">
            <StatLabel>Public interest score</StatLabel>
            <StatNumber>{coinDetails.public_interest_score}</StatNumber>
          </Stat>
          <Stat size="md">
            <StatLabel>Community score</StatLabel>
            <StatNumber>{coinDetails.community_score}</StatNumber>
          </Stat>
          <Stat size="md">
            <StatLabel>Developer score</StatLabel>
            <StatNumber>{coinDetails.developer_score}</StatNumber>
          </Stat>
        </StatGroup>
        <Center>
          <Button colorScheme="white" variant="ghost" onClick={hideDetails}>
            Cancel <CloseButton colorScheme="whiteAlpha" />
          </Button>
        </Center>
      </Modal>
    </ChakraProvider>
  );
};

export default CoinDetails;
