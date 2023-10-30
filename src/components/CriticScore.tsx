import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const criticColor = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={criticColor}
      fontSize={14}
      paddingX={2}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
