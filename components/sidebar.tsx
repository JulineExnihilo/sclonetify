import NextImage from "next/image";
import NextLink from "next/link";

import {
  Box,
  Divider,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import Menu from "./commons/menu";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const SideBar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        {/* Nav menu */}
        <Box marginBottom="20px">
          <Menu menuData={navMenu} />
        </Box>
        {/* Music menu */}
        <Box marginBottom="20px">
          <Menu menuData={musicMenu} />
        </Box>
        <Divider bg="gray.900" w="calc(100% - 40px)" margin="0 auto" />
        <Box height="66%" overflowY="auto" paddingY="20%">
          <List spacing={2}>
            {playlists?.map((playlist) => {
              return (
                <ListItem paddingX="20px" key={playlist.id}>
                  <LinkBox>
                    <NextLink
                      href={{
                        pathname: "/playlist/[id]",
                        query: { id: playlist.id },
                      }}
                      passHref
                    >
                      <LinkOverlay>{playlist.name}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
