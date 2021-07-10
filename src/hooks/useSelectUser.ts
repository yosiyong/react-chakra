import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//ユーザー一覧情報から指定IDのユーザー情報を取得してModalで表示する
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;

    //渡されたユーザー一覧(users)から指定idのユーザー取得
    const targetUser = users.find((user) => user.id === id);

    //nullがあり得る場合
    setSelectedUser(targetUser ?? null);
    //targetUserがnullはありえない場合の表記
    //setSelectedUser(targetUser!);

    onOpen();
  }, []);

  return { selectedUser, onSelectUser };
};
