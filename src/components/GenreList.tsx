import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url-crop";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            {genre.name.length > 12 ? (
              <Tooltip
                label={genre.name}
                hasArrow
                placement="top"
                bg="gray.800"
                color="white"
              >
                <Button
                  onClick={() => {
                    onSelectedGenre(genre);
                  }}
                  fontSize="lg"
                  variant={"link"}
                >
                  {`${genre.name.slice(0, 10)}...`}
                </Button>
              </Tooltip>
            ) : (
              <Button
                onClick={() => {
                  onSelectedGenre(genre);
                }}
                fontSize="lg"
                variant={"link"}
              >
                {genre.name}
              </Button>
            )}
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
