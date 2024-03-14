import AlertDialog from "@/_components/AlertDialog";
import { useToast } from "@chakra-ui/react";
import { useDeleteBranchStore } from "../_providers/DeleteBranchProvider";
import useDeleteBranchMutation from "@/_hooks/mutations/useDeleteBranchMutation";

const DeleteBranchAlertDialog = () => {
  const toast = useToast();
  const { open, id, resetState } = useDeleteBranchStore((state) => state);
  const { mutateAsync, status } = useDeleteBranchMutation();

  const handleConfirm = async () => {
    if (!id) return;

    try {
      await mutateAsync({ id });
      resetState();
      toast({
        title: "Berhasil menghapus cabang",
        description: "Cabang berhasil dihapus",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Gagal menghapus cabang",
        description: "Terjadi kesalahan saat menghapus cabang",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <AlertDialog
      isOpen={open}
      onClose={() => resetState()}
      title="Hapus cabang"
      description="Apakah anda yakin menghapus cabang ini ?"
      onConfirm={() => handleConfirm()}
      confirmButtonProps={{
        isLoading: status === "pending",
      }}
    />
  );
};

export default DeleteBranchAlertDialog;
