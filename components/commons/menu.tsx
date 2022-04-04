import NextLink from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

const Menu = ({ menuData }) => {
  return (
    <List spacing={2}>
      {menuData.map((menu) => (
        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
          <LinkBox>
            <NextLink href={menu.route} passHref>
              <LinkOverlay>
                <ListIcon as={menu.icon} color="white" marginRight="20px" />
                {menu.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
