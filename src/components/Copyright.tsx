import { Text } from "@chakra-ui/react";

const Copyright = () => {
  return (
    <Text fontSize="sm" fontWeight="bold" textAlign="center" marginY={6}>
      &copy; {new Date().getFullYear()} Game Hub | Moash Hamedani - Hazem Twair,
      Inc. All rights reserved.
    </Text>
  );
};
export default Copyright;
