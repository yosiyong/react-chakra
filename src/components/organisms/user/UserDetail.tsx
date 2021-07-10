import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  FormControl,
  Input,
  ModalFooter
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  onClose: () => void;
  isOpen: boolean;
  isAdmin?: boolean;
};

export const UserDetail: VFC<Props> = memo((props) => {
  const { user, onClose, isOpen, isAdmin = false } = props;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClickUpdate = () => alert();
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>名前</FormControl>
            <Input
              value={username}
              onChange={onChangeUserName}
              isReadOnly={!isAdmin}
            />
            <FormControl>フルネーム</FormControl>
            <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
            <FormControl>メールアドレス</FormControl>
            <Input
              value={email}
              onChange={onChangeEmail}
              isReadOnly={!isAdmin}
            />
            <FormControl>電話番号</FormControl>
            <Input
              value={phone}
              onChange={onChangePhone}
              isReadOnly={!isAdmin}
            />
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
