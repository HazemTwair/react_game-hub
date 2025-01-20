import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletorn = () => {
  return (
    <Card width="280px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameCardSkeletorn;
