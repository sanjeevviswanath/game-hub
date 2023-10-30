import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
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
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  // implement Spinner while loading
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
            //bg={genre.id === selectedGenre?.id ? "black" : ""}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />
              {genre.name.length > 12 ? (
                <Tooltip
                  label={genre.name}
                  hasArrow
                  placement="auto"
                  bg="gray.900"
                  color="gray"
                >
                  <Button
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
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
                  textAlign={"left"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  // bg={genre.id === selectedGenre?.id ? "tomato" : ""}
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
    </>
  );
};

export default GenreList;
