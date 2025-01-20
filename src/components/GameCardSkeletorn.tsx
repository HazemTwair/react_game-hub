import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  minHeight: string;
}

const GameCardSkeletorn = ({ minHeight }: Props) => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody minHeight={minHeight}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameCardSkeletorn;
