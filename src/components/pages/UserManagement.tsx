import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            userName="yosiyong"
            fullName="YongHun"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
