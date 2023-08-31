import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bgColor={"white"} borderRadius={"10px"} >
      <Image src={imageSrc} borderRadius={"10px"}></Image>
      <div style={{"padding":"10px"}}>
      <Heading  size={"md"} color={"black"} textAlign={"left"} >{title}</Heading>
      <Text color={"grey"}>{description}</Text>
      <HStack  color={"black"}>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      </div>
      
    </VStack>
  );
};

export default Card;
