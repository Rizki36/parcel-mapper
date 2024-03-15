import AlertDialog from "@/_components/AlertDialog";
import { useToast } from "@chakra-ui/react";
import { useDeleteBranchAdminStore } from "../_providers/DeleteBranchAdminStore";
import useDeleteBranchAdminMutation from "@/_hooks/mutations/useDeleteBranchAdminMutation";

const DeleteBranchAdminAlertDialog = () => {
  const toast = useToast();
  const { open, id, resetState } = useDeleteBranchAdminStore((state) => state);
  const { mutateAsync, status } = useDeleteBranchAdminMutation();

  const handleConfirm = async () => {
    if (!id) return;

    try {
      await mutateAsync({ id });
      resetState();
      toast({
        title: "Berhasil menghapus admin cabang",
        description: "Admin cabang berhasil dihapus",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Gagal menghapus admin cabang",
        description: "Terjadi kesalahan saat menghapus admin cabang",
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
      title="Hapus admin cabang"
      description="Apakah anda yakin menghapus admin cabang ini ?"
      onConfirm={() => handleConfirm()}
      confirmButtonProps={{
        isLoading: status === "pending",
      }}
    />
  );
};

export default DeleteBranchAdminAlertDialog;
