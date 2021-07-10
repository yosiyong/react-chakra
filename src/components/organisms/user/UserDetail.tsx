import { memo, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  FormControl,
  Input
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  onClose: () => void;
  isOpen: boolean;
};

export const UserDetail: VFC<Props> = memo((props) => {
  const { user, onClose, isOpen } = props;

  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>名前</FormControl>
            <Input value={user?.username} isReadOnly />
            <FormControl>フルネーム</FormControl>
            <Input value={user?.name} isReadOnly />
            <FormControl>メールアドレス</FormControl>
            <Input value={user?.email} isReadOnly />
            <FormControl>電話番号</FormControl>
            <Input value={user?.phone} isReadOnly />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
