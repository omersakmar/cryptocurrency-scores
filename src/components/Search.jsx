import React from "react";
import { useState } from "react";
import { ChakraProvider, Input } from "@chakra-ui/react";
const Search = ({ handleInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleInput}
          placeholder="Search among the largest 100 digital assets"
          size="lg"
        ></Input>
      </form>
    </ChakraProvider>
  );
};

export default Search;
