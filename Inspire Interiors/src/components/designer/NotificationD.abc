import React from "react";
import { Flex, Icon, chakra } from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";

function NotificationD(num) {
  return (
    <Flex w="full" justifyContent="center" alignItems="center">
      <chakra.span pos="relative" display="inline-block">
        <Icon as={IoMdNotifications} boxSize={7}></Icon>
        <chakra.span
          pos="absolute"
          top="-1px"
          right="-1px"
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="red.100"
          transform="translate(50%,-50%)"
          bg="red.600"
          rounded="full"
        >
          {num.count}
        </chakra.span>
      </chakra.span>
    </Flex>
  );
}

export default NotificationD;
