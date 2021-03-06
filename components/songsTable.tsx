import { Box } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Td,
  Tr,
  Tbody,
  Th,
  IconButton,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useStoreActions } from "easy-peasy";
import { formatDate, formatTime } from "../lib/formatters";

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions((store: any) => store.changeActiveSongs);
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0]);
    playSongs(songs);
  };

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="play"
            colorScheme="green"
            size="lg"
            isRound
            onClick={() => handlePlay()}
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>date added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, i) => (
              <Tr
                sx={{
                  transition: "all .3s",
                  "&:hover": {
                    bg: "rgba(255,255,255,0.1)",
                  },
                }}
                key={song.id}
                cursor="pointer"
                onClick={() => handlePlay(song)}
              >
                <Td>{i + 1}</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      boxSize="45px"
                      boxShadow="2xl"
                      src={`https://picsum.photos/400?random=${song.id}`}
                      borderRadius="3px"
                      marginRight="15px"
                    />
                    <Box>
                      {song.name} <br />
                      <Text fontSize="sm" color="gray">
                        {song.artist.name}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>{formatDate(song.createdAt)}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongTable;
